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
    backgroundColor: theme.colors.brack100,
    alignItems: "center",
  },
  title: {
    marginTop: hp(7),
    fontFamily: theme.fonts.black,
    fontSize: fz(5),
    color: theme.colors.primary,
    alignSelf: "flex-start",
    marginLeft: wp(7.5),
  },
  subTitle: {
    fontFamily: theme.fonts.black,
    fontSize: fz(5),
    color: theme.colors.primary,
    alignSelf: "flex-start",
    marginLeft: wp(7.5),
  },
  touchableMessage: {
    alignSelf: "flex-end",
    marginRight: wp(7.5)
  },
  message: {
    color: theme.colors.danger,
    fontFamily: theme.fonts.light,
    fontSize: fz(2.2),
    marginTop: hp(1),
  },
  register: {
    marginTop: hp(5)
  },
  messageRegister: {
    color: theme.colors.primary,
  },
  registerText: {
    fontFamily: theme.fonts.light,
    color: theme.colors.gray,
    fontSize: fz(2.2),
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
    marginTop: hp(10),
    alignItems: "center",
  }
});
