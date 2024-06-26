import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Coleta = (props) => {
  const goToAgraecimento = () => {
    props.navigation.navigate('Agradecimentos');
  };

  const icones = [
    { source: require('../images/pain.png'), text: 'Péssimo' },
    { source: require('../images/sad.png'), text: 'Ruim' },
    { source: require('../images/meh.png'), text: 'Neutro' },
    { source: require('../images/smile.png'), text: 'Bom' },
    { source: require('../images/laugh.png'), text: 'Excelente' }
  ];

  return (
  
    <View style={styles.body}>

      <Text style={styles.titulo}> O que você achou do carnaval de 2024? </Text>

      <View style={styles.countainerRow}>

      {icones.map((icone, index) => (

        <TouchableOpacity key={index} onPress={goToAgraecimento}>

          <View style={styles.iconeContainer}>

            <Image source={icone.source} style={styles.icone} />

            <Text style={styles.text}>{icone.text}</Text>

          </View>

        </TouchableOpacity>

      ))}

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  countainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  titulo: {
    fontSize: 30,
    marginBottom: 30,
    color: '#FFFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  icone: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Bold',
  },
  iconeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default Coleta;
