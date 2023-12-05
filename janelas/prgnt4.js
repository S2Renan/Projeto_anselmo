import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../css/estilo';

const Pergunta4 = ({ navigation, route }) => {
  const [pontuacao, setPontuacao] = useState(route.params?.pontuacao || 0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 2') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Pergunta5', { pontuacao });
  };

  return (
    <View style={styles.background}>
      <Text style={styles.titulo}>Pergunta 4-Qual música do Led Zeppelin começa com o riff de guitarra mais famoso do mundo?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 1')}>
        <Text style={styles.titulo}>Im gonna crawl</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta correta 2')}>
        <Text style={styles.titulo}>Stairway to Heaven</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 3')}>
        <Text style={styles.titulo}>The number of the Beast</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 4')}>
        <Text style={styles.titulo}>All my love</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pergunta4;