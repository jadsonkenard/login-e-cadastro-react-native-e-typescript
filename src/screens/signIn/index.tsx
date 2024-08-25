import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";

export function SignIn({navigation}: StackTypeProps){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subTitle}>de volta</Text>
            <Button title="Login" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}