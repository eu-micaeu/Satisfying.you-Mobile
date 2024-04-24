import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
const NovaPesquisa = (props) => {
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [dataPesquisa, setDataPesquisa] = useState('');
  const [nomePesquisaError, setNomePesquisaError] = useState('');
  const [dataPesquisaError, setDataPesquisaError] = useState('');

  const goToHome = () => {
    props.navigation.navigate('Drawer');
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
    <>
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
        <Text style={styles.label}>Imagem</Text>
        <Pressable style={styles.imageButton}>
          <Text style={styles.imageText}>Câmera/Galeria de imagens</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleCadastro}>
          <Text style={styles.text}>CADASTRAR</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 5,
    backgroundColor: '#372775',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    height: 35,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: '100%',
    fontFamily: 'AveriaLibre-Regular',
  },
  dateInputContainer: {
    flexDirection: 'row',
  },
  calendar: {
    width: 25,
    height: 25,
    position: 'relative',
    right: 33,
    top: 4,
  },
  imageButton: {
    backgroundColor: '#fff',
    padding: 20,
    width: 180,
    alignItems: 'center',
    marginBottom: 10,
  },
  imageText: {
    color: '#939393',
    fontSize: 10,
    fontFamily: 'AveriaLibre-Regular',
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
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
  },
  alert: {
    color: '#FD7979',
    fontSize: 12,
    marginBottom: 4,  
  }
};

export default NovaPesquisa;