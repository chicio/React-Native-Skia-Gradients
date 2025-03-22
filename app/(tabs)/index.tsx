import {StyleSheet, View} from "react-native";
import {GradientText, GradientTextWeight} from "@/components/GradientText";

export default function Tab() {
    return (
        <View style={styles.container}>
            <GradientText
                text={"Amazing!"}
                fontSize={16}
                textWeight={GradientTextWeight.Regular}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />
            <GradientText
                text={"Amazing!"}
                fontSize={20}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />
            <GradientText
                text={"Amazing!"}
                fontSize={24}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />

            <GradientText
                text={"Amazing!"}
                fontSize={28}
                textWeight={GradientTextWeight.Regular}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />
            <GradientText
                text={"Amazing!"}
                fontSize={32}
                textWeight={GradientTextWeight.Bold}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />
            <GradientText
                text={"Amazing!"}
                fontSize={36}
                textWeight={GradientTextWeight.Bold}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
            />
            <GradientText
                text={"This is really amazing even if on multiple lines and with a custom text alignment!!!"}
                fontSize={24}
                textWeight={GradientTextWeight.Regular}
                colors={['#F2007C', '#F7AF17']}
                vectorStartingPercentages={[0, 0.5]}
                vectorEndingPercentages={[1, 0.5]}
                containerStyle={{ backgroundColor: "#CFDFEF", marginTop: 36}}
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
    }
});