import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { collection, addDoc, initializeFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { launchImageLibrary } from 'react-native-image-picker';
import app from "../config/firebase";

const NovaPesquisa = (props) => {
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [dataPesquisa, setDataPesquisa] = useState('');
  const [nomePesquisaError, setNomePesquisaError] = useState('');
  const [dataPesquisaError, setDataPesquisaError] = useState('');
  const [image, setImage] = useState(null); // State para armazenar a imagem

  const db = initializeFirestore(app, {experimentalForceLongPolling: true});
  const storage = getStorage(app);
  const pesquisaCollection = collection(db, 'pesquisas');

  const goToHome = () => {
    props.navigation.navigate('Drawer');
  };

  const handleCadastro = async () => {
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

    if (nomePesquisa.trim() && dataPesquisa.trim()) {
      let imageUrl = null;

      if (image) {
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const imageRef = ref(storage, `pesquisas/${Date.now()}_${image.fileName}`);
        await uploadBytes(imageRef, blob);
        imageUrl = await getDownloadURL(imageRef);
      }

      const novaPesquisa = {
        nome: nomePesquisa,
        data: dataPesquisa,
        imagem: imageUrl,
      };

      addDoc(pesquisaCollection, novaPesquisa).then((docRef) => {
        goToHome();
      }).catch((error) => {
        console.error("Erro ao adicionar a pesquisa: ", error);
      });
    }
  };

  const handleImagePicker = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0]);
      }
    });
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
          placeholder='DD/MM/AAAA'
          keyboardType='numeric'
        />
        <Image style={styles.calendar} source={require('../images/icon.png')} />
      </View>
      {!!dataPesquisaError && <Text style={styles.alert}>{dataPesquisaError}</Text>}
      <Text style={styles.label}>Imagem</Text>
      <Pressable style={styles.imageButton} onPress={handleImagePicker}>
        {image && <Image source={{ uri: image.uri }} style={styles.image} />}
      </Pressable>
      <Pressable style={styles.button} onPress={handleCadastro}>
        <Text style={styles.text}>CADASTRAR</Text>
      </Pressable>
    </View>
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
    width: 180,
    height: 100,
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
  textInputImagem: {
    backgroundColor: '#fff',
    width: 100,
    height: 50,
    fontSize: 20,
    borderRadius: 0,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular'
  },
  alert: {
    color: '#FD7979',
    fontSize: 12,
    marginBottom: 4,
  }
};

export default NovaPesquisa;
