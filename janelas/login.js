import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../css/estilo';

const Login = ({ navigation }) => {
  const [usuario, setUser] = useState('');
  const [senha, setPassword] = useState('');

  const gravar = () => {
    if (usuario === 'ancelmopica' && senha === 'MB') {
      alert('Login correto');
      navigation.navigate('Home'); // Redirecionar para a tela Home
    } else {
      alert('Verifique usuário e senha!');
    }
  };

  return (
    <SafeAreaView style={styles.login}>
    <View>
      <Text style={styles.paragraph}>Login</Text>

      <Text style={styles.titulo}>Digite seu usuário:</Text>
      <TextInput style={styles.titulo}
        value={usuario}
        onChangeText={setUser}
        placeholder="Usuário"
        keyboardType="numeric"
      />

      <Text style={styles.titulo}>Digite sua senha:</Text>
      <TextInput style={styles.titulo}
        value={senha}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={gravar} style={styles.enviar}>
        <Text style={styles.enviar}>Acessar</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Login;