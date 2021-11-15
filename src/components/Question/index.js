import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Question = ({totalQuestions, currentIndex, question}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.index}>{currentIndex+1}/{totalQuestions}</Text>
      <Text style={styles.question}>{question}</Text>
    </View>
  );
}

export default Question;