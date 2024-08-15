import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth_mod } from '../config/firebase';  
import { useSelector } from 'react-redux';

const RecuperarSenha = (props) => {
  
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleRecuperarSenha = () => {
    sendPasswordResetEmail(auth_mod, email)
      .then(() => {
        goToLogin();
      })
      .catch(erro => {
        switch (erro) {
          case 'auth/invalid-email':
            setErrorMessage('E-mail inválido.');
            break;
          case 'auth/user-not-found':
            setErrorMessage('E-mail não cadastrado');
            break;
          default:
            setErrorMessage('Ocorreu um erro, tente novamente mais tarde.');
            break;
        }
      });
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  const goToLogin = () => {
    props.navigation.navigate('Login');
  }

    return (
      <View style={styles.body}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
            style={styles.textInput}
            placeholder="exemplo@hotmail.com"
          placeholderTextColor='#419ED7'
          onChangeText={handleEmailChange}
        ></TextInput>
        
        {errorMessage && (
          <Text style={{ fontSize: 17, color: '#FD7979', fontFamily: 'AveriaLibre-Regular' }}>
            {errorMessage}
          </Text>
        )}

        <Pressable onPress={handleRecuperarSenha} style={styles.buttonEntrar} disabled={isButtonDisabled}>
          <Text style={styles.buttonText}>RECUPERAR</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center',
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
    fontSize:20,
    width: 300,
    height: 51,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5'
  },

  buttonEntrar: {
    marginTop: 60,
    width: 300,
    height: 50,
    backgroundColor: '#37BD6D'
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 10,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25
  }

});

export default RecuperarSenha;