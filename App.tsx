import { Loading } from "./src/components";
import {
  useFonts,
  Lexend_500Medium,
  Lexend_700Bold,
  Lexend_400Regular,
  Lexend_900Black,
  Lexend_300Light
} from "@expo-google-fonts/lexend";
import { SafeAreaView, StatusBar } from "react-native";
import { theme } from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/routes";

export default function App() {
  const [isLoadFonts] = useFonts({
    Lexend_500Medium,
    Lexend_700Bold,
    Lexend_400Regular,
    Lexend_900Black,
    Lexend_300Light
  });
  if (!isLoadFonts) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.brack100 }}>
      <StatusBar translucent backgroundColor={theme.colors.brack100}/>
        <Routes/>
    </SafeAreaView>
    </NavigationContainer>
  );
}
