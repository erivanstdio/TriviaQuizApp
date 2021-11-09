import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Options = () => {



  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.question}>
          <Text style={styles.questionText}>Opção 1: lorem ipsum inventei agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question}>
          <Text style={styles.questionText}>Opção 1: lorem ipsum inventei agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question}>
          <Text style={styles.questionText}>Opção 1: lorem ipsum inventei agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question}>
          <Text style={styles.questionText}>Opção 1: lorem ipsum inventei agora</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Options;