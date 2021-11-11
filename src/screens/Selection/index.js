import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

const Selection = () => {
  return(
    <View style={styles.container}>
      <Text>Selecione a quantidade de perguntas: </Text>
      <Button title="Começar" />
    </View>
  );
}

export default Selection;