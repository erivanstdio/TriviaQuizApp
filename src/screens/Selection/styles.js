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
    color: COLORS.text,
    fontSize: 40,
    paddingHorizontal: 80,
  },
  counterBox: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrow: {
    backgroundColor: COLORS.box,
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 6,
    marginHorizontal: 20,
  },
  arrowText: {
    fontFamily: 'MochiyPopPOne-Regular',
    color: COLORS.text,
    fontSize: 30,
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