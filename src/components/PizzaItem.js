import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default class PizzaItem extends Component {
  render() {
    const { pizza, onSelect } = this.props;
    return (
      <TouchableOpacity onPress={() => onSelect(pizza)} style={styles.pizzaItem}>
        <Text style={styles.pizzaText}>{pizza.name}</Text>
      </TouchableOpacity>
    );
  }
}
