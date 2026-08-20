import { useEffect } from "react";
import { StatusBar, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./welcome.style";

export function Welcome({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Loading");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require("../../assets/nutri_fundo.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      </SafeAreaView>
    </ImageBackground>
  );
}