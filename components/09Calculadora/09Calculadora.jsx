import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import estilos from "./09CSS";
import MyPressable from "./09MeuPressable";

const Calculadora = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [cor, setCor] = useState("white");

  function somar() {
    setResult((parseInt(number1) + parseInt(number2)).toString());
  }

  function subtrair() {
    setResult((parseInt(number1) - parseInt(number2)).toString());
  }

  function multiplicar() {
    setResult((parseInt(number1) * parseInt(number2)).toString());
  }

  function dividir() {
    setResult((parseInt(number1) / parseInt(number2)).toFixed(2));
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>CALCULADORA 0.1</Text>
      <TextInput
        style={estilos.input}
        onChangeText={(numero) => setNumber1(numero)}
        keyboardType="numeric"
      />
      <TextInput
        style={estilos.input}
        onChangeText={(numero) => setNumber2(numero)}
        keyboardType="numeric"
      />
      <View style={estilos.containerBotoes}>
        <Button title="SOMAR" onPress={somar} />
        <Button title="SUBTR" onPress={subtrair} />
        <Button title="MULTI" onPress={multiplicar} />
        <Button title="DIVID" onPress={dividir} />
      </View>
      <MyPressable funcao={somar} titulo="SOMAR" />

      <Text style={[estilos.header, { marginTop: 20 }]}>
        Resultado: {result}
      </Text>
    </View>
  );
};

export default Calculadora;

