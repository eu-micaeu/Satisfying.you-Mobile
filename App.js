import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Agradecimentos from "./src/screens/Agradecimentos";
import ModificarPesquisa from "./src/screens/ModificarPesquisa";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import NovaConta from ".src/screens/NovaConta"

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                                screenOptions={{ 
                                headerTintColor: '#FFFFFF', 
                                headerStyle: { backgroundColor: '#2B1D62' },
                                headerTitleStyle:{fontFamily:'AveriaLibre-Bold'}
                }}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Agradecimentos" component={Agradecimentos}/>
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa}/>
                <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa}/>
                <Stack.Screen name='NovaConta' component={NovaConta}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;