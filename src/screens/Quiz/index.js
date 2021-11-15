import React, {useState, useEffect} from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';
import api from '../../services/api';

import Option from '../../components/Option';
import Question from '../../components/Question';

import styles from './styles';

const Quiz = ({ navigation, route }) => {

  const { numberOfQuestions } = route.params
  
  // may be useful later
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');

  
  const [answer, setAnswer] = useState([]);

  const [correctAnswer, setCorrectAnswer] = useState([]);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsThrough, setQuestionsThrough] = useState(0);

  const [score,setScore] = useState(0);


  useEffect(() => {
    
    async function loadApi() {
      console.log('eita entrou no loadApi')
      const data = await api.get('',{ params: { amount: 1}})
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

  }, [questionsThrough])


  function handleSelectedOption(answer){
    
  console.log('$$$$$$$$$$$$$$$$ START $$$$$$$$$$$$$$$$')
    console.log(`TOTAL DE PERGUNTAS: ${numberOfQuestions}`)
    console.log(`TOTAL PERCORRIDO: ${questionsThrough}`)
    
    if (questionsThrough == numberOfQuestions - 1) {  


      if (answer == String(correctAnswer)) {
      setScore(score+1);
      navigation.navigate('Congratulations',{score: score+1});
      }
      else {
      navigation.navigate('Congratulations',{score: score});
      }
      console.log(`passou por todas as ${numberOfQuestions} perguntas`)
      return;
    }

    else if(answer == String(correctAnswer)) {
      console.log('correto')
      setScore(score+1)
      setQuestionsThrough(questionsThrough+1)
    }
    else if(answer !== String(correctAnswer)) {
      (console.log('incorreto') &&
      setQuestionsThrough(questionsThrough+1))
    } else
    console.log('cabou os ifelse') 
    console.log(`passou por ${questionsThrough} perguntas`);
  
    setQuestionsThrough(questionsThrough+1)
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#660022"}/>
      <Text style={styles.scoreText}>Score: {score}</Text>
      <Text style={styles.categoryText}>Category - {category}</Text>
      
      <Question currentIndex={questionsThrough} totalQuestions={numberOfQuestions} question={question}/>
      {answer.map( (item, index) => <Option key={index} onPress={() => handleSelectedOption(item)} data={item} />)}
      
    </SafeAreaView>
  );
}

export default Quiz;