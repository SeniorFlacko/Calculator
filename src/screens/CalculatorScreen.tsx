import React from 'react';
import {Text, View} from 'react-native';
import styles from '../theme/apppTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>$1500.00</Text>
      <Text style={styles.resultado}>$1500.00</Text>

      {/** Boton  */}
      <View style={styles.boton}>
        <Text style={styles.botonTexto}>1</Text>
      </View>
    </View>
  );
};

export default CalculatorScreen;
