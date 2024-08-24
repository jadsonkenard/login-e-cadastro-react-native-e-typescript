import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackTypes = {
    Home: undefined,
    SignIn: undefined,
    SignUp: undefined
}

export type StackTypeProps = NativeStackScreenProps<StackTypes>
