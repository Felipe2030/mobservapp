import React from "react";
import { styles } from "./styles";
import { Text, View, ImageBackground, Image } from 'react-native';

export default function Main(){
    return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/person01.png')} style={styles.imageBackground}>
            <View style={styles.containerHeader}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.containerHeaderText}>INICIO</Text>
            </View>
        </ImageBackground>    
    </View>   
      
    )
}