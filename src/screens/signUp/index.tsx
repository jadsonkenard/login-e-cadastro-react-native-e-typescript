import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";
import { ButtonText, Input, Button, Social } from "../../components";
import { google, apple, facebook } from "../../assets";

export function SignUp({ navigation }: StackTypeProps) {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior="padding"
    >
      <ScrollView style={styles.scrollView} bounces={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Criar uma</Text>
          <Text style={styles.subTitle}>conta</Text>
          <Input
            placeholder="Nome de usuario ou Email"
            icon="person"
            keyboardType="email-address"
          />
          <Input
            placeholder="Senha"
            icon="lock-closed"
            eyePass="eye-off"
            secureTextEntry
          />
          <Input
            placeholder="Confirmar senha"
            icon="lock-closed"
            eyePass="eye-off"
            secureTextEntry
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
