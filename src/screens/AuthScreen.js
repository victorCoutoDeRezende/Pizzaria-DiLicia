import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { styles as globalStyles } from '../styles/styles';

export default function AuthScreen({ onLogin, onSignup, loading, error }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (isLogin) {
      onLogin(username, password);
    } else {
      onSignup(username, password);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🍕 Pizzaria DiLicia</Text>
      <Text style={styles.title}>{isLogin ? 'Entrar na sua Conta' : 'Criar Nova Conta'}</Text>

      <TextInput
        style={[globalStyles.input, styles.inputField]}
        placeholder="Usuário"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={[globalStyles.input, styles.inputField]}
        placeholder="Senha"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      {error && <Text style={styles.errorText}>{error}</Text>}

      {loading ? (
        <ActivityIndicator size="large" color="#ffb347" style={{ marginTop: 20 }} />
      ) : (
        <TouchableOpacity style={[globalStyles.buyButton, styles.inputField]} onPress={handleSubmit}>
          <Text style={globalStyles.buyButtonText}>{isLogin ? 'Entrar' : 'Registar'}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.switchButton}>
        <Text style={styles.switchText}>
          {isLogin ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Entre'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: { ...globalStyles.logo, fontSize: 32, marginBottom: 10 },
  title: { ...globalStyles.label, fontSize: 20, marginBottom: 20 },

  inputField: {
    width: '90%',
  },
  switchButton: { marginTop: 15 },
  switchText: { color: '#ffb347', fontSize: 14 },
  errorText: { color: '#dc3545', marginBottom: 10, fontSize: 14 },
});
