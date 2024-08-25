import { Image, ImageProps, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Social({ ...props }: ImageProps) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.socialImage} resizeMode="contain" {...props} />
      </View>
    </TouchableOpacity>
  );
}
