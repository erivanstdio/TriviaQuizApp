import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor2
  },
  numberOfQuestions: {
    color: COLORS.text,
    fontFamily: 'AmaticSC-Bold',
    fontSize: 40,
  },
  textContinue: {
    color: COLORS.text2,
    fontFamily: 'AmaticSC-Bold',
    fontSize: 40,
  },
  buttons: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default styles;