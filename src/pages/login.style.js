import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 28,
    justifyContent: "space-between",
    paddingBottom: 24,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  logo: {
    width: 1200,
    height: 120,
    backgroundColor:"white",
  },
  form: {
    width: "100%",
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 10,
    paddingTop:30,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2C402E",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 13,
    color: "#2D3748",
    // Sombra suave igual à do protótipo
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  novaSenha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 4,
  },
  linhaCentral: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  subTexto: {
    fontSize: 12,
    color: "#4A5568",
    marginRight: 8,
  },
  ativarBotao: {

    paddingVertical: 2,
    paddingHorizontal:2,
    borderRadius: 20,
  },
  textoAtivarbotao: {

    fontSize: 11,
    fontWeight: "bold",
    color: "#0fb100",
  },
  footer: {
    alignItems: "center",
    marginTop: 10,
  },
  botaoPrincipal: {
    width: "75%",
    height: 48,
    backgroundColor: "#22C55E",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
 textoBotaoPrincipal: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
