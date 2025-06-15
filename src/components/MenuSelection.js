import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import PizzaItem from './PizzaItem';
import { styles } from '../styles/styles';

const MenuSelection = ({
  categoria,
  onCategoriaChange,
  indiceTamanho,
  onTamanhoChange,
  tamanhos,
  pizzas,
  onPizzaSelect,
}) => {
  return (
    <View>
      <Text style={styles.label}>Escolha a categoria:</Text>
      <Picker
        selectedValue={categoria}
        style={styles.picker}
        dropdownIconColor="#fff"
        onValueChange={onCategoriaChange}
      >
        <Picker.Item label="Tradicional" value="Tradicional" />
        <Picker.Item label="Especial" value="Especial" />
        <Picker.Item label="Premium" value="Premium" />
        <Picker.Item label="Vegana" value="Vegana" />
      </Picker>

      <Text style={styles.label}>Tamanho: {tamanhos[indiceTamanho]}</Text>
      <Slider
        minimumValue={0}
        maximumValue={tamanhos.length - 1}
        step={1}
        value={indiceTamanho}
        onValueChange={onTamanhoChange}
        minimumTrackTintColor="#ffb347"
        maximumTrackTintColor="#333"
        thumbTintColor="#fff"
      />

      <Text style={styles.label}>Pizzas disponíveis:</Text>
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PizzaItem pizza={item} onSelect={onPizzaSelect} />}
        scrollEnabled={false}
      />
    </View>
  );
};

export default MenuSelection;
