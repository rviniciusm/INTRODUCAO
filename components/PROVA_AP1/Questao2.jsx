import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import questaoStyles from './questaoStyles'; // Importe os estilos
import { questaoData } from './questaoData'; // Importe os dados

const Questao02 = ({ visible, onClose, selectedItem }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={questaoStyles.container}>
        <Text style={questaoStyles.sectionHeader}>Detalhes da Compra</Text>
        <View style={questaoStyles.itemContainer}>
          <IconButton
            icon="cart"
            color="white"
            size={24}
            style={questaoStyles.itemIcon}
            disabled
          />
          <Text style={questaoStyles.itemText}>{selectedItem.nomeEmpresa}</Text>
        </View>
        <View style={questaoStyles.itemContainer}>
          <Text style={questaoStyles.itemText}>
            Valor: R$ {selectedItem.valor.toFixed(2)}
          </Text>
          <Text style={questaoStyles.itemTime}>{selectedItem.data}</Text>
        </View>
        <View style={questaoStyles.itemContainer}>
          <Text style={questaoStyles.itemText}>Data: {selectedItem.data}</Text>
          <Text style={questaoStyles.itemTime}>Horário: {selectedItem.horario}</Text>
        </View>
        <TouchableOpacity onPress={onClose}>
          <Text style={questaoStyles.itemText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Questao02;
