import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../css/estilo';

const Pergunta3 = ({ navigation, route }) => {
  const [pontuacao, setPontuacao] = useState(route.params?.pontuacao || 0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 4') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Pergunta4', { pontuacao });
  };

  return (
    <View style={styles.background}>
      <Text style={styles.titulo}>Pergunta 3-Qual banda tem a icônica capa de álbum onde seus membros estão atravessando uma faixa de pedestre?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 1')}>
        <Text style={styles.titulo}>Metallica</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 2')}>
        <Text style={styles.titulo}>AC/DC</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 3')}>
        <Text style={styles.titulo}>Nirvana</Text>
        </TouchableOpacity>
              <TouchableOpacity onPress={() => verificarResposta('Resposta correta 4')}>
        <Text style={styles.titulo}>The Beatles</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pergunta3;