import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";
import { Input } from "../../components";

export function SignUp({navigation}: StackTypeProps){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Criar uma</Text>
            <Text style={styles.subTitle}>conta</Text>
            <Input placeholder="Nome de usuario ou Email" icon="person"/>
            <Input placeholder="Senha" icon="person" eyePass="eye-off"/>
            <Input placeholder="Confirmar senha" icon="person" eyePass="eye-off"/>
        </View>
    )
}