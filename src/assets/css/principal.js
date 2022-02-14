import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7e7e7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    marginTop: 20,
  },
});

export default styles;
