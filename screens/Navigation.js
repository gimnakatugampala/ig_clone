import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../screens/HomeScreen'
import NewsPostScreen from '../screens/AddNewPostScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

const Stack = createStackNavigator();

export default function Navigation() {

    const screenOptions = {
        headerShown:false
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignupScreen" screenOptions={screenOptions}>
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="NewsPostScreen" component={NewsPostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
