// import React, { useMemo } from 'react';
// import {
//     Canvas,
//     LinearGradient,
//     Mask,
//     Paragraph,
//     Rect,
//     Skia,
//     TextAlign,
//     useFonts,
//     vec,
// } from '@shopify/react-native-skia';
// import type { FontWeight } from '@shopify/react-native-skia/src/skia/types/Font';
// import {Dimensions, ViewStyle} from 'react-native';
//
// const FONT_FAMILY_NAME = 'Ubuntu';
//
// export enum GradientTextWeight {
//     Regular = 400,
//     Bold = 700,
// }
//
// export enum GradientTextAlignment {
//     Left = 0,
//     Right = 1,
//     Center = 2,
// }
//
// interface GradientTextProps {
//     text: string;
//     fontSize: number;
//     textAlignment: GradientTextAlignment;
//     colors: string[];
//     vectorStartingPercentages: [number, number];
//     vectorEndingPercentages: [number, number];
//     textWeight?: GradientTextWeight;
//     style?: ViewStyle;
// }
//
// const MAX_RENDER_WIDTH = Dimensions.get('window').width;
//
// export const GradientText: React.FC<GradientTextProps> = ({
//                                                               text,
//                                                               fontSize,
//                                                               textAlignment,
//                                                               colors,
//                                                               vectorStartingPercentages,
//                                                               vectorEndingPercentages,
//                                                               textWeight = GradientTextWeight.Regular,
//                                                               style,
//                                                           }) => {
//     useFonts({
//         Ubuntu: [
//             require('app/resource/fonts/Ubuntu-Bold.ttf'),
//             require('app/resource/fonts/Ubuntu-Regular.ttf'),
//             require('app/resource/fonts/Ubuntu-Italic.ttf'),
//         ],
//     });
//
//     const paragraph = useMemo(() => {
//         const p = Skia.ParagraphBuilder.Make({
//             textAlign: textAlignment as unknown as TextAlign,
//         })
//             .pushStyle({
//                 fontFamilies: [FONT_FAMILY_NAME],
//                 fontSize: fontSize,
//                 fontStyle: { weight: textWeight as unknown as FontWeight },
//                 color: Skia.Color('black'),
//             })
//             .addText(text)
//             .pop()
//             .build();
//         p.layout(MAX_RENDER_WIDTH);
//
//         return p;
//     }, [fontSize, textAlignment, textWeight, text]);
//
//     const pHeight = Math.ceil(paragraph.getHeight());
//     const pWidth = Math.ceil(paragraph.getLongestLine());
//
//     const canvasStyle: ViewStyle = {
//         width: pWidth,
//         height: pHeight,
//         ...style,
//     };
//
//     return (
//         <Canvas style={canvasStyle}>
//             <Mask
//                 mode={'alpha'}
//                 mask={<Paragraph paragraph={paragraph} x={0} y={0} width={pWidth} />}>
//                 <Rect x={0} y={0} width={pWidth} height={pHeight}>
//                     <LinearGradient
//                         start={vec(
//                             vectorStartingPercentages[0] * pWidth,
//                             vectorStartingPercentages[1] * pWidth,
//                         )}
//                         end={vec(
//                             vectorEndingPercentages[0] * pWidth,
//                             vectorEndingPercentages[1] * pWidth,
//                         )}
//                         colors={colors}
//                     />
//                 </Rect>
//             </Mask>
//         </Canvas>
//     );
// };
