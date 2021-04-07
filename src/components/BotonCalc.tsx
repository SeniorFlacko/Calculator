import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../theme/apppTheme';

interface IBotonCalc {
  texto: string;
  color?: string;
  ancho?: boolean;
}

const BotonCalc = ({texto, color = '#2D2D2D', ancho = false}: IBotonCalc) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('ok');
      }}>
      <View
        style={[
          styles.boton,
          {backgroundColor: color},
          ancho ? {width: 180} : {width: 80},
        ]}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
