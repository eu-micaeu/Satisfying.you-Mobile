import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

const RecuperarSenha = (props) => {

  const goToLogin = () => {
    props.navigation.navigate('Login');
  }

    return (
      <View style={styles.body}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput
            style={styles.textInput}
            placeholder="jurandir.pereira@hotmail.com"
            placeholderTextColor='#419ED7'
            ></TextInput>
        <Text style={{color:'#FD7979', textAlign:'left', fontFamily: 'AveriaLibre-Regular'}}>E-mail parece ser inválido</Text>
        <Pressable onPress={goToLogin} style={styles.buttonEntrar}>
          <Text style={styles.buttonText}>RECUPERAR</Text>
        </Pressable>
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