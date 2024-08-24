import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { responsiveFontSize as fz } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.brack100
    },
    title: {
        fontFamily: theme.fonts.black,
        fontSize: fz(5),
        color: theme.colors.primary
    }
})