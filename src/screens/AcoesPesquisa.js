import { View, Text, Pressable, Image } from 'react-native';

const AcoesPesquisa = (props) => {

  goToRelatorio = () => {
    const id = props.route.params.id;
    const nome = props.route.params.nome;
    props.navigation.navigate('Relatório', { id: id, nome: nome } );
  }

  goToColeta = () => {
    
  }

  goToModificar = () => {
    const id = props.route.params.id;
    props.navigation.navigate('Modificar Pesquisa', { id: id });
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
            <Text style={styles.text}>Coletar Dados</Text>
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
    justifyContent: 'center',
  },

  columnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  itemContainer: {
    backgroundColor: '#312464',
    padding: 20,
    width: 120,
    alignItems: 'center',
    margin: 8,
  },

  image: {
    width: 50,
    height: 50,
    marginBottom: 10
  },

  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'AveriaLibre-Regular',
  }

};

export default AcoesPesquisa;

