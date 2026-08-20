import { useEffect, useRef } from "react";
import { View, Text, Image, StatusBar, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./loading.style";

export function Loading({ navigation }) {
  // 1. Cria a referência da animação
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 2. Inicia o preenchimento da barra até 100 em 3 segundos
    Animated.timing(progressAnim, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    // 3. Redireciona para a tela de Login após 3 segundos
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, progressAnim]);

  // 4. Converte os números 0-100 em porcentagem ("0%" a "100%")
  const widthInterpolated = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* Header com a Logo */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/logoNutri.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Conteúdo Central */}
      <View style={styles.content}>
        <Image
          source={require("../../assets/pratoNutri.png")}
          style={styles.imagemPrato}
          resizeMode="contain"
        />

        <Text style={styles.textoDescricao}>
          Descubra o poder da nutrição de alta precisão. O NutriGo combina
          inteligência artificial avançada com os seus gostos e objetivos para
          estruturar o cardápio perfeito. Comer bem nunca foi tão prático.
        </Text>
      </View>

      {/* Footer com Barra de Progresso Funcional */}
      <View style={styles.progressBarTrack}>
        <Animated.View
          style={[
            styles.progressBarFill,
            { width: widthInterpolated }, // Animação de largura aplicada
          ]}
        />
      </View>

      <Text style={styles.textoCarregando}>Carregando...</Text>
      <Text style={styles.textoStatus}>
        Sincronizando os seus dados de forma segura
      </Text>
    </SafeAreaView>
  );
}