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
    <>
      <View style={styles.top}>
        <Pressable onPress={goToHome}>
          <Image
            style={styles.arrow}
            source={require('../images/Vector.png')}
          />
        </Pressable>
        <Text style={styles.title}>Nova Pesquisa</Text>
      </View>
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
    backgroundColor: '#372775',
    fontFamily: 'AveriaLibre-Regular',
  },

  top: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#2B1D62',
  },
  arrow: {
    width: 20,
    height: 20,
    marginTop:6,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
  },
  dateInputContainer: {
    flexDirection: 'row',
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
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
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
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  alert: {
    color: '#FD7979',
    fontSize: 12,
    marginBottom: 5,  
  }
};

export default NovaPesquisa;