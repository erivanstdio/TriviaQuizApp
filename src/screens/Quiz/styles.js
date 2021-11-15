import { StyleSheet } from "react-native"; 
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
  scoreText: {
    color: COLORS.text2,
    fontFamily: 'AmaticSC-Bold',
    fontSize: 40,
  },
  categoryText: {
    color: COLORS.text,
    fontFamily: 'AmaticSC-Bold',
    fontSize: 30,
    paddingHorizontal: 20,
  }
})

export default styles;