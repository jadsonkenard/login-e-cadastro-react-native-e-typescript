import { Platform, StyleSheet } from "react-native";
import { theme } from "../../theme";
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fz,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.brack100,
  },
  title: {
    alignSelf: "flex-start",
    marginLeft: wp(7.5),
    marginTop: Platform.OS == "android" ? 50 : 0,
    fontFamily: theme.fonts.black,
    fontSize: fz(5),
    color: theme.colors.primary,
  },
  subTitle: {
    alignSelf: "flex-start",
    marginLeft: wp(7.5),
    fontFamily: theme.fonts.black,
    fontSize: fz(5),
    color: theme.colors.primary,
  },
  textTerms: {
    fontFamily: theme.fonts.light,
    fontSize: fz(2.2),
    color: theme.colors.gray,
    marginTop: hp(1),
  },
  button: {
    alignItems: "center"
  },
  message: {
    color: theme.colors.danger,
  },
  back: {
    alignSelf: "flex-start",
  },
  signWithText: {
    fontFamily: theme.fonts.light,
    color: theme.colors.gray,
    fontSize: fz(2.2),
    marginTop: hp(2)
  },
  signWith: {
    flexDirection: "row"
  },
  socialView: {
    alignItems: "center",
  }
});
