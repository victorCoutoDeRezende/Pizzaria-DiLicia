import { useState } from 'react';
import { Alert } from 'react-native';
import { apiCreateOrder } from '../config/api';
import { pizzas as pizzaData } from '../data/pizzas';

const tamanhos = ['Pequena', 'Média', 'Grande', 'Gigante'];
const multiplicadoresTamanho = [1, 1.2, 1.5, 1.8];

const getInitialState = () => ({
  categoriaSelecionada: 'Tradicional',
  indiceTamanho: 1,
  pizzaSelecionada: null,
  mostrarFormulario: false,
  pedidoConfirmado: false,
  nome: '',
  endereco: '',
  telefone: '',
  pagamento: 'Dinheiro',
});

export const usePizzaOrder = (userId) => {
  const [state, setState] = useState(getInitialState());

  const resetarPedido = () => setState(getInitialState());

  const handleStateChange = (field, value) => {
    setState(prevState => ({ ...prevState, [field]: value }));
  };

  const getPrecoFinal = () => {
    if (!state.pizzaSelecionada) return 0;
    const precoBase = state.pizzaSelecionada.preco;
    const multiplicador = multiplicadoresTamanho[state.indiceTamanho];
    return (precoBase * multiplicador).toFixed(2);
  };

  const confirmarPedido = async () => {
    const { pizzaSelecionada, indiceTamanho, nome, endereco, telefone, pagamento } = state;
    if (!nome || !endereco || !telefone) {
      return Alert.alert('Erro', 'Por favor, preencha todos os campos do formulário.');
    }

    const precoFinal = getPrecoFinal();
    const novoPedido = {
      userId,
      cliente: { nome, endereco, telefone },
      pizza: {
        sabor: pizzaSelecionada.name,
        tamanho: tamanhos[indiceTamanho],
        preco: parseFloat(precoFinal),
      },
      pagamento,
      status: 'Recebido',
      data: new Date().toISOString(),
    };

    try {
      await apiCreateOrder(novoPedido);
      handleStateChange('pedidoConfirmado', true);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível guardar o pedido.');
    }
  };
  
  const pizzasFiltradas = pizzaData.filter(p => p.categoria === state.categoriaSelecionada);

  return {
    ...state,
    pizzasFiltradas,
    tamanhos,
    handleStateChange,
    getPrecoFinal,
    confirmarPedido,
    resetarPedido,
  };
};
