import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const ModificarPesquisa = () => {

  return (

    <View style={styles.body}>

      <Text style={styles.text}>Nome:</Text>

      <TextInput style={styles.textInput} placeholder='Carnaval 2024'></TextInput>

      <Text style={styles.text}>Data:</Text>

      <TextInput style={styles.textInputData} placeholder='16/02/2024'></TextInput>

      <Text style={styles.text}>Imagem:</Text>

      <TextInput style={styles.textInputImagem}><Image source={require('../images/imagem.png')} style={{width: 50, height: 50, marginTop: 20, marginBottom:20}}/></TextInput>

      <Button style={styles.buttonSalvar}><Text style={styles.buttonSalvarText}>Salvar</Text></Button>

      <Image source={require('../images/trash.png')} style={{width: 16, height: 16, marginTop: 20}}/>

      <Text style={styles.textImage}>Apagar</Text>

    </View>

  );

};


const styles = StyleSheet.create({

  body: {
    backgroundColor: '#382474',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  text: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    width: 300,
    fontWeight: 'bold',
  },

  textInput: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
  },

  textInputData: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
    fontFamily: 'monospace',
  },

  textInputImagem: {
    backgroundColor: '#fff',
    width: 300,
    height: 100,
    fontFamily: 'monospace',
    fontSize: 70,
    borderRadius: 0,
    textAlign: 'center',
  },

  buttonSalvar: {
    marginTop: 35,
    width: 300,
    backgroundColor: 'green',
    borderRadius: 0,
  },

  buttonSalvarText: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textImage: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default ModificarPesquisa;
