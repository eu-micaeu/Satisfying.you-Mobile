import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Agradecimentos = (props) => {

  useEffect(() => {
    const timer = setTimeout(() => {

      props.navigation.navigate('Coleta')

    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (

    <View style={styles.body}>

      <Text style={styles.text}>

        Obrigado por participar da pesquisa!
        {"\n"}
        {"\n"}
        Aguardamos você no próximo ano!

      </Text>

    </View>

  );

};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#382474',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
  },

});

export default Agradecimentos;
