import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { StackTypeProps } from "../../routes/types";
import { Input, Button, Social } from "../../components";
import { google, apple, facebook } from "../../assets";

export function SignIn({ navigation }: StackTypeProps) {
  return (
        <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.subTitle}>de volta</Text>
          <Input icon="person" placeholder="Usuário ou Email" keyboardType="email-address"/>
          <Input icon="lock-closed" placeholder="Senha" secureTextEntry/>
          <TouchableOpacity style={styles.touchableMessage}>
            <Text style={styles.message}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <Button onPress={() => navigation.navigate("Home")} />

          <View style={styles.socialView}>
            <Text style={styles.signWithText}>Login com</Text>
            <View style={styles.signWith}>
              <Social source={google} />
              <Social source={apple} />
              <Social source={facebook} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.registerText}>
              Clique <Text style={styles.messageRegister}>aqui</Text> para
              registrar-se
            </Text>
          </TouchableOpacity>
        </View>
  );
}
