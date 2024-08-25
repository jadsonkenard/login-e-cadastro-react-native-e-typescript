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
    marginTop: Platform.OS == "android" ? 50 : 0,
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
  message: {
    color: theme.colors.danger,
    fontFamily: theme.fonts.light,
    fontSize: fz(2.2),
    marginTop: hp(1),
  },
  register: {
    alignSelf: "flex-start",
    marginLeft: wp(7.5),
  },
});
