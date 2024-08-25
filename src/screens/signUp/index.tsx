import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";
import { ButtonText, Input, Button, Social } from "../../components";
import { google, apple, facebook } from "../../assets";

export function SignUp({ navigation }: StackTypeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar uma</Text>
      <Text style={styles.subTitle}>conta</Text>
      <ScrollView>
        <Input placeholder="Nome de usuario ou Email" icon="person" />
        <Input placeholder="Senha" icon="lock-closed" eyePass="eye-off" />
        <Input
          placeholder="Confirmar senha"
          icon="lock-closed"
          eyePass="eye-off"
        />
        <Text style={styles.textTerms}>
          Ao se {<Text style={styles.message}>Cadastrar</Text>} você concorda
          com os termos de uso.
        </Text>
        <View style={styles.button}>
          <Button />
        </View>
        <View style={styles.socialView}>
          <Text style={styles.signWithText}>Registrar-se com</Text>
          <View style={styles.signWith}>
            <Social source={google} />
            <Social source={apple} />
            <Social source={facebook} />
          </View>
        </View>
        <View style={styles.back}>
          <ButtonText
            title="Voltar"
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
