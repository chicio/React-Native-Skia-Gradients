import React from 'react';
import {Canvas, LinearGradient, Mask, Path, Rect, vec,} from '@shopify/react-native-skia';
import {LayoutChangeEvent, StyleSheet, Text, View, ViewStyle,} from 'react-native';

const underlineSvg =
    'M1.83778 3C1.07806 3 0.407248 2.69942 0.253688 2.26222C0.0839635 1.77037 0.649712 1.29218 1.53066 1.19199C2.43586 1.09179 23.9909 -1.2354 46.5642 0.895963C47.4452 0.977939 48.0433 1.44702 47.8897 1.94343C47.7442 2.43983 46.9118 2.77229 46.0308 2.69032C24.0475 0.622712 2.36312 2.95901 2.1449 2.98178C2.03984 2.99545 1.93477 3 1.8297 3H1.83778Z';
const underlineBaseWidth = 48;
const underlineBaseHeight = 3;
const underlineMultiplierFactor = 1.1;
const padding = 5;

interface UnderlineConfig {
    scalingFactor: number;
    width: number;
    height: number;
}

interface LastMinuteDealsPromotionBadgeProps {
    style?: ViewStyle;
}

export const PromotionTextWithPath: React.FC<
    LastMinuteDealsPromotionBadgeProps
> = ({style}) => {
    const [underlineConfig, setUnderlineConfig] = React.useState<UnderlineConfig | null>(null);

    const onDealsTextLayout = (event: LayoutChangeEvent) => {
        const {width} = event.nativeEvent.layout;
        const scalingFactor =
            (width / underlineBaseWidth) * underlineMultiplierFactor;
        const underlineWidth = width * underlineMultiplierFactor;
        const underlineHeight = underlineBaseHeight * scalingFactor;

        setUnderlineConfig({
            scalingFactor,
            width: underlineWidth,
            height: underlineHeight,
        });
    };

    return (
        <View style={{...styles.container, ...style}}>
            <Text style={styles.deals} onLayout={onDealsTextLayout}>
                DEALS
            </Text>
            {
                underlineConfig && <Canvas style={{
                    width: underlineConfig.width,
                    height: underlineConfig.height + padding,
                    position: 'absolute',
                    bottom: -padding,
                    left: -5,
                }}>
                    <Mask
                        mode={'alpha'}
                        mask={
                            <Path
                                path={underlineSvg}
                                color={'#EAEAEB'}
                                transform={[{scale: underlineConfig.scalingFactor}]}
                            />
                        }>
                        <Rect
                            x={0}
                            y={0}
                            width={underlineConfig.width}
                            height={underlineConfig.height}>
                            <LinearGradient
                                start={vec(0, underlineBaseHeight / 2)}
                                end={vec(underlineConfig.width, underlineBaseHeight / 2)}
                                colors={[
                                    '#F2007C', '#F7AF17'
                                ]}
                            />
                        </Rect>
                    </Mask>
                </Canvas>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 2,
        overflow: "visible"
    },
    deals: {
        fontSize: 48,
        fontFamily: 'PermanentMarker-Regular'
    },
});
