import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';



const Option = ({onPress, data}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.option}>
      <Text style={styles.optionText}>{data}</Text>
    </TouchableOpacity>
  );
}

export default Option;