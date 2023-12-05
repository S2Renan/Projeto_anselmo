import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import SplashScreen from './splash';
import Login from './login';
import Home from './home';
import Pergunta1 from './prgnt1';
import Pergunta2 from './prgnt2';
import Pergunta3 from './prgnt3';
import Pergunta4 from './prgnt4';
import Pergunta5 from './prgnt5';
import TelaFinal from './fim';

export default function Routes() {
  return (

    <Stack.Navigator initialRouteName="Splash" headerMode="none">

      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Pergunta1" component={Pergunta1} />
        <Stack.Screen name="Pergunta2" component={Pergunta2} />
        <Stack.Screen name="Pergunta3" component={Pergunta3} />
        <Stack.Screen name="Pergunta4" component={Pergunta4} />
        <Stack.Screen name="Pergunta5" component={Pergunta5} />
        <Stack.Screen name="Fim" component={TelaFinal} />

    </Stack.Navigator>
  );
}