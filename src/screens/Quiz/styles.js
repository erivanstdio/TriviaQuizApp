import { StyleSheet } from "react-native"; 
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
  flatList: {
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
  }
})

export default styles;