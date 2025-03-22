import React, {useMemo} from 'react';
import {
    Canvas,
    LinearGradient,
    Mask,
    Paragraph,
    Rect,
    Skia,
    TextAlign,
    useFonts,
    vec,
} from '@shopify/react-native-skia';
import type {FontWeight} from '@shopify/react-native-skia/src/skia/types/Font';
import {Dimensions, ViewStyle} from 'react-native';

const FONT_FAMILY_NAME = 'Ubuntu';

export enum GradientTextWeight {
    Regular = 400,
    Bold = 700,
}

export enum GradientTextAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
}

interface GradientTextProps {
    text: string;
    fontSize: number;
    colors: string[];
    vectorStartingPercentages: [number, number];
    vectorEndingPercentages: [number, number];
    textWeight?: GradientTextWeight;
    textAlignment?: GradientTextAlignment;
    containerStyle?: ViewStyle;
}

const MAX_RENDER_WIDTH = Dimensions.get('window').width;

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  fontSize,
  colors,
  vectorStartingPercentages,
  vectorEndingPercentages,
  textWeight = GradientTextWeight.Regular,
  textAlignment = GradientTextAlignment.Left,
  containerStyle,
}) => {
    useFonts({
        Ubuntu: [
            require('../assets/fonts/Ubuntu-Bold.ttf'),
            require('../assets/fonts/Ubuntu-Regular.ttf'),
        ],
    });

    const paragraph = Skia
        .ParagraphBuilder
        .Make({
            textAlign: textAlignment as unknown as TextAlign,
        })
        .pushStyle({
            fontFamilies: [FONT_FAMILY_NAME],
            fontSize: fontSize,
            fontStyle: {weight: textWeight as unknown as FontWeight},
            color: Skia.Color('black'),
            heightMultiplier: 1
        })
        .addText(text)
        .pop()
        .build();

    paragraph.layout(MAX_RENDER_WIDTH);

    const paragraphHeight = paragraph.getHeight();
    const paragraphWidth = paragraph.getLongestLine();

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
