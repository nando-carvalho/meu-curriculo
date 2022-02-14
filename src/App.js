import React from 'react';
import {View, Image, Text} from 'react-native';
import fotoPerfil from './assets/img/ndo.png';
import style from './assets/css/principal.js';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image style={style.foto} source={fotoPerfil} />
        <Text style={style.nome}> Luiz Fernando de Carvalho</Text>
        <Text style={style.funcao}> Analista de Sistemas</Text>
        <View style={style.redes_sociais}>
          <Icon name="github" size={30} />
          <Icon name="linkedin" size={30} />
          <Icon name="facebook" size={30} />
        </View>
      </View>
    </View>
  );
};

export default App;
