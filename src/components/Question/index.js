import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Question = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Pergunta lorem ipsum inventei agora</Text>
    </View>
  );
}

export default Question;