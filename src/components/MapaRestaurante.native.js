import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const localizacao = {
  latitude: -22.8948,
  longitude: -43.1196,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const MapaRestaurante = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={localizacao}
    >
      <Marker
        coordinate={{ latitude: localizacao.latitude, longitude: localizacao.longitude }}
        title="Pizzaria do Victor"
        description="A nossa unidade de Niterói!"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapaRestaurante;
