import React from 'react'
import { Image, StyleSheet, Text, View ,TouchableOpacity } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
           <TouchableOpacity>
           <Image style={styles.logo} source={require('../../assets/logo.png')} />
           </TouchableOpacity>

           <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                    <Image style={styles.icon} source={{
                        uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                    }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image style={styles.icon} source={{
                        uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                    }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadText}>2</Text>
                    </View>
                    <Image style={styles.icon} source={{
                        uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
                    }} />
                    </TouchableOpacity>

           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20
    },  
    iconsContainer:{
        flexDirection:'row'
    },  
    logo:{
        width:40,
        height:100,
        resizeMode:'contain',
        marginHorizontal:15
    },
    icon:{
        width:30,
        height:30,
        resizeMode:'contain',
        marginLeft:15
    },
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    unreadText:{
        color:'white',
        fontWeight:'600'
    }
})
