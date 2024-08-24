import { StyleSheet, Text, View } from "react-native";
import { Loading } from "./src/components";
import {
  useFonts,
  Lexend_500Medium,
  Lexend_700Bold,
  Lexend_400Regular,
  Lexend_900Black,
} from "@expo-google-fonts/lexend";

export default function App() {
  const [isLoadFonts] = useFonts({
    Lexend_500Medium,
    Lexend_700Bold,
    Lexend_400Regular,
    Lexend_900Black,
  })
  if(!isLoadFonts){
    return <Loading/>
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
