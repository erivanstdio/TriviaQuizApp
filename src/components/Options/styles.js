import { StyleSheet } from "react-native";
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 25,
    justifyContent: 'space-around',
  },
  option: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.button,
    borderRadius: 20,
    borderColor: COLORS.buttonBorder,
    borderWidth: 1,
  },
  optionText: {
    fontFamily: 'Righteous-Regular',
    textAlign: 'center',
    color: COLORS.text,
    fontSize: 16,
  }
});

export default styles;