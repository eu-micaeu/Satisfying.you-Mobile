import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth_mod } from '../config/firebase';

const NovaConta = (props) => {
  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState('');
  const [errorMessageSenha, setErrorMessageSenha] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const cadastrarUsuario = () => {
      createUserWithEmailAndPassword(auth_mod, email, senha1, senha2)
        .then(userCredencial => {
          goToLogin();
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/weak-password':
              setErrorMessageSenha(
                'Senha Fraca! Deve conter mais que 6 dígitos',
              );
              break;
            case 'auth/invalid-email':
              setErrorMessageSenha('Email inválido!');
              break;
            case 'auth/email-already-in-use':
              setErrorMessageSenha('Email já está sendo usado!');
              break;
            default:
              setErrorMessageSenha('Ocorreu um erro, tente novamente mais tarde!');
              break;
          }
        });
    };
  

  const handleEmail = (text) => {
  setEmail(text);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(text).toLowerCase())) {
      setErrorMessageEmail("E-mail inválido");
      setIsButtonDisabled(true);
    } else {
      setErrorMessageEmail("");
      setIsButtonDisabled(false);
    }
  };

  const handleSenha1 = (text) => {
    setSenha1(text);
    setErrorMessageSenha('');
  };

  const handleSenha2 = (text) => {
    setSenha2(text);
    setErrorMessageSenha('');
  };

  const goToLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.textInput}
        placeholder="exemplo@hotmail.com"
        placeholderTextColor="#3F92C5"
        keyboardType="email-address"
        onChangeText={handleEmail}
      />

      {errorMessageEmail && <Text style={styles.errorMessage}></Text>}

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholderTextColor="#3F92C5"
        onChangeText={handleSenha1}
      />

      <Text style={styles.text}>Repetir senha</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholderTextColor="#3F92C5"
        onChangeText={handleSenha2}
      />

      {errorMessageSenha && (
        <Text style={styles.errorMessage}>{errorMessageSenha}</Text>
      )}

      <Pressable
        onPress={() => {
          cadastrarUsuario();
        }}
        style={styles.buttonCadastrar}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#372775',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    width: 300,
    fontFamily: 'AveriaLibre-Bold',
    marginTop: 5,
  },

  textInput: {
    backgroundColor: '#fff',
    fontSize: 20,
    width: 300,
    height: 40,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    marginTop: 2,
    paddingHorizontal: 10,
  },

  buttonCadastrar: {
    width: 300,
    height: 40,
    backgroundColor: '#37BD6D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },

  errorMessage: {
    fontSize: 14,
    color: '#FD7979',
    fontFamily: 'AveriaLibre-Regular',
    marginLeft: 10,
  },
  
});

export default NovaConta;
