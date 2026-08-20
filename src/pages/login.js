import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./login.style";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailError, setEmailerror] = useState ("")
  const validarEmail = (texto) =>{
    setEmail(texto);
  }

  const handleLogin = () => {
    
if (!email.includes("@")) {
      setEmailerror("Por favor, insira um e-mail válido com '@'.");
      return;
    }
    setEmailerror("");
    console.log("E-mail inserido corretamente");

  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo Topo */}
          <View style={styles.header}>
            <Image
              source={require("../../assets/logoNutri.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          
          <View style={styles.form}>
          
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail aqui..."
                placeholderTextColor="#A0AEC0"
                keyboardType="email-address"
                autoCapitalize="none"
                p
                value={email}
                onChangeText={setEmail}
              />
              {!!emailError && (
                <Text style={{ color: "#E53E3E", fontSize: 12, marginTop: 4 }}>
                  {emailError}
                </Text>
              )}
            </View>

          
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha aqui..."
                placeholderTextColor="#A0AEC0"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <View style={styles.novaSenha}>
              <Text style={styles.subTexto}>Esqueceu a senha?</Text>
              <TouchableOpacity
                style={styles.ativarBotao}
                onPress={() => navigation.navigate("RedefinirSenha")}
              >
                <Text style={styles.textoAtivarbotao}>Redefinir senha</Text>
              </TouchableOpacity>
            </View>
          </View>

          
          <View style={styles.footer}>
            <View style={styles.linhaCentral}>
              <Text style={styles.subTexto}>Ainda não tem uma conta?</Text>
              <TouchableOpacity
                style={styles.ativarBotao}
                onPress={() => navigation.navigate("Cadastro")}
              >
                <Text style={styles.textoAtivarbotao}>Criar Conta</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botaoPrincipal} onPress={handleLogin}>
              <Text style={styles.textoBotaoPrincipal}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}