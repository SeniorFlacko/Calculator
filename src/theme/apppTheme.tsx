import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoPequeno: {
    fontSize: 30,
    color: 'rgba(255,255,255,0.1)',
    textAlign: 'right',
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});

export default styles;
