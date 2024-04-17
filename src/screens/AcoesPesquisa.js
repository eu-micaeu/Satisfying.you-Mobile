import { View, Text, Pressable, Image } from 'react-native';

const AcoesPesquisa = (props) => {
  return (
    /*  <View style={styles.top}>
            <Pressable>
                <Image
                style={styles.arrow}
                source={require('../images/Vector.png')}
                />
            </Pressable>
            <Text style={styles.title}>Carnaval</Text>
        </View>  --  Em caso de uso futuro, toda esta parte vai abaixo do <> */
    <>
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <Pressable style={styles.itemContainer}>
          <Image source={require('../images/Modificar.png')} style={styles.image} />
          <Text style={styles.text}>Modificar</Text>
        </Pressable>
        <Pressable style={styles.itemContainer}>
          <Image source={require('../images/ColetarDados.png')} style={styles.image} />
          <Text style={styles.text}>ColetarDados</Text>
        </Pressable>
        <Pressable style={styles.itemContainer}>
          <Image source={require('../images/Relatorio.png')} style={styles.image} />
          <Text style={styles.text}>Relatório</Text>
        </Pressable>
      </View>
    </View>
    </> 
  );
};

const styles = {
  /* top: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#2B1D62',
  },
  arrow: {
    width: 20,
    height: 20,
    marginTop:6,
    marginRight: 20,
  }, */
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: { 
    flex: 1,
    backgroundColor: '#372775',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnContainer: {
    flexDirection: 'column',
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
    fontFamily: 'Averia Libre',
  }
};

export default AcoesPesquisa;

