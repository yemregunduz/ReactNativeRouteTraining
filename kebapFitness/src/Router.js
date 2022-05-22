import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./pages/WelcomeScreen";
import MemberSign from "./pages/MemberSign";
import MemberResult from "./pages/MemberResult";
const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="WelcomeScreen" component={Welcome}>
                </Stack.Screen>
                <Stack.Screen name="MemberSignScreen" component={MemberSign}>
                </Stack.Screen>
                <Stack.Screen name="MemberResultScreen" component={MemberResult}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router