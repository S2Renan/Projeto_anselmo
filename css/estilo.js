import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  botao: {
    backgroundColor: '#ffffff',
    marginTop: '200px',
    marginLeft: '110px',
    borderRadius: '5px',
    padding: '10px',
    width: '150px',
    flex: 1 ,
  },
  textoBotao: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnres: {
    backgroundColor: 'red',
    borderRadius: '20px',
    height: '20px',
    width: '90px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
  },
    image:{
    width: 220,
    height: 200,
    marginTop:10,
    marginLeft:75,
    justifyContent: 'center',
    alignItems:'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0B0D0F',
  },
  login: {
    backgroundColor: '#0B0D0F',
    height: 1000,
  },
  titulo: {
    color: 'white',
  },
  enviar: {
    color: 'white',
  },
});

export default styles;

