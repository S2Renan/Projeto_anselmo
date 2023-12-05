import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import styles from './css/estilo';
import Rotas from './janelas/rotas';


export default function App() {
  return (
    <NavigationContainer>
      <Rotas/>
    </NavigationContainer>
  );
}

