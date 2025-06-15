import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles as globalStyles } from '../styles/styles';
import { pizzas } from '../data/pizzas';


const tamanhosDisponiveis = ['Pequena', 'Média', 'Grande', 'Gigante'];
const multiplicadoresTamanho = [1, 1.2, 1.5, 1.8];
const saboresDisponiveis = pizzas.map(pizza => pizza.name);

const OrderItem = ({ order, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({ ...order });

  useEffect(() => {
    if (isEditing) {
      const pizzaInfo = pizzas.find(p => p.name === editableData.pizza.sabor);
      const tamanhoIndex = tamanhosDisponiveis.findIndex(t => t === editableData.pizza.tamanho);

      if (pizzaInfo && tamanhoIndex !== -1) {
        const precoBase = pizzaInfo.preco;
        const multiplicador = multiplicadoresTamanho[tamanhoIndex];
        const novoPreco = (precoBase * multiplicador).toFixed(2);

        setEditableData(prev => ({
          ...prev,
          pizza: {
            ...prev.pizza,
            preco: parseFloat(novoPreco),
          }
        }));
      }
    }
  }, [editableData.pizza.sabor, editableData.pizza.tamanho, isEditing]);


  const handleUpdate = () => {
    onUpdate(order.id, editableData);
    setIsEditing(false);
  };
  
  const handleCancelEdit = () => {
    setEditableData({ ...order });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setEditableData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setEditableData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <View style={styles.card}>
      {isEditing ? (
        <>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} value={editableData.cliente.nome} onChangeText={text => handleChange('cliente.nome', text)} />
          
          <Text style={styles.label}>Endereço:</Text>
          <TextInput style={styles.input} value={editableData.cliente.endereco} onChangeText={text => handleChange('cliente.endereco', text)} />
          
          <Text style={styles.label}>Telefone:</Text>
          <TextInput 
            style={styles.input} 
            value={editableData.cliente.telefone} 
            onChangeText={text => handleChange('cliente.telefone', text)}
            keyboardType="numeric"
          />
          
          <Text style={styles.label}>Sabor:</Text>
          <Picker
            selectedValue={editableData.pizza.sabor}
            style={globalStyles.picker}
            dropdownIconColor="#fff"
            onValueChange={(itemValue) => handleChange('pizza.sabor', itemValue)}
          >
            {saboresDisponiveis.map(sabor => <Picker.Item key={sabor} label={sabor} value={sabor} />)}
          </Picker>

          <Text style={styles.label}>Tamanho:</Text>
          <Picker
            selectedValue={editableData.pizza.tamanho}
            style={globalStyles.picker}
            dropdownIconColor="#fff"
            onValueChange={(itemValue) => handleChange('pizza.tamanho', itemValue)}
          >
            {tamanhosDisponiveis.map(tamanho => <Picker.Item key={tamanho} label={tamanho} value={tamanho} />)}
          </Picker>
          
          <Text style={styles.info}><Text style={styles.infoLabel}>Novo Preço:</Text> R$ {String(editableData.pizza.preco).replace('.', ',')}</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleUpdate}>
              <Text style={globalStyles.buyButtonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancelEdit}>
              <Text style={styles.cancelText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.info}><Text style={styles.infoLabel}>Cliente:</Text> {order.cliente.nome}</Text>
          <Text style={styles.info}><Text style={styles.infoLabel}>Endereço:</Text> {order.cliente.endereco}</Text>
          <Text style={styles.info}><Text style={styles.infoLabel}>Telefone:</Text> {order.cliente.telefone}</Text>
          <Text style={styles.info}><Text style={styles.infoLabel}>Pizza:</Text> {order.pizza.sabor} - {order.pizza.tamanho}</Text>
          <Text style={styles.info}><Text style={styles.infoLabel}>Preço:</Text> R$ {String(order.pizza.preco).replace('.', ',')}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, styles.editButton]} onPress={() => setIsEditing(true)}>
              <Text style={globalStyles.buyButtonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => onDelete(order.id)}>
              <Text style={styles.cancelText}>Cancelar Pedido</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { ...globalStyles.confirmacao, alignItems: 'stretch', width: '100%', marginBottom: 15 },
  label: { ...globalStyles.label, marginTop: 5, fontSize: 14 },
  input: { ...globalStyles.input, paddingVertical: 8 },
  info: { ...globalStyles.pizzaInfoText, marginBottom: 5, marginTop: 5 },
  infoLabel: { color: '#ffb347', fontWeight: 'bold' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  button: { flex: 1, padding: 10, borderRadius: 8, alignItems: 'center', marginHorizontal: 5 },
  editButton: { backgroundColor: '#ffb347' },
  saveButton: { backgroundColor: '#28a745' },
  cancelButton: { backgroundColor: '#dc3545' },
  cancelText: { color: '#fff', fontWeight: 'bold' },
});

export default OrderItem;
