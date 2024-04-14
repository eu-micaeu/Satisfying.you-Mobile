import { View, Text, StyleSheet, Image} from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const Login = (props) => {

  const goToAgradecimentos = () => {
    props.navigation.navigate('Agradecimentos')
  }
  const goToModificarPesquisa = () => {    
      props.navigation.navigate('ModificarPesquisa')
  }
  const goToHome = () => {    
    props.navigation.navigate('Home')
  }
  return (

    <View style={styles.body}>
      <Text style={styles.text}>E-mail</Text>
      <TextInput style={styles.textInput} placeholder='jurandir.pereira@hotmail.com'></TextInput>
      <Text style={styles.text}>Senha</Text>
      <TextInput style={styles.textInput} placeholder='********'></TextInput>

      <Button /*onPress={goToHome}*/ style={styles.buttonSalvar}><Text style={styles.buttonSalvarText}>Salvar</Text></Button>

      <Button onPress={goToAgradecimentos}>Ir para Agradecimentos</Button>

      <Button onPress={goToModificarPesquisa}>Ir para ModificarPesquisa</Button>

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
    placeholder: '#3F92C5'
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


});

export default Login;