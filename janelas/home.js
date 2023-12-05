import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import  styles from '../css/estilo';

const Home = ({ navigation }) => {
  return (

    <View style={styles.background}>

        <View>
        
          <TouchableOpacity onPress={() => navigation.navigate('Pergunta1')} style={styles.botao}>
            <Text style={styles.textoBotao}> Iniciar </Text>
          </TouchableOpacity>

        </View>

    </View>
  );
};
export default Home;