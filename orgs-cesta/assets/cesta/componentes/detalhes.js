import React from "react"
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"

import Texto from "../../componentes/texto";

export default function Detalhes({ nome, logo, nomeFazenda, descricao, preco,botao }) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.logoFazenda} source={logo} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricaoCesta}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 30,
        fontWeight: "bold"

    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 15
    },
    logoFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        marginLeft: 12,
        lineHeight: 26
    },
    descricaoCesta: {
        color: "#a3a3a3",
        fontSize: 18,
        lineHeight: 25,
        fontFamily: "MontserratRegular"
    },
    preco: {
        fontSize: 30,
        color: "#2a9f85",
        fontWeight: "bold",
        marginTop: 8
    },
    botao:{
        backgroundColor:"#2a9f85",
        marginTop:8,
        paddingVertical:16,
        borderRadius:6,
        
    },
    textoBotao:{
        color:"#fff",
        fontWeight:"bold",
        textAlign:"center",
        lineHeight:26,
        textTransform:"uppercase"
    }
})

