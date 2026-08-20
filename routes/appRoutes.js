import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../src/pages/welcome";
import { Login } from "../src/pages/login";
import { Loading } from "../src/pages/loading"; // Importe a nova tela

// Dentro do Stack.Navigator:


const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen 
      name="Loading"
       component={Loading} />

    </Stack.Navigator>
  );
}