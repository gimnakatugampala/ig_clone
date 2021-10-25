import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView ,ScrollView } from 'react-native'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
import Post from '../components/Home/Post'
import BottomTabs, { bottomTabIcons } from '../components/Home/BottomTabs'
import { POSTS } from '../data/posts'


export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />

            <ScrollView>
                {POSTS.map((post,index) => (
                    <Post key={index} post={post} />
                )) }
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    }
})
