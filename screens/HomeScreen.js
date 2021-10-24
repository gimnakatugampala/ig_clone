import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import Header from '../components/Home/Header'


export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    }
})
