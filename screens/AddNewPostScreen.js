import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'

import AddNewPost from '../components/newPost/AddNewPost'



export default function AddNewPostScreen({navigation}) {
    return (
        <SafeAreaView style={{backgroundColor:'black',flex:1}}>
            <AddNewPost navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
