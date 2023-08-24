import React from 'react';
import { StyleSheet, View } from 'react-native';
//import HelloRNV2 from './components/02HelloRNV1'; // Certifique-se de que o caminho para o arquivo está correto
//import HelloRN from './components/01HelloRN';
//import MyCat from './components/03MyCat.jsx';
import Questao01 from './components/Tarefa01/Questao01';

export default function App() {
  return (
    <View style={styles.container}>
      < Questao01 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },

  titulo: {
    fontSize: 90,
    fontWeight: "bold",
    color: "green",
  }
});
