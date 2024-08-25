import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";
import { ButtonText, Input, Button } from "../../components";

export function SignIn({ navigation }: StackTypeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subTitle}>de volta</Text>
      <Input icon="person" placeholder="Usuário ou Email" />
      <Input icon="lock-closed" placeholder="Senha" />
      <TouchableOpacity>
        <Text style={styles.message}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <Button onPress={() => {}}/>
      <View style={styles.register}>
      <ButtonText title="Resgistrar-se" onPress={() => navigation.navigate("SignUp")}/>
      </View>
    </View>
  );
}
