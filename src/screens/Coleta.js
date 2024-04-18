
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const Coleta = (props) => {
    const goToAgraecimento = () => {
        props.navigation.navigate('Agradecimentos')
      }

    return (
        <View style={styles.body}>
          <Text style={styles.titulo}> O que você achou do carnaval de 2024? </Text>
          <TouchableOpacity onPress={goToAgraecimento}>
                <View style={styles.iconeContainer}>
                    <Image source={require('../images/laugh.png')} style={styles.icone} />
                    <Text style={styles.text}>Excelente</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToAgraecimento}>
                <View style={styles.iconeContainer}>
                    <Image source={require('../images/smile.png')} style={styles.icone} />
                    <Text style={styles.text}>Bom</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToAgraecimento}>
                <View style={styles.iconeContainer}>
                    <Image source={require('../images/meh.png')} style={styles.icone} />
                    <Text style={styles.text}>Neutro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToAgraecimento}>
                <View style={styles.iconeContainer}>
                    <Image source={require('../images/sad.png')} style={styles.icone} />
                    <Text style={styles.text}>Ruim</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToAgraecimento}>
                <View style={styles.iconeContainer}>
                    <Image source={require('../images/pain.png')} style={styles.icone} />
                    <Text style={styles.text}>Péssimo</Text>
                </View>
            </TouchableOpacity>
          
          
          
          
        </View>
    )
}

const styles = StyleSheet.create({

    body: {
      backgroundColor:'#372775',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
  
    titulo:{
      fontSize:30,
      color:'#FFFF',
      textAlign:'center',
      fontFamily:'AveriaLibre-Regular'
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