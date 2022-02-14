import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7e7e7',
    flex: 1,
    alignItems: 'center',
  },
  containerCabecalho: {
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
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
    marginTop: 20,
  },
});

export default styles;
