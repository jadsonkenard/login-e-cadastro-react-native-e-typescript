import { View, Image, ImageProps } from "react-native";
import { styles } from "./styles";

export function Social({ ...props }: ImageProps){
    return(
        <View style={styles.container}>
            <Image style={styles.socialImage} resizeMode="contain" {...props}/>
        </View>
    )
}