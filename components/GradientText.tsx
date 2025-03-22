import React, {useMemo} from 'react';
import {
    Canvas,
    FontWeight,
    LinearGradient,
    Mask,
    Paragraph,
    Rect,
    Skia,
    TextAlign,
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

interface Gradient {
    colors: string[];
    startPercentages: [number, number]
    endPercentages: [number, number]
}

interface FontStyle {
    size: number;
    weight: GradientFontWeight;
    alignment: GradientTextAlignment;
    lineHeight: number
}

interface GradientTextProps {
    text: string;
    fontStyle: FontStyle;
    gradient: Gradient
    containerStyle?: ViewStyle;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  fontStyle,
  gradient,
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
            .Make({ textAlign: skiaTextAlign[fontStyle.alignment] }, customFontMgr)
            .pushStyle({
                fontSize: fontStyle.size,
                fontStyle: {
                    weight: skiaFontWeight[fontStyle.weight]
                },
                color: Skia.Color('black'),
                heightMultiplier: fontStyle.lineHeight
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
                            gradient.startPercentages[0] * paragraphWidth,
                            gradient.startPercentages[1] * paragraphHeight,
                        )}
                        end={vec(
                            gradient.endPercentages[0] * paragraphWidth,
                            gradient.endPercentages[1] * paragraphHeight,
                        )}
                        colors={gradient.colors}
                    />
                </Rect>
            </Mask>
        </Canvas>
    );
};
