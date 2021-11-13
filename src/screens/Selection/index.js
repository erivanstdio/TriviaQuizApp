import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

const Selection = ({navigation}) => {


  const [numberOfQuestions, setNumberOfQuestions] = useState(0)
  const [disabled, setDisabled] = useState(false);


  useEffect(() => {
    numberOfQuestions == 0 ? setDisabled(true) : setDisabled(false);
  }, [numberOfQuestions])


  function handleNavigateHome() {
    navigation.navigate('Home');  
  }

  function handleNavigateQuiz() {
    navigation.navigate('Quiz',{numberOfQuestions: numberOfQuestions});
  }

  function increase() {
    numberOfQuestions < 50 ?
    setNumberOfQuestions(numberOfQuestions+1)
    : numberOfQuestions
  }
  function decrease() {
    numberOfQuestions > 0 ?
    setNumberOfQuestions(numberOfQuestions-1)
    : numberOfQuestions
  }

  return(
    <View style={styles.container}>
      
      <View style={styles.selection}>
  
        <Text style={styles.selectionText}>Select the amount of questions: </Text>
        
        {/* Contador */}
        <View style={styles.counterBox}>
          <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.arrow} 
            onPress={decrease}
          >
            <Text style={styles.arrowText}>{'<'}</Text>
          </TouchableOpacity>
          
          <Text style={styles.counter}>{numberOfQuestions}</Text>
          
          <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.arrow} 
            onPress={increase}
          >
            <Text style={styles.arrowText}>{`>`}</Text>
          </TouchableOpacity>
        </View>
      
      </View>

      <View style={styles.buttons}>
      <Button buttonStyle={{paddingHorizontal: 55, marginHorizontal: 10}} title="Back" onPress={handleNavigateHome}/>
      <Button disabled={disabled} buttonStyle={{marginHorizontal: 10}} title="Quiz me!" onPress={handleNavigateQuiz} />
      </View>
    </View>
  );
}

export default Selection;