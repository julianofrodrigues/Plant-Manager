import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImg from "../assets/juliano.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";



export default function Header(){
    const [userName, setUserName] = useState<string>('name')

    useEffect(()=>{
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }   
        loadStorageUserName()
    }, [userName])

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{ userName }</Text> 
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
