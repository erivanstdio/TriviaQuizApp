import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Question = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.index}>1/2</Text>
      <Text style={styles.question}>Pergunta lorem ipsum inventei agora: Quantos anos tinha napoleão quando sentou na pica?</Text>
    </View>
  );
}

export default Question;