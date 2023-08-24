import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Questao01 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.nome}>Raimundo Vinícius da Silva Medeiros</Text>
            <Text style={styles.curso}> Design Digital</Text>
            <Text style={styles.cidade}>Quixeramobim - Ce</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    curso: {
        fontSize: 18,
        color: 'red',
    },
    cidade: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default Questao01;
