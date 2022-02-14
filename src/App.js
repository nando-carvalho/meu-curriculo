import React from 'react';
import {View, Image, Text, Alert} from 'react-native';
import fotoPerfil from './assets/img/ndo.png';
import Icon from 'react-native-vector-icons/Feather';
import style from './assets/css/principal.js';
import Card from './components/Card.js';
import RedeSocialButton from './components/RedeSocialButton.js';

const App = () => {
  function handleRedeSocial(redesocial) {
    switch (redesocial) {
      case 'linkedin':
        Alert.alert('Meu Linkedin');
        break;
      case 'facebook':
        Alert.alert('Meu Facebook');
        break;
      case 'github':
        Alert.alert('Meu GitHub');
        break;
    }
  }
  return (
    <View style={style.page}>
      <View style={style.containerCabecalho}>
        <Image style={style.foto} source={fotoPerfil} />
        <Text style={style.nome}> Luiz Fernando de Carvalho</Text>
        <Text style={style.funcao}> Analista de Sistemas</Text>
        <View style={style.redesSociais}>
          <RedeSocialButton
            onPress={() => handleRedeSocial('github')}
            iconName="github"
          />
          <RedeSocialButton
            onPress={() => handleRedeSocial('linkedin')}
            iconName="linkedin"
          />
          <RedeSocialButton
            onPress={() => handleRedeSocial('facebook')}
            iconName="facebook"
          />
        </View>
      </View>

      <Card
        name="Experiência Profissional"
        conteudo="Elo Assessoria e Sistemas"
      />
      <Card name="Skills" conteudo="React Native, React, JavaScript, SQL;" />
    </View>
  );
};

export default App;
