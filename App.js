import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './src/styles/styles';
import { useAuth } from './src/hooks/useAuth';
import { initDatabase } from './src/config/api';

import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import PedidosScreen from './src/screens/PedidosScreen';
import FaleConoscoScreen from './src/screens/FaleConoscoScreen';
import RestaurantesScreen from './src/screens/RestaurantesScreen';

const MainApp = ({ currentUser, onLogout }) => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigate = (screen) => {
    if (screen) setCurrentScreen(screen);
  };

  const renderScreen = () => {
    const screenProps = {
      onNavigate: navigate,
      currentUser: currentUser,
      onLogout: onLogout,
    };
    switch (currentScreen) {
      case 'home':
        return <HomeScreen {...screenProps} />;
      case 'pedidos':
        return <PedidosScreen {...screenProps} />;
      case 'fale_conosco':
        return <FaleConoscoScreen {...screenProps} />;
      case 'restaurantes':
        return <RestaurantesScreen {...screenProps} />;
      default:
        return <HomeScreen {...screenProps} />;
    }
  };

  return renderScreen();
};

export default function App() {
  const { currentUser, loading, error, login, signup, logout } = useAuth();
  const [isDbReady, setIsDbReady] = useState(false);

  // Executa a inicialização da base de dados quando a app carrega
  useEffect(() => {
    const setup = async () => {
      await initDatabase();
      setIsDbReady(true);
    };
    setup();
  }, []);

  // Mostra um indicador de carregamento enquanto a base de dados é preparada
  if (!isDbReady) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#ffb347" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {currentUser ? (
        // Se o utilizador estiver autenticado, mostra a aplicação principal
        <MainApp currentUser={currentUser} onLogout={logout} />
      ) : (
        // Caso contrário, mostra a tela de autenticação
        <AuthScreen
          onLogin={login}
          onSignup={signup}
          loading={loading}
          error={error}
        />
      )}
    </View>
  );
}
