import { StyleSheet } from "react-native";
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  button: {
    paddingTop: 3,
    paddingBottom: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.fundo,
    borderRadius: 20,
  },
  buttonDisabled: {
    paddingTop: 3,
    paddingBottom: 10,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(55,00,33, 0.7)',
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: 'AmaticSC-Bold',
    color: COLORS.text,
    fontSize: 40,
  }
})

export default styles;