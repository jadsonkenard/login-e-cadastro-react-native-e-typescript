import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SignIn, SignUp } from "../screens";
import { StackTypes } from "./types";

const Stack = createNativeStackNavigator<StackTypes>();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}