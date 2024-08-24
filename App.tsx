import { StyleSheet, Text, View } from "react-native";
import { Loading } from "./src/components";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Lexend_500Medium,
  Lexend_700Bold,
  Lexend_400Regular,
  Lexend_900Black,
} from "@expo-google-fonts/lexend";
import { theme } from "./src/theme";

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
    <ThemeProvider theme={theme}>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
