import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';

const NovaPesquisa = (props) => {
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [dataPesquisa, setDataPesquisa] = useState('');
  const [nomePesquisaError, setNomePesquisaError] = useState('');
  const [dataPesquisaError, setDataPesquisaError] = useState('');


  const goToHome = () => {
    props.navigation.navigate('Home');
  }

  const handleCadastro = () => {
    // Verificar se os campos estão vazios
    if (!nomePesquisa.trim()) {
      setNomePesquisaError('Preencha o nome da pesquisa');
    } else {
      setNomePesquisaError('');
    }

    if (!dataPesquisa.trim()) {
      setDataPesquisaError('Preencha a data da pesquisa');
    } else {
      setDataPesquisaError('');
    }
    //Se os nomes não estiverem vazios, ir para a Home
    if (nomePesquisa.trim() && dataPesquisa.trim()) {
      goToHome();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nomePesquisa}
        onChangeText={text => setNomePesquisa(text)}
      />
      {!!nomePesquisaError && <Text style={styles.alert}>{nomePesquisaError}</Text>}
      <Text style={styles.label}>Data</Text>
      <View style={styles.dateInputContainer}>
        <TextInput
          style={styles.input}
          value={dataPesquisa}
          onChangeText={text => setDataPesquisa(text)}
        />
        <Image style={styles.calendar} source={require('../images/icon.png')} />
      </View>
      {!!dataPesquisaError && <Text style={styles.alert}>{dataPesquisaError}</Text>}

      <View style={styles.containerImagem}>
        <Text style={styles.text}>Imagem:</Text>
        <Pressable style={styles.imageButton}>
          <Text style={styles.imageText}>Câmera/Galeria de imagens</Text>
        </Pressable>
      </View>

      <Pressable style={styles.button} onPress={handleCadastro}>
        <Text style={styles.text}>CADASTRAR</Text>
      </Pressable>
    </View>
  );
};

const styles = {

  container: {
    flex: 1,
    backgroundColor: '#372775',
    fontFamily: 'AveriaLibre-Regular',
    alignItems: 'center',
  },

  label: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    width: 300,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular'
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: 300,
  },

  containerImagem: {
    width: 300,
  },

  calendar: {
    width: 20,
    height: 20,
    position: 'relative',
    right: 30,
    top: 10,
  },

  imageButton: {
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingBottom: 25,
    width: 180,
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
  },

  imageText: {
    color: '#939393',
    fontSize: 12,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  button: {
    backgroundColor: '#37bd6d',
    color: '#fff',
    padding: 10,
    marginTop: 20,
    width: 300,
    alignItems: 'center',
    fontFamily: 'AveriaLibre-Regular'
  },

  text: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular'
  },

  alert: {
    color: '#FD7979',
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'AveriaLibre-Regular'
  }

};

export default NovaPesquisa;