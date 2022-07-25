import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

interface ButtonProps {
    title: string;
}

export default function Button({ title }: ButtonProps){
    return(
        <>
            <TouchableOpacity style={style.button} activeOpacity={0.7}>
                <Text>{ title }</Text>
            </TouchableOpacity>
        </>
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
      },
})
