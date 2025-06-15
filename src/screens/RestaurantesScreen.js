import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapaRestaurante from '../components/MapaRestaurante';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { styles as globalStyles } from '../styles/styles';

const endereco = "R. Eduardo Luiz Gomes, 134 - Morro do Estado, Niterói - RJ, 24020-340";

export default function RestaurantesScreen({ onNavigate, onLogout }) {
  const [botaoAnimado, setBotaoAnimado] = useState(null);

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <Header
        botaoAnimado={botaoAnimado}
        setBotaoAnimado={setBotaoAnimado}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />
      <View style={styles.container}>
        <Text style={styles.title}>A Nossa Unidade</Text>
        
        <View style={styles.mapContainer}>
          <MapaRestaurante />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Pizzaria DiLicia - Unidade Niterói</Text>
          <Text style={styles.infoText}>{endereco}</Text>
          <Text style={styles.infoText}>Horário de Funcionamento:</Text>
          <Text style={styles.infoText}>Terça a Domingo: 18:00 - 23:30</Text>
        </View>

      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  title: {
    ...globalStyles.label,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#fff',
  },
  mapContainer: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#1e1e1e',
  },
  infoContainer: {
    ...globalStyles.confirmacao,
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
  },
  infoTitle: {
    ...globalStyles.pizzaInfoTitle,
    fontSize: 18,
    marginBottom: 8,
  },
  infoText: {
    ...globalStyles.pizzaInfoText,
    fontSize: 14,
    lineHeight: 20,
  }
});
