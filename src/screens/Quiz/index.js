import React, {useState, useEffect} from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';
import api from '../../services/api';

import Options from '../../components/Options';
import Question from '../../components/Question';

import styles from './styles';

const Quiz = ({ route }) => {

  const { numberOfQuestions } = route.params
  console.log(numberOfQuestions)


  // may be useful later
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');

  const [correctAnswer, setCorrectAnswer] = useState('');
  const [incorrectAnswer1, setIncorrectAnswer1] = useState('');
  const [incorrectAnswer2, setIncorrectAnswer2] = useState('');
  const [incorrectAnswer3, setIncorrectAnswer3] = useState('');
  
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    
    async function loadApi() {

      const data = await api.get('',{ params: { amount: numberOfQuestions}})
        .then(response => {
          const category = response.data.results[currentQuestion].category
          const question = response.data.results[currentQuestion].question

          const correctAnswer = response.data.results[currentQuestion].correct_answer

          const incorrectAnswer1 = response.data.results[currentQuestion].incorrect_answers[0]
          const incorrectAnswer2 = response.data.results[currentQuestion].incorrect_answers[1]
          const incorrectAnswer3 = response.data.results[currentQuestion].incorrect_answers[2]

          setCategory(category)
          setQuestion(question)
          setCorrectAnswer(correctAnswer)
          setIncorrectAnswer1(incorrectAnswer1)
          setIncorrectAnswer2(incorrectAnswer2)
          setIncorrectAnswer3(incorrectAnswer3)
          
      });
  
    }
      
    loadApi();

  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#660022"}/>
      <Text style={styles.text}>Category - {category}</Text>
      
      <Question question={question}/>
      <Options/>
      
    </SafeAreaView>
  );
}

export default Quiz;