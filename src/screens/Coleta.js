import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Coleta = (props) => {
  const goToAgradecimento = () => {
    props.navigation.navigate('Agradecimentos');
  };

  const icones = [
    { source: require('../images/pain.png'), text: 'Péssimo', field: 'avaliacaoP' },
    { source: require('../images/sad.png'), text: 'Ruim', field: 'avaliacaoR' },
    { source: require('../images/meh.png'), text: 'Neutro', field: 'avaliacaoN' },
    { source: require('../images/smile.png'), text: 'Bom', field: 'avaliacaoB' },
    { source: require('../images/laugh.png'), text: 'Excelente', field: 'avaliacaoE' }
  ];

  const handlePress = async (field) => {
    const id = props.route.params.id;
    const pesquisaRef = doc(db, "pesquisas", id); 
    const pesquisaSnap = await getDoc(pesquisaRef);

    if (pesquisaSnap.exists()) {
      const currentValue = pesquisaSnap.data()[field];
      await updateDoc(pesquisaRef, {
        [field]: currentValue + 1
      });
    }

    goToAgradecimento();

  };

  const nome = props.route.params.nome;

  console.log("Nome:", nome);

  return (
    <View style={styles.body}>
      <Text style={styles.titulo}>O que você achou do {nome}?</Text>
      <View style={styles.countainerRow}>
        {icones.map((icone, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(icone.field)}>
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
