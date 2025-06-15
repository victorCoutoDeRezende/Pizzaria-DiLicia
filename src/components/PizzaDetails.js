import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles';

const PizzaDetails = ({ pizza, tamanho, precoFinal }) => {
  if (!pizza) {
    return null;
  }

  return (
    <View>
      <Image source={{ uri: pizza.imageUrl }} style={styles.pizzaImage} />
      <Text style={styles.pizzaInfoTitle}>Ingredientes:</Text>
      <Text style={styles.pizzaInfoText}>{pizza.ingredientes}</Text>
      <Text style={styles.pizzaInfoTitle}>Preço:</Text>
      <Text style={styles.pizzaInfoText}>
        R$ {String(precoFinal).replace('.', ',')} - Tamanho: {tamanho}
      </Text>
    </View>
  );
};

export default PizzaDetails;
