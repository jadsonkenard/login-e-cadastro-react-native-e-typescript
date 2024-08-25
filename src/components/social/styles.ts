import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { responsiveHeight as hp, responsiveWidth as wp } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray100,
        height: hp(7),
        width: wp(14),
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: wp(4),
        marginVertical: hp(1)
    },
    socialImage: {
        height: hp(4),
        width: wp(8)
    }
})