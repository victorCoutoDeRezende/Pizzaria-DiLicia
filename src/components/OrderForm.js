import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/styles';

const OrderForm = ({ formState, onFormChange, onSubmit }) => {
  return (
    <View style={styles.formulario}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#888"
        value={formState.nome}
        onChangeText={(text) => onFormChange('nome', text)}
      />
      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu endereço"
        placeholderTextColor="#888"
        value={formState.endereco}
        onChangeText={(text) => onFormChange('endereco', text)}
      />
      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu telefone"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={formState.telefone}
        onChangeText={(text) => onFormChange('telefone', text)}
      />
      <Text style={styles.label}>Forma de pagamento:</Text>
      <Picker
        selectedValue={formState.pagamento}
        style={styles.picker}
        dropdownIconColor="#fff"
        onValueChange={(itemValue) => onFormChange('pagamento', itemValue)}
      >
        <Picker.Item label="Dinheiro" value="Dinheiro" />
        <Picker.Item label="Cartão de Crédito" value="Cartão de Crédito" />
        <Picker.Item label="Pix" value="Pix" />
      </Picker>

      <TouchableOpacity style={styles.buyButton} onPress={onSubmit}>
        <Text style={styles.buyButtonText}>Confirmar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderForm;
