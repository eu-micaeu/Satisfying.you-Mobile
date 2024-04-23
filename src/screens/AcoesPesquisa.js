import { View, Text, Pressable, Image } from 'react-native';

const AcoesPesquisa = (props) => {

  goToRelatorio = () => {
    props.navigation.navigate('Relatório');
  }

  goToColeta = () => {
    props.navigation.navigate('Coleta');
  }

  goToModificar = () => {
    props.navigation.navigate('Modificar Pesquisa');
  }

  goToHome = () => {
    props.navigation.navigate('Home');
  }

  return (
      <View style={styles.container}>
        <View style={styles.columnContainer}>
          <Pressable style={styles.itemContainer} onPress={goToModificar}>
            <Image source={require('../images/Modificar.png')} style={styles.image} />
            <Text style={styles.text}>Modificar</Text>
          </Pressable>
          <Pressable style={styles.itemContainer} onPress={goToColeta}>
            <Image source={require('../images/ColetarDados.png')} style={styles.image} />
            <Text style={styles.text}>ColetarDados</Text>
          </Pressable>
          <Pressable style={styles.itemContainer} onPress={goToRelatorio}>
            <Image source={require('../images/Relatorio.png')} style={styles.image} />
            <Text style={styles.text}>Relatório</Text>
          </Pressable>
        </View>
      </View>
  );
};

const styles = {

  container: {
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
  },

  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  itemContainer: {
    backgroundColor: '#312464',
    padding: 30,
    width: 180,
    alignItems: 'center',
    margin: 30,
  },

  image: {
    width: 70,
    height: 70,
    marginBottom: 10
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
  }

};

export default AcoesPesquisa;

