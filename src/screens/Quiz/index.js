import React from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import Options from '../../components/Options';
import Question from '../../components/Question';

import styles from './styles';

const Quiz = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#330022"}/>
      <Text style={styles.text}>Texto texte</Text>
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