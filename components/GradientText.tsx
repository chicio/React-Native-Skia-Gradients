import React, { useMemo } from 'react';
import {
    Canvas,
    LinearGradient,
    Mask,
    Paragraph,
    Rect,
    Skia,
    TextAlign,
    FontWeight,
    useFonts,
    vec,
} from '@shopify/react-native-skia';
import {Dimensions, ViewStyle} from 'react-native';

const FONT_FAMILY_NAME = 'Ubuntu';
const paragraphPadding = 5;

export enum GradientFontWeight {
    Regular = 400,
    Bold = 700,
}

export enum GradientTextAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
}

const skiaFontWeight: Record<GradientFontWeight, FontWeight> = {
    [GradientFontWeight.Regular]: FontWeight.Normal,
    [GradientFontWeight.Bold]: FontWeight.Bold
}

const skiaTextAlign: Record<GradientTextAlignment, TextAlign> = {
    [GradientTextAlignment.Center]: TextAlign.Center,
    [GradientTextAlignment.Left]: TextAlign.Left,
    [GradientTextAlignment.Right]: TextAlign.Right,
}

interface GradientTextProps {
    text: string;
    fontSize: number;
    colors: string[];
    vectorStartingPercentages: [number, number];
    vectorEndingPercentages: [number, number];
    textWeight?: GradientFontWeight;
    textAlignment?: GradientTextAlignment;
    containerStyle?: ViewStyle;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  fontSize,
  colors,
  vectorStartingPercentages,
  vectorEndingPercentages,
  textWeight = GradientFontWeight.Regular,
  textAlignment = GradientTextAlignment.Center,
  containerStyle,
}) => {
    const customFontMgr = useFonts({
        [FONT_FAMILY_NAME]: [
            require(`../assets/fonts/Ubuntu-Bold.ttf`),
            require(`../assets/fonts/Ubuntu-Regular.ttf`),
        ],
    });

    const paragraph = useMemo(() => {
        if (!customFontMgr) {
            return null;
        }
        return Skia
            .ParagraphBuilder
            .Make({ textAlign: skiaTextAlign[textAlignment] }, customFontMgr)
            .pushStyle({
                fontSize: fontSize,
                fontStyle: {
                    weight: skiaFontWeight[textWeight]
                },
                color: Skia.Color('black'),
                heightMultiplier: 1
            })
            .addText(text)
            .build();
    }, [customFontMgr]);

    if (!paragraph) {
        return null
    }

    paragraph.layout(Dimensions.get('window').width);

    const paragraphHeight = paragraph.getHeight() + paragraphPadding;
    const paragraphWidth = paragraph.getLongestLine() + paragraphPadding;

    const canvasStyle: ViewStyle = {
        width: paragraphWidth,
        height: paragraphHeight,
        ...containerStyle,
    };

    return (
        <Canvas style={canvasStyle}>
            <Mask
                mode={'alpha'}
                mask={<Paragraph paragraph={paragraph} x={0} y={0} width={paragraphWidth}/>}>
                <Rect x={0} y={0} width={paragraphWidth} height={paragraphHeight}>
                    <LinearGradient
                        start={vec(
                            vectorStartingPercentages[0] * paragraphWidth,
                            vectorStartingPercentages[1] * paragraphWidth,
                        )}
                        end={vec(
                            vectorEndingPercentages[0] * paragraphWidth,
                            vectorEndingPercentages[1] * paragraphWidth,
                        )}
                        colors={colors}
                    />
                </Rect>
            </Mask>
        </Canvas>
    );
};
