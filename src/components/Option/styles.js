import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../global/styles/colors";
  
const WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
  option: {
    marginTop: 20,
    width: WIDTH - 60,
    paddingVertical: 16,
    backgroundColor: COLORS.button,
    borderRadius: 20,
    borderColor: COLORS.buttonBorder,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  rightOption: {
    marginTop: 20,
    width: WIDTH - 60,
    paddingVertical: 16,
    backgroundColor: COLORS.backgroundColor2,
    borderRadius: 20,
    borderColor: COLORS.button,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  optionText: {
    fontFamily: 'Righteous-Regular',
    textAlign: 'center',
    color: COLORS.text,
    fontSize: 16,
  }
});

export default styles;