import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const ModificarPesquisa = (props) => {

  const [showPopUp, setShowPopUp] = useState(false);

  const goToHome = () => {
    props.navigation.navigate('Home');
  }

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Nome:</Text>
      <TextInput style={styles.textInput} placeholder='Carnaval 2024'></TextInput>

      <Text style={styles.text}>Data:</Text>
      <TextInput style={styles.textInputData} placeholder='16/02/2024'></TextInput>

      <Text style={styles.text}>Imagem:</Text>
      <TextInput style={styles.textInputImagem}>
        <Image source={require('../images/imagem.png')} style={{ width: 50, height: 50, marginTop: 20, marginBottom: 20 }} />
      </TextInput>

      <Button style={styles.buttonSalvar} onPress={goToHome}><Text style={styles.buttonSalvarText}>Salvar</Text></Button>

      <TouchableOpacity onPress={togglePopUp}>

        <Image source={require('../images/trash.png')} style={{ width: 16, height: 16, marginTop: 20 }} />

      </TouchableOpacity>

      <Text style={styles.textImage} onPress={togglePopUp}>Apagar</Text>

      <Modal visible={showPopUp} transparent animationType="fade" onRequestClose={togglePopUp}>

        <View style={styles.modalBackground}>

          <View style={styles.popup}>

            <Text style={styles.textPopUp}>Tem certeza de apagar essa pesquisa?</Text>

            <View style={styles.divOptions}>

              <Button style={styles.optionSim} /*onPress={goToHome}*/ ><Text style={styles.buttonSalvarText}>SIM</Text></Button>

              <Button style={styles.optionNao} onPress={togglePopUp}><Text style={styles.buttonSalvarText}>CANCELAR</Text></Button>

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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 10,
    width: 300,
    fontFamily:'AveriaLibre-Regular'
  },

  textInput: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
    fontFamily:'AveriaLibre-Regular'
  },

  textInputData: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
    fontFamily:'AveriaLibre-Regular'
  },

  textInputImagem: {
    backgroundColor: '#fff',
    width: 300,
    height: 100,
    fontSize: 70,
    borderRadius: 0,
    textAlign: 'center',
    fontFamily:'AveriaLibre-Regular'
  },

  buttonSalvar: {
    marginTop: 35,
    width: 300,
    backgroundColor: 'green',
    borderRadius: 0,
  },

  buttonSalvarText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily:'AveriaLibre-Regular'
  },

  textImage: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    fontFamily:'AveriaLibre-Regular'
  },

  // PopUp

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
    fontFamily:'AveriaLibre-Regular'
  },

});

export default ModificarPesquisa;
