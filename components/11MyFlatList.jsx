import { View, Text, FlatList} from "react-native"

/*const dados = [
    {key:1,nome:"Sorvete", nota:8.9},
    {key:2,nome:"Hamburguer", nota:9.5},
    {key:3,nome:"Refrigerante", nota:9.0},
    {key:4,nome:"Cereal", nota:7.7},
    {key:5,nome:"Bolo", nota:9.0},
    {key:6,nome:"Suco", nota:9.4},
    {key:7,nome:"Torta", nota:9.7},
    {key:8,nome:"Pizza", nota:9.3},
    {key:9,nome:"Lasanha", nota:9.6},
    {key:10,nome:"Panqueca", nota:9.4},
    {key:11,nome:"Tapioca", nota:9.9},
    {key:12,nome:"Sorvete", nota:8.9},
    {key:13,nome:"Hamburguer", nota:9.5},
    {key:14,nome:"Refrigerante", nota:9.0},
    {key:15,nome:"Cereal", nota:7.7},
    {key:16,nome:"Bolo", nota:9.0},
    {key:17,nome:"Suco", nota:9.4},
    {key:18,nome:"Torta", nota:9.7},
    {key:19,nome:"Pizza", nota:9.3},
    {key:20,nome:"Lasanha", nota:9.6},
    {key:21,nome:"Panqueca", nota:9.4},
    {key:22,nome:"Tapioca", nota:9.9},
]*/

const dados = [
    {nome: "Fulano", nota:9},
    {nome: "Sicrano", nota:8},
    {nome: "Beltrano", nota:10}

]

const MyFlatList = () => {
    return (
       <View
         style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
         }}
       >
        <FlatList 
            data={dados}
            renderItem={
                ({item})=>{
                    return (
                         <View> 
                            <Text style={{fontSize:25,fontWeight:"bold"}}>
                                {item.nome} - {item.nota}
                            </Text>
                        </View>
                    )
                }
            }
        />
       </View>
    )
}

export default MyFlatList 