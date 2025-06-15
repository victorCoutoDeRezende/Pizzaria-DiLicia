import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { usePizzaOrder } from '../hooks/usePizzaOrder';
import { styles } from '../styles/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuSelection from '../components/MenuSelection';
import PizzaDetails from '../components/PizzaDetails';
import OrderForm from '../components/OrderForm';
import OrderConfirmation from '../components/OrderConfirmation';
import BotaoComprar from '../components/BotaoComprar';

export default function HomeScreen({ onNavigate, currentUser, onLogout }) {
  const {
    categoriaSelecionada,
    indiceTamanho,
    pizzaSelecionada,
    mostrarFormulario,
    pedidoConfirmado,
    nome,
    endereco,
    telefone,
    pagamento,
    pizzasFiltradas,
    tamanhos,
    handleStateChange,
    getPrecoFinal,
    confirmarPedido,
    resetarPedido,
  } = usePizzaOrder(currentUser.id);

  const [botaoAnimado, setBotaoAnimado] = useState(null);
  const precoFinal = getPrecoFinal();

  return (
    <View style={{ flex: 1 }}>
      <Header
        botaoAnimado={botaoAnimado}
        setBotaoAnimado={setBotaoAnimado}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.main}>
          {pedidoConfirmado ? (
            <OrderConfirmation
              orderDetails={{
                sabor: pizzaSelecionada.name,
                tamanho: tamanhos[indiceTamanho],
                preco: precoFinal,
                pagamento: pagamento,
              }}
              onNewOrder={resetarPedido}
            />
          ) : (
            <>
              <MenuSelection
                categoria={categoriaSelecionada}
                onCategoriaChange={(value) => {
                  handleStateChange('categoriaSelecionada', value);
                  handleStateChange('pizzaSelecionada', null);
                }}
                indiceTamanho={indiceTamanho}
                onTamanhoChange={(value) => handleStateChange('indiceTamanho', value)}
                tamanhos={tamanhos}
                pizzas={pizzasFiltradas}
                onPizzaSelect={(pizza) => handleStateChange('pizzaSelecionada', pizza)}
              />
              {pizzaSelecionada && (
                <PizzaDetails
                  pizza={pizzaSelecionada}
                  tamanho={tamanhos[indiceTamanho]}
                  precoFinal={precoFinal}
                />
              )}
              {mostrarFormulario ? (
                <OrderForm
                  formState={{ nome, endereco, telefone, pagamento }}
                  onFormChange={handleStateChange}
                  onSubmit={confirmarPedido}
                />
              ) : pizzaSelecionada && (
                <BotaoComprar onPress={() => handleStateChange('mostrarFormulario', true)} />
              )}
            </>
          )}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
