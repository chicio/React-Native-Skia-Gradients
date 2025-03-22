import {StyleSheet, View} from "react-native";
import {GradientText, GradientTextAlignment, GradientTextWeight} from "@/components/GradientText";

export default function Tab() {
    return (
        <View style={styles.container}>
            <GradientText
                text={"Amazing!"}
                fontSize={20}
                textAlignment={GradientTextAlignment.Center}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />
            <GradientText
                text={"Amazing!"}
                fontSize={24}
                textAlignment={GradientTextAlignment.Left}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />

            <GradientText
                text={"Amazing!"}
                fontSize={28}
                textAlignment={GradientTextAlignment.Right}
                textWeight={GradientTextWeight.Bold}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />
            <GradientText
                text={"Amazing!"}
                fontSize={32}
                textAlignment={GradientTextAlignment.Right}
                textWeight={GradientTextWeight.Bold}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
});