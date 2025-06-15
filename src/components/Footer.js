import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Pizzaria DiLicia. Todos os direitos reservados.
        </Text>
      </View>
    );
  }
}