import { StyleSheet} from "react-native"

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    header: {
      fontSize: 22,
      fontWeight: "bold",
      alignItems: "center"
    },
    input: {
      height: 40,
      width: 275,
      borderColor:"black", 
      borderWidth: 2, 
      paddingLeft: 10,
      margin: 5,
      fontSize:20,
      color:"green",
    },
    containerBotoes: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: 300,
      marginTop: 5


    }


})

export default estilos