import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import User from "../pages/user";

const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    )
}