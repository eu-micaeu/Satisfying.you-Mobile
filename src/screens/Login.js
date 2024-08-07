import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput} from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { reducerSetLogin } from '../../redux/loginSlice';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [errorMessage, seterrorMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const dispatch = useDispatch();

  const handleEmailChange = (text) => {
    setEmail(text); 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(text){
      if (!re.test(String(email).toLowerCase())) {
        seterrorMessage("E-mail e/ou senha inválidos");
        setIsButtonDisabled(true);
      }else {
        seterrorMessage("");
        setIsButtonDisabled(false);
        dispatch(reducerSetLogin({email: email}));
      }
    }else{
      seterrorMessage("");
    }
  }
  
  const handleSenhaChange = (text) => {
    setSenha(text);
  }

  const goToRecuperarSenha = () => {
    props.navigation.navigate('Recuperar Senha')
  }

  const goToNovaConta = () => {
    props.navigation.navigate('Nova Conta')
  }

  const goToDrawer = () => {
    props.navigation.navigate('Drawer')
  }

  const handleLogin = () => {
    if (!email.trim()|| !senha.trim()) {
      seterrorMessage('Preencha todos os dados');
    } else {
      seterrorMessage('')
      goToDrawer();
    }
  };

  return (

    <View style={styles.body}>

        <View style={styles.logoContainer}>

          <Text style={styles.titulo}>Satisfying.you</Text>

          <Image style={styles.logo} source={require('../images/smile-icon.png')} />

        </View>

        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.textInput}
          placeholder="jurandir.pereira@hotmail.com"
          placeholderTextColor='#3F92C5'
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          showsVerticalScrollIndicator={false}
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.textInput}
          placeholder="********"
          placeholderTextColor='#3F92C5'
          secureTextEntry={true}
          onChangeText={handleSenhaChange}
        />

        {errorMessage && (
          <Text style={{ textAlign:'left', fontSize: 13, color: '#FD7979', fontFamily: 'AveriaLibre-Regular' }}>
            {errorMessage}
          </Text>
        )}

        <Button onPress={handleLogin} style={styles.buttonEntrar} disabled={isButtonDisabled} ><Text style={styles.buttonText} >Entrar</Text></Button>

        <Button onPress={goToNovaConta} style={styles.buttonCriar}><Text style={styles.buttonText}>Criar minha conta</Text></Button>

        <Button onPress={goToRecuperarSenha} style={styles.buttonEsqueci}><Text style={styles.buttonText}>Esqueci minha senha</Text></Button>

    </View>

  )

}

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#372775',
    flex: 1,
    gap: 7,
    alignItems: 'center',
  },

  logoContainer: {
    marginTop:1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    marginTop: 10,
    marginLeft: 30,
  },

  titulo: {
    fontSize: 25,
    marginTop: 10,
    color: '#FFFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },

  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'left',
    width: 300,
    fontFamily: 'AveriaLibre-Bold',
  },
  label: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'left',
    width: 450,
    fontFamily: 'AveriaLibre-Bold',
  },

  textInput: {
    backgroundColor: '#fff',
    fontSize: 17,
    width: 450,
    height: 42,
    paddingTop:0,
    paddingBottom:0,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5'
  },

  buttonEntrar: {
    width: 450,
    marginTop:5,
    height:35,
    marginBottom:10,
    backgroundColor: '#37BD6D',
    borderRadius: 0,
  },
  buttonCriar: {
    width: 450,
    height:35,
    backgroundColor: '#419ED7',
    borderRadius: 0,
  },
  buttonEsqueci: {
    width: 450,
    height:35,
    backgroundColor: '#B0CCDE',
    borderRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 13,
    fontWeight:'bold',
  },
});

export default Login;
