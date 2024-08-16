import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useSelector } from 'react-redux';

const Relatorio = (props) => {
    const id = useSelector((state)=>state.pesquisa.id);
    const [series, setSeries] = useState([0, 0, 0, 0, 0]); 
    const [isDataLoaded, setIsDataLoaded] = useState(false); 
    const widthAndHeight = 250;
    const sliceColor = ['#F1CE7E', '#6994FE', '#5FCDA4', '#EA7288', '#53D8D8'];

    useEffect(() => {
        const fetchData = async () => {
            const pesquisaRef = doc(db, "pesquisas", id); 
            const pesquisaSnap = await getDoc(pesquisaRef);
            
            if (pesquisaSnap.exists()) {
                const data = pesquisaSnap.data();
                const newSeries = [
                    data.avaliacaoE || 0,
                    data.avaliacaoB || 0,
                    data.avaliacaoN || 0,
                    data.avaliacaoR || 0,
                    data.avaliacaoP || 0,
                ];
                
                setSeries(newSeries);
            } else {
                console.log("Documento não encontrado!");
            }
            setIsDataLoaded(true); 
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {isDataLoaded ? (
                series.every(value => value === 0) ? (
                    <Text style={styles.textAviso}>Sem avaliações...</Text>
                ) : (
                    <PieChart 
                        widthAndHeight={widthAndHeight} 
                        series={series} 
                        sliceColor={sliceColor} 
                        coverFill="#FFA500" 
                        style={styles.grafico} 
                    />
                )
            ) : (
                <Text style={styles.text}>Carregando dados...</Text> 
            )}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#382474',
        justifyContent: 'center',
    },
    grafico: {
        margin: 15,
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
        margin: 10,
        flexDirection: 'column',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        marginLeft: 10,
    },
    textAviso:{

        color: '#FFFFFF',
        marginTop: 100,

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
