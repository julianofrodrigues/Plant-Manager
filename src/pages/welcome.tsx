import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import watering from '../assets/watering.png'
import Button from "../components/Button";
import colors from "../styles/colors";

export default function Welcome(){
  return (
    <SafeAreaView style={style.container}>
        <Text style={style.title}>
            Gerencie {'\n'} 
            suas plantas {'\n'} 
            de forma fácil
        </Text>
        <Image source={watering} style={style.image} />
        <Text style={style.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
        <Button title=">" />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image:{
    width: 292,
    height: 284
  }
})
