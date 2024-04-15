import {View, Text, StyleSheet, Image} from 'react-native';
import { Button, TextInput } from 'react-native-paper';



const Home = () => {
    return (
        <View style={styles.body}>
          <TextInput style={styles.textInput} placeholder='Insira o termo da busca...'></TextInput>
        </View>
    )
}

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

  export default Home;