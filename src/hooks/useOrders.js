import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { apiGetOrders, apiUpdateOrder, apiDeleteOrder } from '../config/api';

export const useOrders = (userId) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = useCallback(async () => {
    if (!userId) return;
    try {
      setLoading(true);
      const data = await apiGetOrders(userId);
      setOrders(data);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar pedidos.');
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const updateOrder = async (orderId, updatedData) => {
    try {
      await apiUpdateOrder(orderId, updatedData);
      setOrders(prevOrders =>
        prevOrders.map(order => (order.id === orderId ? updatedData : order))
      );
    } catch (error) {
      Alert.alert('Erro', 'Falha ao atualizar o pedido.');
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await apiDeleteOrder(orderId);
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    } catch (error) {
      Alert.alert('Erro', 'Falha ao cancelar o pedido.');
    }
  };

  return { orders, loading, updateOrder, deleteOrder, fetchOrders };
};
