import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import ForgotPassword from "../screens/ForgotPassword";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
}