import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';



const Option = ({onPress, data}) => {

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
    <TouchableOpacity onPress={onPress} style={styles.option}>
      <Text style={styles.optionText}>{data}</Text>
    </TouchableOpacity>
  );
}

export default Option;