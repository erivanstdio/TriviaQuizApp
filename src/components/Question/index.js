import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Question = ({question}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.index}>1/2</Text>
      <Text style={styles.question}>{question}</Text>
    </View>
  );
}

export default Question;