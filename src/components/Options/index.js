import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Options = () => {



  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.question}>
          <Text style={styles.questionText}>Opção 1: lorem ipsum blablabla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question}>
          <Text style={styles.questionText}>Opção 2: lorem ipsum blablabla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question}>
          <Text style={styles.questionText}>Opção 3: lorem ipsum blablabla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.question}>
          <Text style={styles.questionText}>Opção 4: lorem ipsum blablabla</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Options;