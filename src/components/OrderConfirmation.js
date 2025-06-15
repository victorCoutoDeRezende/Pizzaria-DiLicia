import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const OrderConfirmation = ({ orderDetails, onNewOrder }) => {
  return (
    <View style={styles.confirmacao}>
      <Text style={styles.pizzaInfoTitle}>✅ Pedido Confirmado!</Text>
      <Text style={styles.pizzaInfoText}>Estimativa de entrega: 35-45 minutos</Text>
      <Text style={styles.pizzaInfoText}>Sabor: {orderDetails.sabor}</Text>
      <Text style={styles.pizzaInfoText}>Tamanho: {orderDetails.tamanho}</Text>
      <Text style={styles.pizzaInfoText}>Preço: R$ {String(orderDetails.preco).replace('.', ',')}</Text>
      <Text style={styles.pizzaInfoText}>Método de Pagamento: {orderDetails.pagamento}</Text>
      <TouchableOpacity
        style={[styles.buyButton, { marginTop: 10 }]}
        onPress={onNewOrder}
      >
        <Text style={styles.buyButtonText}>Fazer novo pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderConfirmation;
