import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { TextInput, Card } from 'react-native-paper';

const Home = (props) => {

  goToNovaPesquisa = () => {
    props.navigation.navigate('Nova Pesquisa');
  }
  goToAcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa')
  }

  const cards = [
    {capa: require("../images/secomp.png"), nome: "SECOMP 2023", data: "10/10/2023"},
    {capa: require("../images/ubuntu.png"), nome: "UBUNTU 2022", data: "05/06/2022"}
  ]

  return (
    <View style={styles.body}>
      <View style={styles.viewTextInput}>
        <Image source={require('../images/pesquisa.png')}/>
        <TextInput style={styles.textInput} placeholder='Insira o termo da busca...'/>
      </View>
      <Pressable onPress={goToAcoesPesquisa} style={styles.containerCards}>
        {cards.map((card, index) => (
          <Pressable key={index} onPress={goToAcoesPesquisa}>
            <Card style={styles.card}>
              <Card.Cover source={card.capa} style={styles.cardImage} />
              <Card.Content>
                <Text style={styles.title}>{card.nome}</Text>
                <Text style={styles.subtitle}>{card.data}</Text>
              </Card.Content>
            </Card>
          </Pressable>
        ))}
      </Pressable>
      <Pressable onPress={goToNovaPesquisa} style={styles.buttonNovaPesquisa}>
          <Text style={styles.buttonNovaPesquisaText}>Nova Pesquisa</Text>
      </Pressable>
  </View>
      
  )
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#382474',
    flex: 1,
    alignItems: 'center',
  },

  viewTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textInput: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
    fontFamily: 'AveriaLibre-Regular'
  },

  buttonNovaPesquisa: {
    width: 300,
    height: 40,
    backgroundColor: '#37BD6D',
    justifyContent: 'center',
    marginTop: 10
  },

  buttonNovaPesquisaText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15
  },

  containerCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },

  card: {
    flexDirection: 'row',
    width: 180,
    height: 155,
    alignItems: 'center',
    margin: 5,
  },  

  cardImage: {
    width: 80,
    height: 80,
    margin: 12
  },

  title: {
    color: 'blue',
    fontSize: 20,
    fontFamily:'AveriaLibre-Regular',
  },
  
  subtitle: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular'
  }

});

export default Home;