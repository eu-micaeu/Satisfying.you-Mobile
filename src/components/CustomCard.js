import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

const CustomCard = ({ onPress, capa, nome, data }) => {
  return (
    <Pressable onPress={onPress}>
      <Card style={styles.card}>
        <View style={styles.cardImageContainer}>
          <Card.Cover source={capa} style={styles.cardImage} />
        </View>
        <Card.Content>
          <Text style={styles.title}>{nome}</Text>
          <Text style={styles.subtitle}>{data}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
  },
  cardImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardImage: {
    width: 70,
    height: 70,
    margin: 12
  },
  title: {
    color: 'blue',
    fontSize: 20,
    width: 140,
    fontFamily: 'AveriaLibre-Regular',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular'
  }
});

export default CustomCard;