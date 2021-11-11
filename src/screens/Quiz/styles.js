import { StyleSheet } from "react-native"; 
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
  text: {
    color: COLORS.text,
    fontFamily: 'AmaticSC-Bold',
    fontSize: 30,
  }
})

export default styles;