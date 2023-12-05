import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../css/estilo';

const Pergunta1 = ({ navigation }) => {
  const [pontuacao, setPontuacao] = useState(0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 3') {
      setPontuacao(pontuacao + 1);
    }
    navigation.navigate('Pergunta2', { pontuacao });
  };

  return (
    <View style={styles.background}>
      <Text style={styles.titulo}>Pergunta 1- Qual cantor é conhecido mundialmente como rei do rock?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 1')}>
        <Text style={styles.titulo}>MC Poze do Rodo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 2')}>
        <Text style={styles.titulo}>Michael Jackson</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => verificarResposta('Resposta correta 3')}>
        <Text style={styles.titulo}>Elvis Presley</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 4')}>
        <Text style={styles.titulo}>Snoop dog</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pergunta1;