import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';



const Options = (data) => {

  const allQuestions = data;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [rightAnswer, setRightAnswer] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);

  const [score, setScore] = useState(0);


  function validateAnswer (selectOption) {
    const correctOption = allQuestions[currentQuestionIndex]['correctOption'];

    setCurrentOptionSelected(selectOption);
    setRightAnswer(correctOption);
    setIsOptionsDisabled(true);
    if(selectOption==correctOption){
      setScore(score+1);
    }

  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>lorem ipsum blablabla</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>lorem ipsum blablablablablablablaallablalbalbla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Opção 3: lorem ipsum blablabla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>lorem ipsum blablabla bablablasblabslablasblasbasblasbaslbsalb</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Options;