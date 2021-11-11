import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    marginTop: 100,
    paddingHorizontal: 25,
    justifyContent: 'space-around',
  },
  question: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#550033',
    borderRadius: 20,
    borderColor: '#990077',
    borderWidth: 1,
  },
  questionText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  }
});

export default styles;