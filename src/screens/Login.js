import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput} from 'react-native'
import { Button } from 'react-native-paper'

const Login = (props) => {

  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (text) => {

    setEmail(text)

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(String(email).toLowerCase())) {

      setErrorMessage("E-mail e/ou senhas inválidos")

      return

    }

  }

  const goToRecuperarSenha = () => {

    props.navigation.navigate('RecuperarSenha')

  }

  const goToNovaConta = () => {

    props.navigation.navigate('NovaConta')

  }

  const goToDrawer = () => {

    props.navigation.navigate('Drawer')

  }

  return (

    <View style={styles.body}>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.logoContainer}>

          <Text style={styles.titulo}>Satisfying.you</Text>

          <Image style={styles.logo} source={require('../images/smile-icon.png')} />

        </View>

        <Text style={styles.text}>E-mail</Text>

        <TextInput
          style={styles.textInput}
          placeholder='jurandir.pereira@hotmail.com'
          placeholderTextColor='#3F92C5'
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />

        {errorMessage && (
          <Text style={{ fontSize: 15, color: '#FD7979', fontFamily: 'AveriaLibre-Regular' }}>
            {errorMessage}
          </Text>
        )}

        <Text style={styles.text}>Senha</Text>

        <TextInput
          style={styles.textInput}
          placeholder='********'
          placeholderTextColor='#3F92C5'
          secureTextEntry={true}
        />

        <Button onPress={goToDrawer} style={styles.buttonEntrar}><Text style={styles.buttonText}>Entrar</Text></Button>

        <Button onPress={goToNovaConta} style={styles.buttonCriar}><Text style={styles.buttonText}>Criar minha conta</Text></Button>

        <Button onPress={goToRecuperarSenha} style={styles.buttonEsqueci}><Text style={styles.buttonText}>Esqueci minha senha</Text></Button>

      </ScrollView>

    </View>

  )

}

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#372775',
    flex: 1,
    gap: 7,
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    marginLeft: 30,
    marginBottom: 20
  },

  titulo: {
    fontSize: 30,
    color: '#FFFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 20,
  },

  text: {
    color: '#fff',
    paddingTop: 15,
    fontSize: 20,
    textAlign: 'left',
    width: 300,
    fontFamily: 'AveriaLibre-Bold',
  },

  textInput: {
    backgroundColor: '#fff',
    fontSize: 20,
    width: 300,
    height: 51,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5'
  },

  buttonEntrar: {
    marginTop: 30,
    marginBottom: 30,
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
