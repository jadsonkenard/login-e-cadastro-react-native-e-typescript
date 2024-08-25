import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from "../../theme";


type InputProps = TextInputProps & {
    icon: keyof typeof Ionicons.glyphMap,
    eyePass?: keyof typeof Ionicons.glyphMap,
}

export function Input({icon, eyePass, ...props}: InputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color={theme.colors.gray} />
      <TextInput style={styles.input} placeholderTextColor={theme.colors.gray} {...props}/>
      <Ionicons name={eyePass} size={20} color={theme.colors.gray} />
    </View>
  );
}

