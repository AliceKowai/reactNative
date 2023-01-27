import  React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }){
let estilo = estilos.Texto
    if (style?.fontWeight == 'bold') {
        estilo = estilos.TextoNegrito
    }
    return <Text style={[style,estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    Texto:{
        fontFamily: "MontserratRegular",
        fontWeight:"normal"
    },
    TextoNegrito:{
        fontFamily:"MontserratBold",
        fontWeight:"normal"
    }
})