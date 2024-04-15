import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Login = (props) => {

  const goToAgradecimentos = () => {

    props.navigation.navigate('Agradecimentos')

  }

  const goToModificarPesquisa = () => {
      
      props.navigation.navigate('ModificarPesquisa')
  
    }

  const goToHome = () => {

    props.navigation.navigate('Home') 
  
  }

  return (

    <View>
      
      <Button onPress={goToAgradecimentos}>Ir para Agradecimentos</Button>

      <Button onPress={goToModificarPesquisa}>Ir para ModificarPesquisa</Button>

      <Button onPress={goToHome}>Ir para Home</Button>

    </View>

  )

}


export default Login;