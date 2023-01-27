import React  from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import Texto from "../../componentes/texto";

import bg from "../../topo.png"

const tamanhoTela = Dimensions.get('screen').width

export default function Topo({titulo}){
    return <>
        <Image style={estilos.Topo} source={bg}/>
        <Texto style={estilos.Titulo} >{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    Topo:{
        width:"100%",
        height: 578 / 768 * tamanhoTela
    },
    Titulo:{
        position:"absolute",
        textAlign:"center",
        width:"100%",
        color: "white",
        padding:15,
        fontSize:16,
        fontWeight:"bold"
    }, 
})