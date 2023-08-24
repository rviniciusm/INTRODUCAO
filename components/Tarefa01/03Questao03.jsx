import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Questao03 = ({ cor }) => {
    const disciplinasFavoritas = [
        'Tipografia',
        'Desenho 1 ',
        ' Modelagem',
        'Edição de Imagens '
    ];

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.titulo, color: cor }}>Disciplinas Favoritas</Text>
            {disciplinasFavoritas.map((disciplina, index) => (
                <Text key={index} style={{ color: "green" }}>{disciplina}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Questao03;
