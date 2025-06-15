import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  main: {
    padding: 20
  },
  header: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  headerButtonTouchable: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#292929',
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 14
  },
  headerButtonAnimado: {
    borderWidth: 2,
    borderColor: '#ffb347'
  },
  footer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: { color: '#777', fontSize: 14 },
  label: { color: '#fff', fontSize: 16, marginTop: 10 },
  picker: {
    color: '#fff',
    backgroundColor: '#1e1e1e',
    marginVertical: 10,
  },
  pizzaItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#292929',
    borderRadius: 8,
  },
  pizzaText: { color: '#fff', fontSize: 16 },
  pizzaImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  pizzaInfoTitle: {
    color: '#ffb347',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  pizzaInfoText: { color: '#ccc', fontSize: 14 },
  buyButton: {
    backgroundColor: '#ffb347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buyButtonText: { color: '#121212', fontWeight: 'bold' },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 10,
  },
  formulario: { marginTop: 20 },
  confirmacao: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    alignItems: 'center',
  },
});
