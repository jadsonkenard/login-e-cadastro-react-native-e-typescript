import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fz,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    height: hp(8),
    width: wp(85),
    backgroundColor: theme.colors.gray100,
    borderRadius: wp(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(2),
    marginTop: hp(3)
  },
  input: {
    position: "absolute",
    left: wp(8),
    height: hp(7),
    width: wp(65),
    color: theme.colors.gray,
    fontSize: fz(2.),
    fontFamily: theme.fonts.light
  },
  icons: {
    
  }
});
