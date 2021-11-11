import { StyleSheet } from "react-native";
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.box,
    marginVertical: 40,
    padding: 20,
    borderRadius: 20,
  },
  index: {
    color: COLORS.text,
    fontFamily: 'MochiyPopPOne-Regular',
    
  },
  question: {
    fontFamily: 'MochiyPopPOne-Regular',
    color: COLORS.text,
    fontSize: 18,
  }
});

export default styles;