import { View, Text } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";

export function SignUp({navigation}: StackTypeProps){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Criar uma</Text>
            <Text style={styles.title}>conta</Text>
        </View>
    )
}