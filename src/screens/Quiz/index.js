import React, {useState, useEffect} from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';
import api from '../../services/api';

import Option from '../../components/Option';
import Question from '../../components/Question';

import styles from './styles';

const Quiz = ({ route }) => {

  const { numberOfQuestions } = route.params
  

  // may be useful later
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');

  
  const [answer, setAnswer] = useState([]);
  const [incorrectAnswer, setIncorrectAnswer] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    
    async function loadApi() {

      const data = await api.get('',{ params: { amount: numberOfQuestions}})
        .then(response => {
          const category = response.data.results[currentQuestion].category
          const question = response.data.results[currentQuestion].question

          const correctAnswer = response.data.results[currentQuestion].correct_answer

          const incorrectAnswer = response.data.results[currentQuestion].incorrect_answers
          incorrectAnswer.push(correctAnswer)

          setCategory(category)
          setQuestion(question)
          setAnswer(incorrectAnswer)
          setCorrectAnswer(correctAnswer)
          
      });
  
    }
      
    loadApi();

  }, [])

  function handleSelectedOption(answer){
    answer == correctAnswer ? console.log('correto') : console.log('incorreto')
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#660022"}/>
      <Text style={styles.text}>Category - {category}</Text>
      
      <Question question={question}/>
      {answer.map((item) => <Option onPress={() =>  handleSelectedOption(JSON.parse(item))} data={item} />)}
      
    </SafeAreaView>
  );
}

export default Quiz;