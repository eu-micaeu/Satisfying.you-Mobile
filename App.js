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
import NovaPesquisa from "./src/screens/NovaPesquisa";
import Relatorio from "./src/screens/Relatorio";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const App = () => {

    return (

      <Provider store={store}>

        <NavigationContainer>

          <Stack.Navigator

            initialRouteName="Login"

            screenOptions={{
              headerTintColor: '#573FBA',
              headerStyle: {backgroundColor: '#2B1D62'},
              headerTitleStyle: {fontFamily: 'AveriaLibre-Bold', color: '#fff'},
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

            <Stack.Screen 
              name="Modificar Pesquisa" 
              component={ModificarPesquisa}
            />

            <Stack.Screen 
            name="Home" 
            component={Home} 
            />

            <Stack.Screen
              name="Drawer"
              component={Drawer}
              options={{headerShown: false}}
            />

            <Stack.Screen 
              name="Ações da Pesquisa"
              component={AcoesPesquisa} 
            />
            <Stack.Screen 
              name="Nova Conta" 
              component={NovaConta} 
            />
            <Stack.Screen 
              name="Recuperar Senha"
              component={RecuperarSenha} 
            />

            <Stack.Screen
              name="Coleta"
              component={Coleta}
            />

            <Stack.Screen 
              name="Nova Pesquisa"
              component={NovaPesquisa} 
            />

            <Stack.Screen 
              name="Relatório" 
              component={Relatorio} 
            />

          </Stack.Navigator>

        </NavigationContainer>

      </Provider>

    );

}

export default App;