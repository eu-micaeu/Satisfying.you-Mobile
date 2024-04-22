import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

const ModificarPesquisa = (props) => {

  const [showPopUp, setShowPopUp] = useState(false);

  const goToHome = () => {
    props.navigation.navigate('Home');
  }

  const goToAcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa');
  }

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  }

  return (
    <View style={styles.body}>

      <View style={styles.top}>
        <Pressable onPress={goToAcoesPesquisa}>
          <Image
            style={styles.arrow}
            source={require('../images/Vector.png')}
          />
        </Pressable>
        <Text style={styles.title}>Modificar Pesquisa</Text>
      </View>

      <Text style={styles.text}>Nome:</Text>
      <TextInput style={styles.textInput} placeholder='Carnaval 2024'></TextInput>

      <Text style={styles.text}>Data:</Text>
      <TextInput style={styles.textInput} placeholder='16/02/2024'></TextInput>

      <View style={styles.containerImagem}>
        <Text style={styles.text}>Imagem:</Text>
        <TextInput style={styles.textInputImagem}></TextInput>
      </View>

      <Button style={styles.buttonSalvar} onPress={goToHome}><Text style={styles.buttonSalvarText}>Salvar</Text></Button>

      <TouchableOpacity onPress={togglePopUp} style={styles.apagar}>

        <Image source={require('../images/trash.png')} style={{ width: 16, height: 16, marginTop: 20 }} />

        <Text style={styles.textApagar} onPress={togglePopUp} >Apagar</Text>

      </TouchableOpacity>

      <Modal visible={showPopUp} transparent animationType="fade" onRequestClose={togglePopUp}>

        <View style={styles.modalBackground}>

          <View style={styles.popup}>

            <Text style={styles.textPopUp}>Tem certeza de apagar essa pesquisa?</Text>

            <View style={styles.divOptions}>

              <Button style={styles.optionSim} onPress={goToHome} ><Text style={styles.buttonSalvarText}>SIM</Text></Button>

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
    alignItems: 'center',
  },

  top: {
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    backgroundColor: '#2B1D62',
  },

  arrow: {
    width: 20,
    height: 20,
    marginRight: 20,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
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

  textInputImagem: {
    backgroundColor: '#fff',
    width: 100,
    height: 50,
    fontSize: 20,
    borderRadius: 0,
    textAlign: 'left',
    fontFamily: 'AveriaLibre-Regular'
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
    fontFamily: 'AveriaLibre-Regular'
  },

});

export default ModificarPesquisa;
