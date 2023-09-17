import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";

const imagem = {
    uri: "https://i.pinimg.com/564x/4c/8e/a2/4c8ea2def353795ab7a736eebb27e102.jpg",
    width: 300,
    height: 300, 
}

const MyScrollView = () => {
    return (
        
        <ScrollView> 
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: 25

                }}
            >
            <Text style={{fontSize:25, fontWeight:"bold"}}> Mascot™ </Text>
            <Image source={imagem}/>
            <Image source={imagem}/>
            <Image source={imagem}/>
            <Image source={imagem}/>
            <Image source={imagem}/>
            </View>
        </ScrollView>
        

    )
}

export default MyScrollView