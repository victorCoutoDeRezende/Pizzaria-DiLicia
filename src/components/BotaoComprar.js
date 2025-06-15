import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default class BotaoComprar extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buyButton} onPress={this.props.onPress}>
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>
    );
  }
}
