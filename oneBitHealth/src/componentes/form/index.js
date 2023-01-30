import React, { useState } from "react";
import {Text, TextInput, TouchableOpacity, View, Vibration, Pressable, Keyboard } from "react-native";
import ResultIMC from "../resultIMC";
import { styles } from "./style";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha com seu peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [textError, setTextError] = useState(null)

    function imcCalculator(){
        const formatHeight = height.replace(",",".")
        return setImc((weight/(formatHeight*formatHeight)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            setHeight(null)
            setWeight(null)
            setTextError(null)
            setMessageImc("Seu imc é igual:")
            imcCalculator()
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
        setTextError("Campo Obrigatório")
        Vibration.vibrate()
    }

    

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.contextForm}>
            <View style={styles.form}>
                <Text style={styles.label}>Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder="1.63"
                    value={height}
                    keyboardType="numeric"
                    onChangeText={setHeight} 
                    />
                <Text style={styles.messageError}>{textError}</Text>
                <Text style={styles.label}>Peso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="50.365"
                    value={weight}
                    keyboardType="numeric"
                    onChangeText={setWeight}
                    />
                <Text style={styles.messageError}>{textError}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>validationImc()} title={textButton} >
                    <Text style={styles.buttonText}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messagemResult={messageImc} resultIMC={imc}  />
        </Pressable>
    )
}