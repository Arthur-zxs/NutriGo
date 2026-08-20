import { NavigationContainer } from "@react-navigation/native"; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRoutes } from "./routes/appRoutes";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
