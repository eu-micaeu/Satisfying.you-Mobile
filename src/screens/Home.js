import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { TextInput, Card } from 'react-native-paper';

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

  return (
    <View style={styles.body}>
      <View style={styles.viewTextInput}>
        <Image source={require('../images/pesquisa.png')} />
        <TextInput style={styles.textInput} placeholder='Insira o termo da busca...' />
      </View>
      <Pressable onPress={goToAcoesPesquisa} style={styles.containerCards}>
        {cards.map((card, index) => (
          <Pressable key={index} onPress={goToAcoesPesquisa}>
            <Card style={styles.card}>
              <View style={styles.cardImageContainer}>
                <Card.Cover source={card.capa} style={styles.cardImage} />
              </View>
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