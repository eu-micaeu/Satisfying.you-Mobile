import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

class Relatorio extends Component {
    render() {
        const widthAndHeight = 250;
        const series = [235, 321, 123, 322, 143, 132];
        const sliceColor = ['#F1CE7E', '#6994FE', '#5FCDA4', '#EA7288', '#53D8D8', '#808080'];

        return (
            <View style={styles.container}>
                <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} coverFill="#FFA500" />
                <View style={styles.containerLegendas}>
                    <View style={styles.columnContainer}>
                        <View style={styles.rowContainer}>
                            <View style={styles.quadradoAmarelo}></View><Text style={styles.text}>Excelente</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.quadradoAzul}></View><Text style={styles.text}>Bom</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.quadradoVerde}></View><Text style={styles.text}>Neutro</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.quadradoVermelho}></View><Text style={styles.text}>Ruim</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <View style={styles.quadradoCiano}></View><Text style={styles.text}>Péssimo</Text>
                        </View>

                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#382474',
        justifyContent: 'center',
    },

    containerLegendas: {
        flexDirection: 'row',
        margin: 10,
        width: 200,
        height: 250,
        justifyContent: 'space-between',
    },

    rowContainer: {
        flexDirection: 'row',
        margin: 10,
    },

    columnContainer: {
        margin: 40,
        flexDirection: 'column',
    },

    text: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        marginLeft: 10,
    },
    title: {
        fontSize: 24,
        margin: 10,
    },

    quadradoAmarelo: {
        backgroundColor: '#F1CE7E',
        width: 20,
        height: 20,
    },

    quadradoAzul: {
        backgroundColor: '#6994FE',
        width: 20,
        height: 20,
    },

    quadradoVerde: {
        backgroundColor: '#5FCDA4',
        width: 20,
        height: 20,
    },

    quadradoVermelho: {
        backgroundColor: '#EA7288',
        width: 20,
        height: 20,
    },

    quadradoCiano: {
        backgroundColor: '#53D8D8',
        width: 20,
        height: 20,
    },


});

export default Relatorio;
