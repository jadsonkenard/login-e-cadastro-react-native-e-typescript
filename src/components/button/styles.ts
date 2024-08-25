import { StyleSheet } from "react-native";
import { responsiveHeight as hp, responsiveWidth as wp } from "react-native-responsive-dimensions";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        height: hp(9),
        width: wp(18),
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        marginTop: hp(2)
    }
})