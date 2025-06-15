import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderItem from '../components/OrderItem';
import { useOrders } from '../hooks/useOrders';
import { styles as globalStyles } from '../styles/styles';

export default function PedidosScreen({ onNavigate, currentUser, onLogout }) {
  const [botaoAnimado, setBotaoAnimado] = useState(null);

  const { orders, loading, updateOrder, deleteOrder } = useOrders(currentUser.id);

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#ffb347" />;
    }
    if (orders.length === 0) {
      return <Text style={styles.subtitle}>Ainda não fez nenhum pedido.</Text>;
    }
    return (
      <FlatList
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <OrderItem
            order={item}
            onUpdate={updateOrder}
            onDelete={deleteOrder}
          />
        )}
        style={{ width: '100%' }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        botaoAnimado={botaoAnimado}
        setBotaoAnimado={setBotaoAnimado}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Os Meus Pedidos</Text>
        {renderContent()}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
    contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212'
  },
  title: {
    ...globalStyles.label,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  subtitle: {
    ...globalStyles.pizzaInfoText,
    fontSize: 16,
    textAlign: 'center',
    color: '#ccc',
  }
});
