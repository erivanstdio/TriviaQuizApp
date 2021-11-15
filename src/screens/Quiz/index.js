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
  
  // função para randomizar a ordem do array de perguntas:
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

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
          
          shuffle(incorrectAnswer)

          setCategory(category)
          setQuestion(question)
          setAnswer(incorrectAnswer)
          setCorrectAnswer(correctAnswer)
      });
       
    }
      
    loadApi();

  }, [questionsThrough])


  function handleSelectedOption(answer){
    
    
    if (questionsThrough == numberOfQuestions - 1) {  


      if (answer == String(correctAnswer)) {
      setScore(score+1);
      navigation.navigate('Congratulations',{score: score+1});
      }
      else {
      navigation.navigate('Congratulations',{score: score});
      }
      return;
    }

    else if(answer == String(correctAnswer)) {
      setScore(score+1)
      setQuestionsThrough(questionsThrough+1)
    }
    else if(answer !== String(correctAnswer)) {
      setQuestionsThrough(questionsThrough+1)
    } else
  
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