import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Questao01 = () => {
    const [showOriginalImage, setShowOriginalImage] = useState(true);

    const toggleImage = () => {
        setShowOriginalImage(!showOriginalImage);
    };

    const imageUrl = showOriginalImage
        ? 'https://pps.whatsapp.net/v/t61.24694-24/366366422_1309140276360152_6420908842270258877_n.jpg?ccb=11-4&oh=01_AdRGITfl2PztVScdrWFKVpr3xv-OggriAk0_ZwqsE-j3Lg&oe=64F1FA46&_nc_cat=102'
        : 'https://www.quixada.ufc.br/wp-content/uploads/2018/10/brasao-vertical-escala.png';

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.imagem} />
            <Text style={styles.nome}>Raimundo Vinícius da Silva Medeiros</Text>
            <Text style={styles.curso}>Design Digital</Text>
            <Text style={styles.cidade}>Quixeramobim - CE</Text>
            <Button title="Alternar Imagem" onPress={toggleImage} style={styles.botao} />
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
    imagem: {
        width: 280,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 30
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
    botao: {
        marginTop: 20,
    },
});

export default Questao01;
