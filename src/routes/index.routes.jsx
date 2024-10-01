import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Main from "../pages/main";
// import BottomRoutes from "./bottom.routes";

const Stack = createStackNavigator()

export default function Routes(){
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#FFF" }}}>
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Login" component={Login}/>
            {/* <Stack.Screen name="BottomRoutes" component={BottomRoutes}/> */}
        </Stack.Navigator>
    )
}