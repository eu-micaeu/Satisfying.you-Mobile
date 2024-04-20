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
          <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{headerShown: false}}
          />
          <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
          <Stack.Screen name="NovaConta" component={NovaConta} />
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
          <Stack.Screen
            name="Coleta"
            component={Coleta}
          />
          <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
          <Stack.Screen name="Relatorio" component={Relatorio} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;