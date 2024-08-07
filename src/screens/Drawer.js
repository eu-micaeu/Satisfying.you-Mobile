import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Home from './Home';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    const email = useSelector((state)=>state.login.email);

    return (

        <DrawerNavigator.Navigator drawerContent={(props) => (

            <View style={{ flex: 1 }}>

                <Text style={styles.usuario}>{email}</Text>

                <View style={styles.linhaSeparadora}/>

                <TouchableOpacity onPress={() => {props.navigation.navigate('Home');}} style={styles.botaoCima}>

                <Image source={require('../images/paper.png')} style={styles.icone} />

                    <Text style={styles.textTelas}>Pesquisas</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => {props.navigation.navigate('Login');}} style={styles.botaoBaixo}>
                    <Image source={require('../images/logout.png')} style={styles.icone} />
                    <Text style={styles.textTelas}>Sair</Text>
                </TouchableOpacity>
            </View>

        )}screenOptions={{drawerStyle: {backgroundColor: '#2B1D62'}, drawerLabelStyle: {color: '#FFFFFF'}, headerTitle: '', headerStyle: {backgroundColor: '#2B1D62'}, headerTintColor: '#FFFFFF'}}>
        
        <DrawerNavigator.Screen name='Home' component={Home} />

        </DrawerNavigator.Navigator>

    )
}

const styles = StyleSheet.create({
    usuario: {
        color: '#FFFFFF',
        fontSize: 21,
        alignItems: 'center',
        padding: 30,
        paddingBottom: 15,
        fontFamily: 'AveriaLibre-Regular' 
    },
    linhaSeparadora: {
        height: 2,
        backgroundColor: '#FFFFFF',
        width: '80%',
        alignSelf: 'center',
    },
    textTelas: {
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF', 
        fontSize: 25,
        fontFamily:'AveriaLibre-Regular'
    },
    botaoCima: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        paddingTop: 20,
    },
    botaoBaixo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        marginTop: 'auto',
    },
    icone: {
        marginRight: 10,
        width: 30,
        height: 30,
    }
});

export default Drawer;
