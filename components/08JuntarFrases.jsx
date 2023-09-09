
import { View, Text, TextInput, Button, StyleSheet} from "react-native"
import { useState} from "react"

const JuntarFrases = () => {
    const [frase1, setFrase1] = useState("")
    const [frase2, setFrase2] = useState("")
    const [frase3, setFrase3] = useState("")

    return (
        <View style={estilos.view}>
            <Text style={estilos.header}> Juntador de Frase 😒👌 </Text>
        <TextInput 
            style={estilos.input}
            placeholder=" Digite frase 1"
            defaultValue={frase1}
            onChangeText={(textoDigitado) =>setFrase1(textoDigitado)
        }

        />
           <TextInput 
            style={estilos.input}
            placeholder=" Digite frase 2 "
            defaultValue={frase2}
            onChangeText={(textoDigitado) =>setFrase2(textoDigitado)
            }

        />
        <View style={{width:300, height:100, fontSize:40, padding:30, margin: 20 }}>
            <Button
            title="JUNTAR"
            onPress={
                ()=> setFrase3(frase1 + frase2)
            }
        />
        </View>

            <Text style={estilos.frase}>
              {frase3}
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create( {
    header: {
        fontSize: 60,
        fontWeight: "bold",
        color: "red",
        paddingBottom: 40
    },
        view: {
            flex: 1,
            alignItems: 'center',
            padding: 20, 
            backgroundColor: "#C0C0C0"
        },
        input: {
            height: 100,
            width: 600,
            paddingLeft: 10,
            borderColor: "black",
            borderWidth: 2,
            fontSize: 60,
            fontWeight: "bold", 
          
        },
        frase: {
            fontSize: 80,
            fontWeight: "bold",
           
            paddingTop: 40
        }

    })

export default JuntarFrases