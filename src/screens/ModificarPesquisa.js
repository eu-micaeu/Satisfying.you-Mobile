import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { updateDoc, doc, getFirestore, query, where, getDocs, collection,addDoc,deleteDoc} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';

import app from '../config/firebase';

const db = getFirestore(app);
const storage = getStorage(app);

const ModificarPesquisa = (props) => {
  const [novoNome, setNovoNome] = useState('');
  const [novaData, setNovaData] = useState('');
  const [nomePesquisaError, setNomePesquisaError] = useState('');
  const [dataPesquisaError, setDataPesquisaError] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [image, setImage] = useState(null);

  const goToHome = () => {

    props.navigation.navigate('Drawer');

  };

  const togglePopUp = () => {

    setShowPopUp(!showPopUp);

  };

  const editarPesquisa = async (id,novoNome,novaData,image) => {

    if (!novoNome.trim()) {

      setNomePesquisaError('Preencha o nome da pesquisa');

    } else {
      setNomePesquisaError('');

    }

    if (!novaData.trim()) {

      setDataPesquisaError('Preencha a data da pesquisa');

    } else {

      setDataPesquisaError('');

    }

    if (novoNome.trim() && novaData.trim()) {

      try {

        //deletarPesquisa(id);

        let imageUrl = null;

        if (image) {
          try {
            const response = await fetch(image.uri);
            const blob = await response.blob();
            const imageRef = ref(storage, `pesquisas/${Date.now()}_${image.fileName}`);
            await uploadBytes(imageRef, blob);
            imageUrl = await getDownloadURL(imageRef);
          } catch (imageError) {
            console.error("Erro ao fazer upload da imagem: ", imageError);
            throw new Error("Falha ao enviar a imagem");
          }
        }
        // Referência ao documento que será atualizado
        const pesRef = doc(db,"pesquisas" ,id);

        const novaPesquisa = {
          nome: novoNome,
          data: novaData,
          imagem: imageUrl,
        };

        /*addDoc(pesquisaCollection, novaPesquisa).then((docRef) => {
          goToHome();
        }).catch((error) => {
          console.error("Erro ao adicionar a pesquisa: ", error);
        });

      } catch (error) {

        console.error("Erro ao adicionar a pesquisa: ", error);

      }*/
      // Atualiza o documento no Firestore
      await updateDoc(pesRef, novaPesquisa);
      console.log("Pesquisa atualizada com sucesso!");
      goToHome();

    } catch (error) {
      console.error("Erro ao modificar a pesquisa: ", error);
    }

    }

  };


  const deletarPesquisa = async (id) => {
    /*try {
      const pesquisaCollection = collection(db, 'pesquisas');
      const q = query(pesquisaCollection, where('id', '==', id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = doc(db, 'pesquisas', querySnapshot.docs[0].id);
        await deleteDoc(docRef);
        console.log("Document deleted successfully");
        goToHome();
      } else {
        console.log("No matching document found");
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }*/
    deleteDoc(doc(db,"pesquisas",id))
    goToHome();
  };

  const handleImagePicker = () => {
    launchImageLibrary({}, (response) => {
      console.log(response); // Adiciona um log para verificar a resposta
      if (response && response.assets && response.assets.length > 0) {
        setImage(response.assets[0]);
      } else {
        console.error('Nenhuma imagem selecionada ou erro na seleção da imagem');
      }
    });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Nome:</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Carnaval 2024'
        value={novoNome}
        onChangeText={text => setNovoNome(text)}
      />
      <Text style={styles.text}>Data:</Text>
      <TextInput
        style={styles.textInput}
        placeholder='16/02/2024'
        value={novaData}
        onChangeText={text => setNovaData(text)}
      />
      <View style={styles.containerImagem}>
        <Text style={styles.text}>Imagem:</Text>
        <Pressable style={styles.imageButton} onPress={handleImagePicker}>
          {image && <Image source={{ uri: image.uri }} style={styles.image} />}
        </Pressable>
      </View>
      <Button style={styles.buttonSalvar} onPress={() => editarPesquisa(props.route.params.id)}>
        <Text style={styles.buttonSalvarText}>Salvar</Text>
      </Button>
      <TouchableOpacity onPress={togglePopUp} style={styles.apagar}>
        <Image source={require('../images/trash.png')} style={{ width: 16, height: 16, marginTop: 20 }} />
        <Text style={styles.textApagar}>Apagar</Text>
      </TouchableOpacity>
      <Modal visible={showPopUp} transparent animationType="fade" onRequestClose={togglePopUp}>
        <View style={styles.modalBackground}>
          <View style={styles.popup}>
            <Text style={styles.textPopUp}>Tem certeza de apagar essa pesquisa?</Text>
            <View style={styles.divOptions}>
              <Button style={styles.optionSim} onPress={() => deletarPesquisa(props.route.params.id)}>
                <Text style={styles.buttonSalvarText}>SIM</Text>
              </Button>
              <Button style={styles.optionNao} onPress={togglePopUp}>
                <Text style={styles.buttonSalvarText}>CANCELAR</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#382474',
    flex: 1,
    alignItems: 'center',
  },
  apagar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  textApagar: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular'
  },
  containerImagem: {
    width: 300,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 5,
    width: 300,
    fontFamily: 'AveriaLibre-Regular'
  },
  textInput: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular',
  },
  imageButton: {
    backgroundColor: '#fff',
    width: 180,
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  buttonSalvar: {
    marginTop: 10,
    height: 40,
    width: 300,
    backgroundColor: 'green',
    borderRadius: 0,
  },
  buttonSalvarText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular'
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#382474',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 0,
    width: 350,
  },
  divOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    justifyContent: 'center',
    marginTop: 20,
  },
  optionSim: {
    backgroundColor: '#FF8383',
    borderRadius: 0,
    width: 150,
    margin: 10,
    padding: 10,
  },
  optionNao: {
    backgroundColor: '#3F92C5',
    borderRadius: 0,
    width: 150,
    margin: 10,
    padding: 10,
  },
  textPopUp: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'AveriaLibre-Regular'
  },
});

export default ModificarPesquisa;
