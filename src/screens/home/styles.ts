import { Platform, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { responsiveFontSize as fz, responsiveWidth as wp } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.brack100,
    },
    title: {
        marginTop: Platform.OS == "android" ? 50 : 0,
        fontFamily: theme.fonts.black,
        fontSize: fz(5),
        color: theme.colors.primary,
        alignSelf: "flex-start",
        marginLeft: wp(7.5),
    }
})