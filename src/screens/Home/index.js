import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Img from '../../assets/question.png'
import SvgComponent from '../../assets/SvgComponent';
import Button from '../../components/Button';

import styles from './styles';

const Home = () => {
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor={"#550022"}/>
      <View style={styles.image}>
        <SvgComponent/>
      </View>
      <Text style={styles.welcome}>TRIVIA QUIZ</Text>
      
      <Button buttonStyle={styles.buttonStart} title="Começar"/>
      
    </View>
  );
}

export default Home;