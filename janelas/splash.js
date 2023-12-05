import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,Image } from 'react-native';

import  styles from '../css/estilo';

const SplashScreen = ({ navigation }) => {
  return (

    <View style={styles.background}>

        <View>
         <Image style={styles.image} source={require('../assets/rock.png')} /> 
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.botao}>
            <Text style={styles.textoBotao}> Login </Text>
          </TouchableOpacity>

        </View>

    </View>
  );
};
export default SplashScreen;