import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { responsiveFontSize as fz } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: fz(3),
    color: theme.colors.primary,
  },
});
