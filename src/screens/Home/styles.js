import { StyleSheet } from "react-native";
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
  },
  welcome: {
    fontFamily: 'AmaticSC-Bold',
    color: COLORS.text2,
    fontSize: 60,
  },
  buttonStart: {
    marginTop: 60,
  },
  textStart: {
    fontFamily: 'AmaticSC-Bold',
    color: COLORS.text,
    fontSize: 40,
  }
})

export default styles;