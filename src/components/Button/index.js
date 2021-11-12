import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({disabled, title, onPress, buttonStyle}) => {
  return(
    <TouchableOpacity disabled={disabled} onPress={onPress} style={disabled===true ? [styles.buttonDisabled, buttonStyle] : [styles.button, buttonStyle]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;