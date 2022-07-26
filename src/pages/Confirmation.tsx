import React from "react";
import {  SafeAreaView, View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import Button from "../components/Button";


export default function Confirmation(){
    return(
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <Text style={style.emoji}>
                    😄
                </Text>
                <Text style={style.title}>Prontinho</Text>
                <Text style={style.subtitle}>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Text>
                <View style={style.footer}>
                    <Button title="Começar" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around', 
    },
    content:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        padding: 30,
    },
    emoji:{
        fontSize: 78
    },
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading
    },
    footer:{
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 50
    }
})