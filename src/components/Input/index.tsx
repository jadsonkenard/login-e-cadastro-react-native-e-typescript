import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from "../../theme";


type InputProps = TextInputProps & {
    icon: keyof typeof Ionicons.glyphMap,
    eyePass?: keyof typeof Ionicons.glyphMap,
    hidePass?: () => void;
}

export function Input({icon, eyePass, hidePass, ...props}: InputProps) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color={theme.colors.gray} />
      <TextInput style={styles.input} placeholderTextColor={theme.colors.gray} {...props}/>
      <TouchableOpacity onPress={hidePass}>
      <Ionicons name={eyePass} size={20} color={theme.colors.gray} />
      </TouchableOpacity>
    </View>
  );
}

