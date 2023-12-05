import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../css/estilo';

const Pergunta2 = ({ navigation, route }) => {
  const [pontuacao, setPontuacao] = useState(route.params?.pontuacao || 0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 2') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Pergunta3', { pontuacao });
  };

  return (
    <View style={styles.background}>
      <Text style={styles.titulo}>Pergunta 2-A qual banda pertencia Freddie Mercury?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 1')}>
        <Text style={styles.titulo}>AC/DC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta correta 2')}>
        <Text style={styles.titulo}>Queen</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 3')}>
        <Text style={styles.titulo}>Guns N'Roses</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 4')}>
        <Text style={styles.titulo}>Led Zeppelin</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Pergunta2;