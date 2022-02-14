import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';

const Card = props => {
  return (
    <View {...props} style={style.cardContainer}>
      <View style={style.card}>
        <View style={style.cardHeader}>
          <Text style={style.cardContentText}>{props.name}</Text>
        </View>
        <View style={style.cardContent}>
          <Text style={style.cardContentText}>{props.conteudo}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
