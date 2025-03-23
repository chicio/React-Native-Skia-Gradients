import {ScrollView, StyleSheet} from "react-native";
import {PromotionTextWithPath} from "@/components/PromotionTextWithPath";

export default function Tab() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <PromotionTextWithPath />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});