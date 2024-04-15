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
      <Text style={styles.titulo}>Satisfying.you</Text>
      <Image source={require('../images/smile-icon.png')}></Image>
      <Text style={styles.text}>E-mail</Text>
      <TextInput style={styles.textInput} placeholder='jurandir.pereira@hotmail.com'  placeholderTextColor= '#3F92C5'></TextInput>

      <Text style={styles.text}>Senha</Text>
      <TextInput style={styles.textInput} placeholder='********'  placeholderTextColor='#3F92C5'></TextInput>
      <Text style={{color:'#FD7979',textAlign:'left'}}>E-mail e/ou senhas inválidos</Text>

      <Button /*onPress={goToHome}*/ style={styles.buttonEntrar}><Text style={styles.buttonText}>Entrar</Text></Button>

      <Button /*onPress={goToNovaConta}*/ style={styles.buttonCriar}><Text style={styles.buttonText}>Criar minha conta</Text></Button>

      <Button /*onPress={goToRecuperarSenha}*/ style={styles.buttonEsqueci}><Text style={styles.buttonText}>Esqueci minha senha</Text></Button>


    </View>

  )

}
const styles = StyleSheet.create({

  body: {
    backgroundColor:'#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo:{
    fontSize:30,
    color:'#FFFF',
    textAlign:'center',
    fontFamily:'Averia Libre'
  },
  text: {
    color: '#fff',
    fontFamily: 'Averia Libre',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    width: 300,
    fontWeight: 'bold',
  },

  textInput: {
    backgroundColor: '#fff',
    width: 300,
    height:51,
    borderRadius: 0,
    fontFamily:'Averia Libre'
  },

  buttonEntrar: {
    marginTop: 30,
    marginBottom:30,
    width: 300,
    backgroundColor: '#37BD6D',
    borderRadius: 0,
  },
  buttonCriar: {
    marginTop: 10,
    width: 300,
    backgroundColor: '#419ED7',
    borderRadius: 0,
  },
  buttonEsqueci: {
    marginTop: 15,
    width: 300,
    backgroundColor: '#B0CCDE',
    borderRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Averia Libre',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
 
});

export default Login;