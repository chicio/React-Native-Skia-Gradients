import React from 'react';
import {Canvas, LinearGradient, Mask, Path, Rect, vec,} from '@shopify/react-native-skia';
import {LayoutChangeEvent, StyleSheet, Text, View,} from 'react-native';

const SVG_UNDERLINE =
    'M1.83778 3C1.07806 3 0.407248 2.69942 0.253688 2.26222C0.0839635 1.77037 0.649712 1.29218 1.53066 1.19199C2.43586 1.09179 23.9909 -1.2354 46.5642 0.895963C47.4452 0.977939 48.0433 1.44702 47.8897 1.94343C47.7442 2.43983 46.9118 2.77229 46.0308 2.69032C24.0475 0.622712 2.36312 2.95901 2.1449 2.98178C2.03984 2.99545 1.93477 3 1.8297 3H1.83778Z';

const BASE_UNDERLINE_WIDTH = 48;
const BASE_UNDERLINE_HEIGHT = 3;
const BASE_TEXT_LINE_HEIGHT = 14;
const UNDERLINE_MULTIPLIER_FACTOR = 1.1;
const TOP_POSITION_ADDITIONAL_PADDING = 0.2;

type UnderlineConfig = {
    width: number;
    height: number;
    scalingFactorWidth: number;
    scalingFactorHeight: number;
    topPosition: number;
};

export const PromotionTextWithPath: React.FC = () => {
    const [underlineConfig, setUnderlineConfig] = React.useState<UnderlineConfig | undefined>(undefined);

    const onDealsTextLayout = (event: LayoutChangeEvent) => {
        const {width, height} = event.nativeEvent.layout;

        const underlineWidth = width * UNDERLINE_MULTIPLIER_FACTOR;
        const underlineHeight = (BASE_UNDERLINE_HEIGHT * styles.deals.fontSize) / BASE_TEXT_LINE_HEIGHT;

        const scalingFactorWidth = (width / BASE_UNDERLINE_WIDTH) * UNDERLINE_MULTIPLIER_FACTOR;
        const scalingFactorHeight = underlineHeight / BASE_UNDERLINE_HEIGHT;

        const paddingBottom = (height - styles.deals.fontSize) / 2;
        const topPosition = height - paddingBottom + paddingBottom * TOP_POSITION_ADDITIONAL_PADDING;

        setUnderlineConfig({
            width: underlineWidth,
            height: underlineHeight,
            scalingFactorWidth,
            scalingFactorHeight,
            topPosition,
        });
    };

    return (
        <View style={styles.container}>
            <Text
                style={styles.deals}
                onLayout={onDealsTextLayout}
                numberOfLines={1}>
                DEALS
            </Text>
            {underlineConfig && (
                <Canvas
                    style={{
                        width: Math.ceil(underlineConfig.width),
                        height: Math.ceil(underlineConfig.height),
                        position: 'absolute',
                        top: underlineConfig.topPosition,
                        right: -(underlineConfig.width * 0.05),
                    }}>
                    <Mask
                        mode={'alpha'}
                        mask={
                            <Path
                                path={SVG_UNDERLINE}
                                color={"#000000"}
                                transform={[
                                    {
                                        scaleX: underlineConfig.scalingFactorWidth,
                                    },
                                    {
                                        scaleY: underlineConfig.scalingFactorHeight,
                                    },
                                ]}
                            />
                        }>
                        <Rect
                            x={0}
                            y={0}
                            width={underlineConfig.width}
                            height={underlineConfig.height}>
                            <LinearGradient
                                start={vec(0, underlineConfig.height / 2)}
                                end={vec(underlineConfig.width, underlineConfig.height / 2)}
                                colors={['#F2007C', '#F7AF17']}
                            />
                        </Rect>
                    </Mask>
                </Canvas>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deals: {
        fontSize: 48,
        fontFamily: 'PermanentMarker-Regular'
    },
});
