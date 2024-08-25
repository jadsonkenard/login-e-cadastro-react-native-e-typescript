import { Platform, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { responsiveHeight as hp, responsiveFontSize as fz } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.brack100
    },
    title: {
        marginTop: Platform.OS == "android" ? 50 : 0,
        fontFamily: theme.fonts.black,
        fontSize: fz(5),
        color: theme.colors.primary
    },
    subTitle: {
        fontFamily: theme.fonts.black,
        fontSize: fz(5),
        color: theme.colors.primary,
      },
      message: {
        color: theme.colors.danger,
        fontFamily: theme.fonts.light,
        fontSize: fz(2.2),
        marginTop: hp(1)
      }
})