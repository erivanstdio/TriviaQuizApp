import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

const Confirmation = ({navigation, route}) => {

  const { numberOfQuestions } = route.params


  function handleNavigateSelection() {
    navigation.navigate('Selection');  
  }

  function handleNavigateQuiz() {
    navigation.navigate('Quiz',{numberOfQuestions: numberOfQuestions});
  }

  return(
    <View style={styles.container}>
      <Text style={styles.numberOfQuestions}>Total questions: {numberOfQuestions}</Text>
      <Text style={styles.textContinue}>Continue?</Text>
      <View style={styles.buttons}>
      <Button buttonStyle={{paddingHorizontal: 55, marginHorizontal: 10}} title="Back" onPress={handleNavigateSelection}/>
      <Button buttonStyle={{marginHorizontal: 10}} title="Quiz me!" onPress={handleNavigateQuiz} />
      </View>
    </View>
  );
}

export default Confirmation;