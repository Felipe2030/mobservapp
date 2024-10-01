import React from "react";
import { styles } from "./styles";
import { Text, Button, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();

    async function handleLogin() {
        navigation.navigate("BottomRoutes")
    }

    return (
        <View style={styles.container}>
            <Text>Olá mundo!</Text>
            <Button title="Entrar" onPress={ () => handleLogin() }/>
        </View>
    )
}