import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Button({...props}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Ionicons name="arrow-forward" size={32} color="#FFF" />
    </TouchableOpacity>
  );
}
