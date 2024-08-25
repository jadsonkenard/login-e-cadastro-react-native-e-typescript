import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";
import { ButtonText, Input, Button, Social } from "../../components";
import { google, apple, facebook } from "../../assets";

export function SignIn({ navigation }: StackTypeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subTitle}>de volta</Text>
      <Input icon="person" placeholder="Usuário ou Email" />
      <Input icon="lock-closed" placeholder="Senha" />
      <TouchableOpacity style={styles.touchableMessage}>
        <Text style={styles.message}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate("Home")} />

      <Text style={styles.signWithText}>Login com</Text>
      <View style={styles.signWith}>
        <Social source={google} />
        <Social source={apple} />
        <Social source={facebook} />
      </View>
      <View style={styles.register}>
      <ButtonText
          title="Registrar-se"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
}
