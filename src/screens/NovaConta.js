import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

const NovaConta = (props) => {

  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (text) => {

    setEmail(text)
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setErrorMessage("E-mail inválido")
      return
      
    }
  }

  const handleSenha1Change = (text) => {

    setSenha1(text);
    setErrorMessage('');

  };

  const handleSenha2Change = (text) => {

    setSenha2(text);
    setErrorMessage('');

  };

  const goToLogin = () => {

    if (senha1 !== senha2) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }
    props.navigation.navigate('Login');

  };

  return (

    <View style={styles.body}>

        <Text style={styles.text}>E-mail</Text>

        <TextInput
          style={styles.textInput}
          placeholder="jurandir.pereira@hotmail.com"
          placeholderTextColor="#3F92C5"
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />

        {errorMessage && (
          <Text style={{ fontSize: 17, color: '#FD7979', fontFamily: 'AveriaLibre-Regular' }}>
            {errorMessage}
          </Text>
        )}

        <Text style={styles.text}>Senha</Text>

        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="*********"
          placeholderTextColor="#3F92C5"
          onChangeText={handleSenha1Change}
        />

        <Text style={styles.text}>Repetir senha</Text>

        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholderTextColor="#3F92C5"
          onChangeText={handleSenha2Change}
        />

        {errorMessage && (
          <Text style={{ fontSize: 17, color: '#FD7979', fontFamily: 'AveriaLibre-Regular' }}>
            {errorMessage}
          </Text>
        )}

        <Pressable onPress={goToLogin} style={styles.buttonCadastrar}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </Pressable>

    </View>

  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#372775',
    flex: 1,
    gap: 7,
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    width: 300,
    fontFamily: 'AveriaLibre-Bold',
  },

  textInput: {
    backgroundColor: '#fff',
    fontSize:20,
    width: 300,
    height: 40,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5'
  },

  buttonCadastrar: {
    width: 300,
    height: 40,
    backgroundColor: '#37BD6D',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 15
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20
  }

})

export default NovaConta;