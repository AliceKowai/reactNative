import {StyleSheet, View, FlatList } from "react-native";
import Texto from "../componentes/texto";
import Detalhes from "./componentes/detalhes";
import Item from "./componentes/item";
import Topo from "./componentes/topo"



export default function Cesta({topo, detalhes,itens }){
    return (
        <>
        <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({nome})=>nome}
        ListHeaderComponent = {() =>{
            return <>
                <Topo {...topo}/>
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes}/>
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </View>
            </>
        }}
        />
        </> 
    )

}
const estilos = StyleSheet.create({
    cesta:{
        paddingHorizontal: 15
    },
    titulo:{
        color:"#464646",
        fontWeight:"bold",
        marginTop:32,
        marginBottom:8,
        fontSize:20,
        lineHeight:32,
    },
})