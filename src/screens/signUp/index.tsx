import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";
import { ButtonText, Input, Button, Social } from "../../components";
import { google, apple, facebook } from "../../assets";
import { useState } from "react";

export function SignUp({ navigation }: StackTypeProps) {
  const [hidePass, setHidePass] = useState(true);
  const [hidePassConfirm, setHidePassConfirm] = useState(true);

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
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Senha"
            icon="lock-closed"
            eyePass={hidePass ? "eye-off" : "eye"}
            secureTextEntry={hidePass}
            hidePass={() => setHidePass(!hidePass)}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Confirmar senha"
            icon="lock-closed"
            eyePass={hidePassConfirm ? "eye-off" : "eye"}
            secureTextEntry={hidePassConfirm}
            hidePass={() => setHidePassConfirm(!hidePassConfirm)}
            autoCapitalize="none"
            autoCorrect={false}
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
