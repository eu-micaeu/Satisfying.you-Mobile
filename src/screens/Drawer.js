import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return (
         <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name='Pesquisas' component={Login}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;