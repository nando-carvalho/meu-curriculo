import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import style from './styles';

const RedeSocialButton = props => {
  return (
    <TouchableOpacity style={style.redesocialButton} onPress={props.onPress}>
      <Icon name={props.iconName} size={30} style={style.redesocialIcon} />
    </TouchableOpacity>
  );
};

export default RedeSocialButton;
