import {View, Text} from "react-native"

const MyNetworking = () => {

    const getMovies = () => {
        fetch("https://reactnative.dev/movies.json")
        .then( response )
        .catch(error=>console(error))
    }

    return (
        <View>

        </View>
    )
}

export default MyNetworking 