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
    if (!re.test(String(email).toLowerCase())){
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
      <Text style={styles.text}>Email</Text>
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
    paddingTop: 150,
    paddingLeft: 50,
    gap: 7,
  },

  text: {
    color: '#fff',
    paddingTop: 15,
    fontSize: 20,
    fontFamily: 'AveriaLibre-Bold',
  }, 

  textInput: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 50,
    fontSize: 20,
    color: '#3F92C5',
  },

  buttonCadastrar: {
    marginTop:60,
    width: 300,
    height:50,
    backgroundColor: '#37BD6D'
  },

  buttonText:{
    color:'#FFFFFF',
    textAlign:'center',
    paddingTop:10,
    fontFamily:'AveriaLibre-Regular',
    fontSize:25
  }  
    
  })

export default NovaConta;