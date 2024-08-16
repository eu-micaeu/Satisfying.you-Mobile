import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import app from "../config/firebase";
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { reducerSetPesquisa } from '../../redux/pesquisaSlice';

const Home = (props) => {

  const dispatch = useDispatch();

  const goToNovaPesquisa = () => {
    props.navigation.navigate('Nova Pesquisa');
  };

  const [listaPesquisas, setListaPesquisas] = useState([]);
  const db = getFirestore(app);
  const pesquisaCollection = collection(db, 'pesquisas');
  const [filteredPesquisas, setFilteredPesquisas] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const q = query(pesquisaCollection);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pesquisas = [];
      snapshot.forEach((doc) => {
        pesquisas.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setListaPesquisas(pesquisas);
      setFilteredPesquisas(pesquisas);
    });
    return () => unsubscribe();
  }, []);


  // Função para filtrar as pesquisas com base no texto de pesquisa
  const handleSearch = (text) => {
    setSearchText(text);

    if (text) {
      const filtered = listaPesquisas.filter((novaPesquisa) =>
        novaPesquisa.nome.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPesquisas(filtered);
    } else {
      setFilteredPesquisas(listaPesquisas);
    }
  };

  const itemPesquisa = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={
        () => {
          dispatch(reducerSetPesquisa({id: item.id , nome: item.nome}))
          props.navigation.navigate('Ações da Pesquisa')
        }
      }
    >
      {item.imagem ? <Image source={{ uri: item.imagem }} style={styles.cardImage} /> : null}
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.subtitle}>{item.data}</Text>

    </TouchableOpacity>
  );


  return (
    <View style={styles.body}>
      <View style={styles.viewTextInput}>
        <Image source={require('../images/pesquisa.png')} />
        <TextInput style={styles.textInput} 
          placeholder='Insira o termo da busca...' 
          value={searchText}
          onChangeText={handleSearch}
          />
      </View>
      <View style={styles.containerCards}>
        <FlatList
          data={filteredPesquisas}
          renderItem={itemPesquisa}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Pressable onPress={goToNovaPesquisa} style={styles.buttonNovaPesquisa}>
        <Text style={styles.buttonNovaPesquisaText}>Nova Pesquisa</Text>
      </Pressable>
    </View>
  );
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
    width: '90%',
    height: 40,
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular'
  },
  buttonNovaPesquisa: {
    width: '90%',
    height: 30,
    backgroundColor: '#37BD6D',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonNovaPesquisaText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20
  },
  containerCards: {
    flex: 1,
    flexDirection: 'row', // Garanta que o container suporte layout horizontal
    marginTop: 10,
    width: '80%', 
  },

  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
    width: 150, // Ajuste conforme necessário
  },

  cardImage: {
    width: 100,
    height: 70,
    margin: 12
  },
  title: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    width: 140,
    fontFamily: 'AveriaLibre-Regular',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular'
  }
});

export default Home;
