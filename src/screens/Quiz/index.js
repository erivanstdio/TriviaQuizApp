import React, {useState} from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import api from '../../services/api';

import Options from '../../components/Options';
import Question from '../../components/Question';

import styles from './styles';

const Quiz = ({ route }) => {

  const { numberOfQuestions } = route.params
  console.log(numberOfQuestions)


  // may be useful later
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  async function loadApi() {

    const data = await api.get('',{ params: { amount: numberOfQuestions}})
      .then(response => {
      
      console.log(response.data.results[0].category)
      
    });

  }

  loadApi();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#660022"}/>
      <Text style={styles.text}>Gênero: seila ne porra</Text>
      <Question/>
      <Options/>

      {/* Question */}
      {/* Options */}
      {/* Next Button */}
      
      {/* Background Image */}
    </SafeAreaView>
  );
}

export default Quiz;