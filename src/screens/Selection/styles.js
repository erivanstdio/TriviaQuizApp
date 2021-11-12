import { StyleSheet } from "react-native";
import { COLORS } from "../../global/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selection: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectionText: {
    fontFamily: 'AmaticSC-Bold',
    color: COLORS.text2,
    fontSize: 40,
    paddingHorizontal: 50,
  },
  counterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrow: {
    fontFamily: 'AmaticSC-Bold',
    color: COLORS.text2,
    fontSize: 40,
    marginHorizontal: 20
  },
  counter: {
    fontFamily: 'AmaticSC-Bold',
    color: COLORS.text2,
    fontSize: 40,
  },
  buttons: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

})

export default styles;