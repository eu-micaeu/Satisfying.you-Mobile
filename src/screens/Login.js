import { View } from 'react-native'
import { Button } from 'react-native-paper'

const Login = (props) => {

  const goToAgradecimentos = () => {

    props.navigation.navigate('Agradecimentos')

  }

  return (

    <View>
      
      <Button title="Ir para Agradecimentos" onPress={goToAgradecimentos}>Ir para Agradecimentos</Button>

    </View>

  )

}


export default Login;