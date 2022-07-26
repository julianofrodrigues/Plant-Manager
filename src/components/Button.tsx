import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export default function Button({ title, ...rest }: ButtonProps){
    return(
        <>
            <TouchableOpacity style={style.button} activeOpacity={0.7} {...rest}>
                <Text style={style.text}>{ title }</Text>
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
        height: 56,
        // width: 240
      },
      text:{
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading,
      }
})
