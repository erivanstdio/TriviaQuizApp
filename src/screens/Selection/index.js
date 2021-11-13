import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import api from '../../services/api';

import styles from './styles';

const Selection = ({navigation}) => {


  const [numberOfQuestions, setNumberOfQuestions] = useState(0)

  
  const [questions, setQuestions] = useState([]);

  // may be useful later
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);


  useEffect(() => {
    numberOfQuestions == 0 ? setDisabled(true) : setDisabled(false);
  }, [numberOfQuestions])

  async function loadApi() {

    const data = await api.get('',{ params: { amount: numberOfQuestions}})
      .then(response => {
      console.log(response.data.results);
    });

    navigation.navigate('Quiz',{data: data});  

  }

  function handleNavigateHome() {
    navigation.navigate('Home');  
  }

  function handleNavigateQuiz() {
    loadApi();
  }

  function increase() {
    
    numberOfQuestions == 0 ? setDisabled(true) : setDisabled(false);
    numberOfQuestions < 50 ?
    setNumberOfQuestions(numberOfQuestions+1)
    : numberOfQuestions
  }
  function decrease() {
    
    numberOfQuestions == 0 ? setDisabled(true) : setDisabled(false);
    numberOfQuestions > 0 ?
    setNumberOfQuestions(numberOfQuestions-1)
    : numberOfQuestions
  }

  return(
    <View style={styles.container}>
      
      <View style={styles.selection}>
  
        <Text style={styles.selectionText}>Selecione a quantidade de perguntas: </Text>
        
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
      <Button buttonStyle={{paddingHorizontal: 48, marginHorizontal: 10}} title="Voltar" onPress={handleNavigateHome}/>
      <Button disabled={disabled} buttonStyle={{marginHorizontal: 10}} title="Quiz me!" onPress={handleNavigateQuiz} />
      </View>
    </View>
  );
}

export default Selection;