import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contextForm:{
        backgroundColor:"#fff",
        padding:30,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        height:"100%", 
        marginTop:20
    },
    form:{
        height:"auto"
    },
    label:{
        fontSize:20,
        padding:10
    },
    input:{
        backgroundColor:"#ffe5ec",
        borderRadius: 30,
        padding:10
    },
    buttonText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"
    },
    button:{
        padding:17,
        borderRadius:30,
        marginTop:30,
        backgroundColor:"#96f"
    },
    messageError:{
        color:"red",
        fontWeight:"bold",
        fontSize:15
    },
})