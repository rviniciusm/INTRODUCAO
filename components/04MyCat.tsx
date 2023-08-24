import {View, Text, } from 'react-native'

const MyCat = () => {
    //let nomeDoGato = "Sujeira"

    const getFullName = (PrimeiroNome:string, SegundoNome:string) => {
        return PrimeiroNome + " " + SegundoNome

        
    }

    return (
        <View>
            <Text style={{fontSize:20}}> 
            O nome do gato é  {getFullName("Czar", "Rurik")}
            </Text>
            
        </View>
        
    )
}

export default MyCat 

