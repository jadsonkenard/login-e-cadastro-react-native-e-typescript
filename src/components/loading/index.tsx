import { ActivityIndicator } from "react-native";
import { theme } from "../../theme";
import { styles } from "./styles";

export function Loading() {
  return (
    <ActivityIndicator
      size={45}
      color={theme.colors.primary}
      style={styles.container}
    />
  );
}
