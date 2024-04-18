import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, Pressable } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const ModificarPesquisa = (props) => {

    goToHome = () => {
        props.navigation.navigate('Home');
    }

    return (

        <View style={styles.body}>

            <Pressable onPress={goToHome} style={styles.buttonCadastrar}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
            </Pressable>

        </View>

    );

};

const styles = StyleSheet.create({

    body: {
        backgroundColor: '#382474',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    buttonCadastrar: {
        marginTop: 60,
        width: 300,
        height: 50,
        backgroundColor: '#37BD6D'
    },

    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 25
    }

});

export default ModificarPesquisa;
