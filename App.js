import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Agradecimentos from "./src/screens/Agradecimentos";
import ModificarPesquisa from "./src/screens/ModificarPesquisa";
import Home from "./src/screens/Home";
import Drawer from "./src/screens/Drawer";

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Agradecimentos" component={Agradecimentos}/>
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa}/>
                <Stack.Screen name="Drawer" component={Drawer}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;