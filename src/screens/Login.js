import { View, Text, StyleSheet, Image} from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const Login = (props) => {

  const goToRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha')
  }

  const goToNovaConta = () => {
    props.navigation.navigate('Nova Conta')
  }

  const goToDrawer = () => {    
    props.navigation.navigate('Drawer')
  }

  const goToRecuperarSenha = () => {
    props.navigation.navigate('Recuperação de Senha')
  }

  return (

    <View style={styles.body}>

      <Text style={styles.titulo}>Satisfying.you</Text>

      <Image style={styles.logo} source={require('../images/smile-icon.png')}></Image>

      <Text style={styles.text}>E-mail</Text>

      <TextInput placeholder='jurandir.pereira@hotmail.com' placeholderTextColor= '#3F92C5' style={styles.textInput}></TextInput>

      <Text style={styles.text}>Senha</Text>

      <TextInput  placeholder='********' placeholderTextColor='#3F92C5' style={styles.textInput}></TextInput>

      <Text style={{color:'#FD7979', textAlign:'left', fontFamily: 'AveriaLibre-Regular'}}>E-mail e/ou senhas inválidos</Text>

      <Button onPress={goToDrawer} style={styles.buttonEntrar}><Text style={styles.buttonText}>Entrar</Text></Button>

      <Button onPress={goToNovaConta} style={styles.buttonCriar}><Text style={styles.buttonText}>Criar minha conta</Text></Button>

      <Button onPress={goToRecuperarSenha} style={styles.buttonEsqueci}><Text style={styles.buttonText}>Esqueci minha senha</Text></Button>

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

  logo:{
    marginBottom: 30,
  },

  titulo:{
    fontSize:30,
    color:'#FFFF',
    textAlign:'center',
    fontFamily:'AveriaLibre-Regular',
    marginBottom: 20,
  },

  text: {
    color: '#fff',
    textAlign: 'left',
    marginTop: 10,
    width: 300,
    fontFamily:'AveriaLibre-Regular'
  },

  textInput: {
    backgroundColor: '#fff',
    width: 300,
    height: 51,
    fontFamily:'AveriaLibre-Regular'
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
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
 
});

export default Login;