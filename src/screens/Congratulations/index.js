import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

const Congratulations = ({navigation, route}) => {

  const { score } = route.params;

  function handleNavigateHome () {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor={"#660022"}/>
      <Text style={styles.textScore}>There you have it, your score: {score}</Text> 
      <Text style={styles.textTryAgain}>Try again!</Text>
      <Button title="Home" onPress={handleNavigateHome}/>
    </View>
  );
}

export default Congratulations;