import {View, StyleSheet} from "react-native";
import {PromotionTextWithPath} from "@/components/PromotionTextWithPath";

export default function Tab() {
    return (
        <View style={styles.container}>
            <PromotionTextWithPath />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});