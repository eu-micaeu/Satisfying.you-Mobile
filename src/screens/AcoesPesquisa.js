import { View, Text, Pressable, Image } from 'react-native';

const AcoesPesquisa = (props) => {

  goToRelatorio = () => {
    props.navigation.navigate('Relatorio');
  }

  goToColeta = () => {
    props.navigation.navigate('Coleta');
  }

  goToModificar = () => {
    props.navigation.navigate('ModificarPesquisa');
  }

  goToHome = () => {
    props.navigation.navigate('Home');
  }

  return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Pressable onPress={goToHome}>
            <Image
              style={styles.arrow}
              source={require('../images/Vector.png')}
            />
          </Pressable>
          <Text style={styles.title}>Ações da Pesquisa</Text>
        </View>
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

