import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import MyStyle from "./MyStyle"; // Certifique-se de que o nome do arquivo e do módulo seja "MyStyle"
import MyFancyModal from "./MyFancyModal";

const student = { name: "Sycran", grade: "A+" };

const Screen01 = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={MyStyle.container}> {/* Use "style" em vez de "sytle" */}
      <Text style={MyStyle.header}>Screen 01</Text>
      <Button
        title="Ir Para Screen 02"
        onPress={() => navigation.navigate("Screen02", student)}
      />
      <Button
        title="Mostrar Modal"
        onPress={() => setModalVisible(true)}
      />
      <MyFancyModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

export default Screen01;
