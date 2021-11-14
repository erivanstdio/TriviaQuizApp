import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../global/styles/colors";
  
const WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 25,
    justifyContent: 'space-around',
  },
  option: {
    marginTop: 20,
    width: WIDTH - 60,
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