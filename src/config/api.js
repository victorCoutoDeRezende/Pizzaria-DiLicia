import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@PizzariaApp:users';
const PEDIDOS_KEY = '@PizzariaApp:pedidos';

export const initDatabase = async () => {
  try {
    const users = await AsyncStorage.getItem(USERS_KEY);
    const pedidos = await AsyncStorage.getItem(PEDIDOS_KEY);
    if (users === null) {
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify([]));
    }
    if (pedidos === null) {
      await AsyncStorage.setItem(PEDIDOS_KEY, JSON.stringify([]));
    }
  } catch (e) {
    console.error('Falha ao inicializar o banco de dados', e);
  }
};

export const apiLogin = async (username, password) => {
  const usersJson = await AsyncStorage.getItem(USERS_KEY);
  const users = JSON.parse(usersJson);
  return users.find(u => u.username === username && u.password === password) || null;
};

export const apiSignup = async (username, password) => {
  const usersJson = await AsyncStorage.getItem(USERS_KEY);
  let users = JSON.parse(usersJson);
  
  if (users.some(u => u.username === username)) {
    throw new Error('Este nome de utilizador já existe.');
  }
  
  const newUser = { id: Date.now(), username, password };
  users.push(newUser);
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  return newUser;
};

export const apiGetOrders = async (userId) => {
  const pedidosJson = await AsyncStorage.getItem(PEDIDOS_KEY);
  const pedidos = JSON.parse(pedidosJson);
  return pedidos.filter(p => p.userId === userId);
};

export const apiCreateOrder = async (newOrder) => {
  const pedidosJson = await AsyncStorage.getItem(PEDIDOS_KEY);
  let pedidos = JSON.parse(pedidosJson);
  const orderWithId = { ...newOrder, id: Date.now() };
  pedidos.push(orderWithId);
  await AsyncStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidos));
  return orderWithId;
};

export const apiUpdateOrder = async (orderId, updatedData) => {
  const pedidosJson = await AsyncStorage.getItem(PEDIDOS_KEY);
  let pedidos = JSON.parse(pedidosJson);
  const index = pedidos.findIndex(p => p.id === orderId);
  if (index !== -1) {
    pedidos[index] = updatedData;
    await AsyncStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidos));
  }
  return updatedData;
};

export const apiDeleteOrder = async (orderId) => {
  const pedidosJson = await AsyncStorage.getItem(PEDIDOS_KEY);
  let pedidos = JSON.parse(pedidosJson);
  const newPedidos = pedidos.filter(p => p.id !== orderId);
  await AsyncStorage.setItem(PEDIDOS_KEY, JSON.stringify(newPedidos));
  return { success: true };
};
