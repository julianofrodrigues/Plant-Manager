import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImg from "../assets/juliano.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";



export default function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Juliano</Text> 
            </View>
            <Image style={styles.image} source={userImg} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
      },
    greeting:{
        color: colors.heading,
        fontSize: 32,
        fontFamily: fonts.text,
    },
    userName:{
        color: colors.heading,
        fontSize: 32,
        fontFamily: fonts.heading,
        lineHeight: 40,
    },
    image:{
        width: 56,
        height: 56,
        borderRadius: 28
    }
})
