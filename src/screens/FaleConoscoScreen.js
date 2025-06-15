import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { styles as globalStyles } from '../styles/styles';

export default function FaleConoscoScreen({ onNavigate, onLogout }) {
  const [botaoAnimado, setBotaoAnimado] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const emailTemplate = `
      =================================
      NOVA MENSAGEM DE CONTATO
      =================================
      De: ${nome}
      Email: ${email}
      ---------------------------------
      Mensagem:
      ${mensagem}
      ---------------------------------
    `;

    Alert.alert(
      'Mensagem Enviada!',
      'Obrigado por entrar em contato. Sua mensagem foi recebida com sucesso.',
      [{ text: 'OK', onPress: () => {
          setNome('');
          setEmail('');
          setMensagem('');
      }}]
    );
    console.log(emailTemplate);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <Header
        botaoAnimado={botaoAnimado}
        setBotaoAnimado={setBotaoAnimado}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Fale Conosco</Text>
        <Text style={styles.subtitle}>Tem alguma dúvida, crítica ou sugestão? Envie para nós!</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Seu nome"
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[globalStyles.input, styles.textArea]}
          placeholder="Sua mensagem..."
          placeholderTextColor="#888"
          value={mensagem}
          onChangeText={setMensagem}
          multiline={true}
          numberOfLines={6}
        />

        <TouchableOpacity style={globalStyles.buyButton} onPress={handleEnviar}>
          <Text style={globalStyles.buyButtonText}>Enviar Mensagem</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    ...globalStyles.label,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    ...globalStyles.pizzaInfoText,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#ccc',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  }
});
