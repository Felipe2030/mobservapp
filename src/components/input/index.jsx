import React, { forwardRef } from "react";
import { styles } from "./styles";
import { View, Text, TextInput } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";

export const Input = forwardRef((props, ref) => {
    return (
        <View>
            <TextInput>Ola Mundo</TextInput>
            <MaterialIcons name="email" size={20} color={themas.colors.gray} />
        </View>
    )
})