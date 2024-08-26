import { StyleSheet, Dimensions } from "react-native";
import { responsiveHeight as hp, responsiveWidth as wp } from "react-native-responsive-dimensions";
import { theme } from "../../theme";

const width = Dimensions.get("window").width

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        height: width * 0.2,
        width: width * 0.2,
        borderRadius: wp(50),
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        marginTop: hp(2)
    }
})