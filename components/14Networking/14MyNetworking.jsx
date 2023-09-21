import {useEffect} from "react"
import {View, Text, } from "react-native"
import estilos from "./14Estilos"

const MyNetworking = () => {

    useEffect(
        () => {
            getMovies()
        }
        ,
        []
    )

    const getMovies = () => {
        fetch("https://reactnative.dev/movies.json")
        .then( response )
        .catch(error=>console(error))
    }

    return (
        <View  style={estilos.container}>
            <Text style={estilos.header} >Networking </Text>
        </View>
    )
}

export default MyNetworking 