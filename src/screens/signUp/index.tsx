import { View, Text } from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";
import { ButtonText, Input, Button } from "../../components";


export function SignUp({ navigation }: StackTypeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar uma</Text>
      <Text style={styles.subTitle}>conta</Text>
      <Input placeholder="Nome de usuario ou Email" icon="person" />
      <Input placeholder="Senha" icon="lock-closed" eyePass="eye-off" />
      <Input placeholder="Confirmar senha" icon="lock-closed" eyePass="eye-off" />
      <Text style={styles.textTerms}>
        Ao clicar no {<Text style={styles.message}>Register</Text>} você concorda com os termos de uso.
      </Text>
      <ButtonText title="Registrar-se"/>
      <Button/>
    </View>
  );
}
