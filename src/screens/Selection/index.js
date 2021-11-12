import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

const Selection = ({navigation}) => {


  const [questions, setQuestions] = useState(0)

  const [disabled, setDisabled] = useState(false);


  useEffect(() => {
    questions == 0 ? setDisabled(true) : setDisabled(false);
  }, [questions])

  function handleNavigateHome() {
    navigation.navigate('Home')
  }

  function handleNavigateQuiz() {
    navigation.navigate('Quiz')
  }

  function increase() {
    setQuestions(questions+1)
  }
  function decrease() {
    questions > 0 ?
    setQuestions(questions-1)
    : questions
  }

  return(
    <View style={styles.container}>
      
      <View style={styles.selection}>
  
        <Text style={styles.selectionText}>Selecione a quantidade de perguntas: </Text>
        
        <View style={styles.counterBox}>
        <TouchableOpacity onPress={decrease}><Text style={styles.arrow}>{'<'}</Text></TouchableOpacity>
        <Text style={styles.counter}>{questions}</Text>
        <TouchableOpacity onPress={increase}><Text style={styles.arrow}>{`>`}</Text></TouchableOpacity>
        </View>
      
      </View>

      <View style={styles.buttons}>
      <Button buttonStyle={{paddingHorizontal: 45, marginHorizontal: 10}} title="Voltar" onPress={handleNavigateHome}/>
      <Button disabled={disabled} buttonStyle={{marginHorizontal: 10}} title="Quiz me!" onPress={handleNavigateQuiz} />
      </View>
    </View>
  );
}

export default Selection;