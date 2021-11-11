import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Selection from '../screens/Selection';
import Quiz from '../screens/Quiz';


// caso não tivesse sido desestruturado, a forma de escrita seria por exemplo: <Nome_da_variavel.Navigator>.
// portanto, bem mais prática a desestruturação >>>

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes = () => {
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="Selection"
        component={Selection}
      />
      <Screen 
        name="Quiz"
        component={Quiz}
      />
    </Navigator>
  );
}

export default AuthRoutes;