import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";

export function Home({navigation}: StackTypeProps){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Button title="Login" onPress={() => navigation.navigate("SignIn")}/>
        </View>
    )
}