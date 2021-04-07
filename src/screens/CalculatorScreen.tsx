import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import styles from '../theme/apppTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>$1500.00</Text>
      <Text style={styles.resultado}>$1500.00</Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" />
        <BotonCalc texto="+/-" color="#2D2D2D" />
        <BotonCalc texto="del" color="#FF9427" />
        <BotonCalc texto="/" color="#9B9B9B" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
