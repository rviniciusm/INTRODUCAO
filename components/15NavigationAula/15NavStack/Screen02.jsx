import { View, Text, Button } from "react-native"
import myStyle from "./MyStyle"
myStyle

const Screen02 = ({navigation, route}) => {
    const {name, grade} = route.params
    return (
        <View sytle={myStyle.container}>
            <Text style={myStyle.header}> Screen 02</Text>
            <Text style={myStyle.header}> {name}</Text>
            <Text style={myStyle.header}> {grade}</Text>
            <Button
                title="ir Para Screen 03"
                onPress={() => navigation.navigate("Screen03")}
            />
        </View>
    )
}

export default Screen02