import React from "react";
import { Text, View, Share, TouchableOpacity} from "react-native";
import { styles } from "./style";

export default function ResultIMC(props){
    const onShare = async()=>{
        const result = await Share.share({
            message:"Meu IMC atual é"+props.resultIMC
        })
    }
    return (
        <View style={styles.resultContain}>
            <View style={styles.containShare}>
                {props.resultIMC != null ?
                    <TouchableOpacity style={styles.shared} onPress={onShare}>
                        <Text style={styles.textShared}>Compartilhar</Text>
                    </TouchableOpacity>
                :<View/>
                }
            </View>
            <Text style={styles.result}>{props.messagemResult}</Text>
            <Text style={styles.resultNumber}>{props.resultIMC}</Text>
        </View>
    )
}
