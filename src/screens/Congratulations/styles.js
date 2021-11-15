import { StyleSheet } from "react-native";
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor2
  },
  textScore: {
    color: COLORS.text2,
    fontFamily: 'AmaticSC-Bold',
    fontSize: 50,
    paddingHorizontal: 70,
    marginBottom: 60
  },
  textTryAgain: {
    color: COLORS.text2,
    fontFamily: 'AmaticSC-Bold',
    fontSize: 30,
    marginBottom: 20,
  },


})

export default styles;