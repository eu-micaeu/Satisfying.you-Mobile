import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Agradecimentos from "./src/screens/Agradecimentos";

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Agradecimentos" component={Agradecimentos}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;