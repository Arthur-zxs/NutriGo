import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 28,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  header: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 1200,
    height: 120,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  imagemPrato: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 24,
  },
  textoDescricao: {
    fontSize: 13,
    color: "#2C402E",
    textAlign: "center",
    lineHeight: 19,
    fontWeight: "600",
    paddingHorizontal: 10,
  },
  progressBarTrack: {
    width: "55%",
    height: 6,
    backgroundColor: "#E2E2E2",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 16,
  },
  progressBarFill: {
    width: "50%",
    height: "100%",
    backgroundColor: "#22C55E",
    borderRadius: 3,
  },
  textoCarregando: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C402E",
    marginBottom: 6,
  },
  textoStatus: {
    fontSize: 12,
    color: "#718096",
    textAlign: "center",
  },
});