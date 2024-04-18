import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Home = (props) => {

  goToNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  }

  return (
    <>

      <View style={styles.body}>
        <TextInput style={styles.textInput} placeholder='Insira o termo da busca...'></TextInput>
        <Pressable onPress={goToNovaPesquisa} style={styles.buttonNovaPesquisa}>
          <Text style={styles.buttonNovaPesquisaText}>Nova Pesquisa</Text>
        </Pressable>
      </View>

    </>
  )
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#382474',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    width: 300,
    fontFamily: 'AveriaLibre-Regular'
  },

  textInput: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular'
  },

  buttonNovaPesquisa: {
    width: 300,
    height: 50,
    backgroundColor: '#37BD6D',
    marginTop: 20
  },

  buttonNovaPesquisaText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 10,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25
  }

});

export default Home;