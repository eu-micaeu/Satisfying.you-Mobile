import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Login = (props) => {

  const goToAgradecimentos = () => {

    props.navigation.navigate('Agradecimentos')

  }

  const goToModificarPesquisa = () => {
      
      props.navigation.navigate('ModificarPesquisa')
  
    }

  return (

    <View>
      
      <Button onPress={goToAgradecimentos}>Ir para Agradecimentos</Button>

      <Button onPress={goToModificarPesquisa}>Ir para ModificarPesquisa</Button>

    </View>

  )

}


export default Login;