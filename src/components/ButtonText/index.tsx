import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type ButtonProps = TouchableOpacityProps & {
    title: string
}

export function ButtonText({title, ...props}: ButtonProps){
    return(
        <TouchableOpacity {...props}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}