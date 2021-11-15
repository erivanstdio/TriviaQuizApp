import React, {useState, useEffect} from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';
import api from '../../services/api';

import Option from '../../components/Option';
import Question from '../../components/Question';

import styles from './styles';

const Quiz = ({ navigation, route }) => {

  // obtendo parâmetro(s) da rota anterior 
  const { numberOfQuestions } = route.params
  
  // may be useful later
  const [loading, setLoading] = useState(false);

  // consts utilizadas:
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsThrough, setQuestionsThrough] = useState(0);
  const [score,setScore] = useState(0); 

  
  // função para randomizar a ordem do array de perguntas:
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // enquanto houver elementos para embaralhar...
    while (currentIndex != 0) {
  
      // Pega um elemento remanescente
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // e troca com o elemento atual.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    // devolve um array embaralhado:
    return array;
  }

  // ao renderizar a tela (e sempre que renderizar a const 'questionsThrough'):
  useEffect(() => {
    // função assíncrona utilizando axios para buscar dados da API Trivia DataBase
    async function loadApi() {
      const data = await api.get('', { params: { amount: 1 } })
        .then(response => {
          const category = response.data.results[currentQuestion].category
          const question = response.data.results[currentQuestion].question
          const correctAnswer = response.data.results[currentQuestion].correct_answer
          const incorrectAnswer = response.data.results[currentQuestion].incorrect_answers

          // juntando um array com todas as 3 respostas erradas e uma certa
          incorrectAnswer.push(correctAnswer)
          
          // função pra randomizar a ordem dos elementos
          shuffle(incorrectAnswer)
          setCategory(category)
          setQuestion(question)
          setAnswer(incorrectAnswer)
          setCorrectAnswer(correctAnswer)
      });
       
    }
      
    // chama a função assíncrona
    loadApi();

  }, [questionsThrough])



  // após selecionar uma opção:
  function handleSelectedOption(answer){
    
    // verificando se ainda há perguntas:
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

    // caso esteja correta:
    else if(answer == String(correctAnswer)) {
      setScore(score+1)
      setQuestionsThrough(questionsThrough+1)
    }

    // caso esteja errada:
    else if(answer !== String(correctAnswer)) {
      setQuestionsThrough(questionsThrough+1)
    }  

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