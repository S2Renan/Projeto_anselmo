import React from 'react';
import { View, Text } from 'react-native';
import styles from '../css/estilo';

const TelaFinal = ({ route }) => {
  const pontuacao = route.params?.pontuacao || 0;

  return (
    <View style={styles.background}>
      <Text style={styles.titulo}>Pontuação final: {pontuacao}</Text>
    </View>
  );
};

export default TelaFinal;