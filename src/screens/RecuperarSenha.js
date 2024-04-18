import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const RecuperarSenha = (props) => {

  goToLogin = () => {
    props.navigation.navigate('Login')
  }

    return (
      <View style={styles.body}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
            style={styles.textInput}
            placeholder="jurandir.pereira@hotmail.com"
            placeholderTextColor='#419ED7'
            ></TextInput>

        <Button onPress={goToLogin} style={styles.buttonEntrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Button>
      </View>
    );
}

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
    fontFamily: 'monospace',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    width: 300,
    fontFamily: 'AveriaLibre-Regular',
  },
  textInput: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
  },
  buttonEntrar: {
    marginTop: 30,
    marginBottom: 30,
    width: 300,
    backgroundColor: '#37BD6D',
    borderRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default RecuperarSenha;