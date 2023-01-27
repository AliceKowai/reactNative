import React from "react";
import { StyleSheet, Image, View, } from "react-native";
import Texto from "../../componentes/texto"

export default function Item({item:{nome, item}}){
    return<View style={estilos.item}>
        <Image style={estilos.image} source={item} />
        <Texto style={estilos.nome}>{nome}</Texto>
        </View>
    }

const estilos = StyleSheet.create({
    item:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#ececec",
        paddingVertical:16,
        marginHorizontal:16,
        alignItems:"center",
        paddingHorizontal:16
    },
    image:{
        width:46,
        height:46
    },
    nome:{
        fontSize:16,
        lineHeight:26,
        marginLeft:11,
        color:"#464646"
    }
})