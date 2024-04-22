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
      <View style={styles.container}>

        <View style={styles.nameInputContainer}>

          <Text style={styles.text}>Nome</Text>
          <TextInput
            style={styles.textInput}
            value={nomePesquisa}
            onChangeText={text => setNomePesquisa(text)}
          />
          {!!nomePesquisaError && <Text style={styles.alert}>{nomePesquisaError}</Text>}

        </View>

        <Text style={styles.text}>Data</Text>

        <View style={styles.dateInputContainer}>
          <TextInput
            style={styles.textInput}
            value={dataPesquisa}
            onChangeText={text => setDataPesquisa(text)}
          />
          {!!dataPesquisaError && <Text style={styles.alert}>{dataPesquisaError}</Text>}

          <Text style={styles.text}>Imagem</Text>
          <Pressable onPress={() => console.log('Calendário pressionado')}>
          </Pressable>
        </View>

        <View style={styles.imageContainer}>

          <Pressable style={styles.imageButton} onPress={() => console.log('Câmera/Galeria pressionado')}>

            <Text style={styles.imageText}>Câmera/Galeria de imagens</Text>

          </Pressable>

        </View>

        <Pressable style={styles.button} onPress={goToHome}>

          <Text style={styles.buttonText}>CADASTRAR</Text>

        </Pressable>

      </View>
    </>
  );
};

const styles = {

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
    fontSize: 20,
    width: 300,
    height: 51,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5'
  },

  calendar: {
    width: 20,
    height: 20,
    marginBottom: 20,
  },

  imageContainer: {
    alignItems: 'left',
    marginBottom: 20,
    width: 300,
  },

  imageButton: {
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingBottom: 25,
    width: 180,
    alignItems: 'left',
    marginBottom: 30,
  },

  imageText: {
    color: '#939393',
    fontSize: 12,
    fontFamily: 'AveriaLibre-Regular',
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: '#37BD6D',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 28,
    textAlign: 'center',
  },

  alert: {
    color: '#FD7979',
    fontSize: 12,
    marginBottom: 15,
  }

};

export default NovaPesquisa;

