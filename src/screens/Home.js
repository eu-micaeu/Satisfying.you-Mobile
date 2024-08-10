import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable,FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomCard from '../components/CustomCard';
import app from "../config/firebase";
import { collection, addDoc, initializeFirestore, onSnapshot, query} from 'firebase/firestore';
const Home = (props) => {

  goToNovaPesquisa = () => {
    props.navigation.navigate('Nova Pesquisa');
  }
  goToAcoesPesquisa = () => {
    props.navigation.navigate('Ações da Pesquisa')
  }

  const cards = [
    { capa: require("../images/secomp.png"), nome: "SECOMP 2023", data: "10/10/2023" },
    { capa: require("../images/ubuntu.png"), nome: "UBUNTU 2022", data: "05/06/2022" },
    { capa: require("../images/Meninas.png"), nome: "MENINAS CPU", data: "01/04/2022"  },
    { capa: require("../images/COTB.png"), nome: "COTB", data: "01/04/2022" }

  ]
  const [listaPesquisas, setListaPesquisas] = useState();
  //const navigation = useNavigation();

  const db = initializeFirestore(app, {experimentalForceLongPolling: true});
  const pesquisaCollection = collection(db, 'pesquisas');

 useEffect( () =>{
    const q = query(pesquisaCollection);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pesquisas =[]
      snapshot.forEach((doc) =>{
        pesquisas.push({
          id: doc.id,
          ...doc.data()
        })
      });
      setListaPesquisas(pesquisas);
    })
    return () => unsubscribe();
  },[]);
    const itemPesquisa= ({item})=>{
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AcoesPesquisa', { id: item.idPesquisa })}>
      <Text style={styles.title}>{item.nomePesquisa}</Text>
      <Text style={styles.subtitle}>{item.dataPesquisa}</Text>
      <Image source={{ uri: item.imagUrl }} style={styles.cardImage} />
      </TouchableOpacity>
    }


  return (
    <View style={styles.body}>
      <View style={styles.containerCards}>
        <FlatList data={listaPesquisas} renderItem={itemPesquisa}></FlatList>
      </View>
      <View style={styles.viewTextInput}>
        <Image source={require('../images/pesquisa.png')} />
        <TextInput style={styles.textInput} placeholder='Insira o termo da busca...' />
      </View>
      
      <Pressable onPress={goToAcoesPesquisa} style={styles.containerCards}>
        {cards.map((card, index) => (
          <CustomCard 
          key={index} 
          onPress={goToAcoesPesquisa} 
          capa={card.capa} 
          nome={card.nome} 
          data={card.data} 
        />
        ))}
      </Pressable>
      <Pressable onPress={goToNovaPesquisa} style={styles.buttonNovaPesquisa}>
        <Text style={styles.buttonNovaPesquisaText}>Nova Pesquisa</Text>
      </Pressable>
    </View>

  )
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#382474',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  viewTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    height: 40,
    width: '90%',
  },

  textInput: {
    backgroundColor: '#fff',
    width: 300,
    width: '90%',
    height: 40,
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular'
  },

  buttonNovaPesquisa: {
    width: '90%',
    height: 40,
    backgroundColor: '#37BD6D',
    justifyContent: 'center',
    marginTop: 15
  },

  buttonNovaPesquisaText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25
  },

  containerCards: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'left',
    marginTop: 10,
    width: '80%',
  },

  cardImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  card: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
  },

  cardImage: {
    width: 70,
    height: 70,
    margin: 12
  },

  title: {
    color: 'blue',
    fontSize: 20,
    width: 140,
    fontFamily: 'AveriaLibre-Regular',
  },

  subtitle: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular'
  }

});

export default Home;