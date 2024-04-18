import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Agradecimentos from "./src/screens/Agradecimentos";
import ModificarPesquisa from "./src/screens/ModificarPesquisa";
import Home from "./src/screens/Home";
import Drawer from "./src/screens/Drawer";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import NovaConta from "./src/screens/NovaConta";
import RecuperarSenha from "./src/screens/RecuperarSenha";
import Coleta from "./src/screens/Coleta"

const Stack = createStackNavigator();

const App = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTintColor: '#FFFFFF',
            headerStyle: {backgroundColor: '#2B1D62'},
            headerTitleStyle: {fontFamily: 'AveriaLibre-Bold'},
          }}>
          <Stack.Screen 
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
          <Stack.Screen 
            name="Agradecimentos" 
            component={Agradecimentos} 
            options={{headerShown: false}}
          />
          <Stack.Screen name="Modificar pesquisa" component={ModificarPesquisa} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{headerShown: false}}
          />
          <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
          <Stack.Screen name="Nova Conta" component={NovaConta} />
          <Stack.Screen name="Recuperação de Senha" component={RecuperarSenha} />
          <Stack.Screen
            name="Coleta"
            component={Coleta}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;