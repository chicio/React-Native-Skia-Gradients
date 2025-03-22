import {ScrollView, StyleSheet, View} from "react-native";
import {GradientFontWeight, GradientText, GradientTextAlignment} from "@/components/GradientText";

export default function Tab() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <GradientText
                text={"Amazing!"}
                fontStyle={{
                    size: 16,
                    alignment: GradientTextAlignment.Center,
                    weight: GradientFontWeight.Regular,
                    lineHeight: 1
                }}
                gradient={{
                    colors: ['#F2007C', '#F7AF17'],
                    startPercentages: [0, 0.5],
                    endPercentages: [1, 0.5]
                }}
            />
            <GradientText
                text={"Amazing!"}
                fontStyle={{
                    size: 20,
                    alignment: GradientTextAlignment.Center,
                    weight: GradientFontWeight.Regular,
                    lineHeight: 1

                }}
                gradient={{
                    colors: ['#F2007C', '#F7AF17'],
                    startPercentages: [0, 0.5],
                    endPercentages: [1, 0.5]
                }}
            />
            <GradientText
                text={"Amazing!"}
                fontStyle={{
                    size: 24,
                    alignment: GradientTextAlignment.Center,
                    weight: GradientFontWeight.Regular,
                    lineHeight: 1
                }}
                gradient={{
                    colors: ['#F2007C', '#F7AF17'],
                    startPercentages: [0, 0.5],
                    endPercentages: [1, 0.5]
                }}
            />

            <GradientText
                text={"Amazing!"}
                fontStyle={{
                    size: 28,
                    alignment: GradientTextAlignment.Center,
                    weight: GradientFontWeight.Regular,
                    lineHeight: 1
                }}
                gradient={{
                    colors: ['#F2007C', '#F7AF17'],
                    startPercentages: [0, 0.5],
                    endPercentages: [1, 0.5]
                }}
            />
            <GradientText
                text={"Amazing!"}
                fontStyle={{
                    size: 32,
                    alignment: GradientTextAlignment.Center,
                    weight: GradientFontWeight.Bold,
                    lineHeight: 1
                }}
                gradient={{
                    colors: ['#F2007C', '#F7AF17'],
                    startPercentages: [0, 0.5],
                    endPercentages: [1, 0.5]
                }}
            />
            <GradientText
                text={"Amazing!"}
                fontStyle={{
                    size: 36,
                    alignment: GradientTextAlignment.Center,
                    weight: GradientFontWeight.Bold,
                    lineHeight: 1
                }}
                gradient={{
                    colors: ['#F2007C', '#F7AF17'],
                    startPercentages: [0, 0.5],
                    endPercentages: [1, 0.5]
                }}
            />
            <GradientText
                text={"This is really amazing even if text goes on multiple lines and with a custom alignment!!!"}
                fontStyle={{
                    size: 24,
                    alignment: GradientTextAlignment.Left,
                    weight: GradientFontWeight.Regular,
                    lineHeight: 1
                }}
                gradient={{
                    colors: ['#F2007C', '#F7AF17'],
                    startPercentages: [0, 0.5],
                    endPercentages: [1, 0.5]
                }}
                containerStyle={{ backgroundColor: "#CFDFEF", marginTop: 36}}
            />
            <GradientText
                text={"This is really amazing even if text goes on multiple lines and with a custom alignment, plus different gradient direction!!!"}
                fontStyle={{
                    size: 24,
                    alignment: GradientTextAlignment.Right,
                    weight: GradientFontWeight.Regular,
                    lineHeight: 1.5
                }}
                gradient={{
                    colors: ['#F2007C', '#F7AF17'],
                    startPercentages: [0, 0],
                    endPercentages: [0, 1]
                }}
                containerStyle={{ backgroundColor: "#CFDFEF", marginTop: 36}}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    }
});