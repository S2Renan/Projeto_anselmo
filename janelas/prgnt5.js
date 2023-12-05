import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../css/estilo';

const Pergunta5 = ({ navigation, route }) => {
  const [pontuacao, setPontuacao] = useState(route.params?.pontuacao || 0);

  const verificarResposta = (resposta) => {
    if (resposta === 'Resposta correta 4') {
      setPontuacao(pontuacao + 1);
    }
    // Navegar para a página de resultados ou qualquer outra página de sua escolha
    navigation.navigate('Fim', { pontuacao });
  };

  return (
    <View style={styles.background}>
      <Text style={styles.titulo}>Pergunta 5-Qual o Nome do Guitarrista do Guns N'Roses?</Text>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 1')}>
        <Text style={styles.titulo}>David Bowie</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 2')}>
        <Text style={styles.titulo}>Amy lee</Text>
            <TouchableOpacity onPress={() => verificarResposta('Resposta incorreta 3')}>
          </TouchableOpacity>   
        <Text style={styles.titulo}>David Gilmour</Text>
      </TouchableOpacity>
            <TouchableOpacity onPress={() => verificarResposta('Resposta correta 4')}>
        <Text style={styles.titulo}>Slash</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Pergunta5;