import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default class Header extends Component {
  handleBotaoPress = (botao, screen) => {
    const { setBotaoAnimado, onNavigate } = this.props;
    
    setBotaoAnimado(botao);
    setTimeout(() => setBotaoAnimado(null), 1000);

    if (onNavigate && screen) {
      onNavigate(screen);
    }
  };

  render() {
    const { botaoAnimado, onNavigate, onLogout } = this.props;
    
    const botoes = [
      { label: 'Fale Conosco', screen: 'fale_conosco' },
      { label: 'Restaurantes', screen: 'restaurantes' },
      { label: 'Pedidos', screen: 'pedidos' },
      { label: 'Sair', screen: 'logout' },
    ];

    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate && onNavigate('home')}>
          <Text style={styles.logo}>🍕 Pizzaria DiLicia</Text>
        </TouchableOpacity>
        <View style={styles.menu}>
          {botoes.map((botao, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (botao.screen === 'logout' && onLogout) {
                  onLogout();
                } else {
                  this.handleBotaoPress(botao.label, botao.screen);
                }
              }}
              style={[
                styles.headerButtonTouchable,
                botaoAnimado === botao.label && styles.headerButtonAnimado,
              ]}
            >
              <Text style={styles.headerButtonText}>{botao.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
