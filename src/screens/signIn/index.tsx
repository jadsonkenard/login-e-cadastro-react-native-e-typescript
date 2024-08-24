import { View, Text } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";

export function SignIn({navigation}: StackTypeProps){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.title}>de volta</Text>
        </View>
    )
}