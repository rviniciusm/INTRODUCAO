import React from 'react';
import { StyleSheet, View } from 'react-native';
//import HelloRNV2 from './components/02HelloRNV1'; // Certifique-se de que o caminho para o arquivo está correto
//import HelloRN from './components/01HelloRN';
//import MyCat from './components/03MyCat.jsx';
//import Questao01 from './components/Tarefa01/Questao01';
//import Questao03 from './components/Tarefa01/03Questao03';
//import MyTextImput from './components/07Textinout';
//import JuntarFrases from './components/08JuntarFrases';
//import Calculadora from './components/09Calculadora/09Calculadora';
//import MyScrollView from './components/10MyScrollView';
//import MyFlatList from './components/11MyFlatList';
//import MyFlexBox from './components/13Flexbox/13FlexboxA';
import MyFlexBox from './components/13Flexbox/13FlexboxA';


export default function App() {
  return (
      < MyFlexBox/>
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
