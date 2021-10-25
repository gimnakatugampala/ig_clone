import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Image } from 'react-native'

import FormikPostUploader from './FormikPostUploader'


export default function AddNewPost({navigation}) {

    return (
      <View style={styles.container}>
          <Header navigation={navigation} />
          {/* Post Form */}
          <FormikPostUploader />
          
      </View>
    )
}


const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image style={{width:30,height:30}} source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}} />
    </TouchableOpacity>
    <Text style={styles.headerText}> New Post</Text>
    <Text></Text>
</View>
)

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginVertical:20
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:20,
        marginRight:23
    }
})
