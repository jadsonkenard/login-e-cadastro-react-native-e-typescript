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
import { Home } from "./src/screens";

export default function App() {
  const [isLoadFonts] = useFonts({
    Lexend_500Medium,
    Lexend_700Bold,
    Lexend_400Regular,
    Lexend_900Black,
  });
  if (!isLoadFonts) {
    return <Loading />;
  }
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  );
}
