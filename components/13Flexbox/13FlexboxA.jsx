import {View, Text, StyleSheet} from "react-native"

const MyFlexBox  = () => {
    return (
        <View style={estilos.container}>
        <View style={estilos.view1}></View>
        <View style={estilos.view2}></View>
        <View style={estilos.view3}></View>
        <View
            style={{
                backgroundColor:"white",
                width:200,
                height:200
            }}
        >
            <Text>Fulano</Text>
            <Text>Sicrano</Text>
            <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quibusdam facilis fugiat officia quis. Natus, odio quod.
                  Doloremque, voluptas reprehenderit. Tenetur ut ipsum soluta possimus,
                   a incidunt veniam culpa quas dicta.</Text>

        </View>
        
       
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: "lightgray",

        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap"

    },
    view1: {
        backgroundColor: "powderblue",
        width:100,
        height:100
    
    },
    view2: {
        backgroundColor: "skyblue",
        width:100,
        height:100
    
    },
    view3: {
        backgroundColor: "steelblue",
        width:100,
        height:100,
       
    
    },
})
export default MyFlexBox 