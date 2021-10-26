import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import LoginForm from '../components/LoginScreen/LoginForm'

const INSTAGRAM_LOGIN = 'https://img.icons8.com/cute-clipart/64/000000/instagram-new.png'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image source={{uri:INSTAGRAM_LOGIN ,height:100,width:100}}  />
            </View>
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal:12
    },
    loginContainer:{
        alignItems:'center',
        marginTop:60
    }
})
