import React, { useState } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,Image } from 'react-native'
import { Divider } from 'react-native-elements'


export const bottomTabIcons = [
    {
        name:'Home',
        active:'https://img.icons8.com/fluency-systems-filled/60/ffffff/home.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/60/ffffff/home.png'
    },
    {
        name:'Search',
        active:'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive:'https://img.icons8.com/ios/500/ffffff/search--v1.png'
    },
    {
        name:'Reels',
        active:'https://img.icons8.com/ios-filled/144/ffffff/instagram-reel.png',
        inactive:'https://img.icons8.com/ios/48/ffffff/instagram-reel.png'
    },
    {
        name:'Shop',
        active:'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag.png'
    },
    {
        name:'Profile',
        active:'https://img.icons8.com/fluency-systems-filled/48/ffffff/profile.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/48/ffffff/profile.png'
    },
    
]

export default function BottomTabs({icons}) {

        const [activetab, setactivetab] = useState('Home')

        const Icon = ({icon}) => (
            <TouchableOpacity onPress={() => setactivetab(icon.name)}>
                <Image source={{uri:activetab === icon.name ?  icon.active : icon.inactive}} style={[styles.icon,icon.name === 'Profile'? styles.profilePic() : null]} />
            </TouchableOpacity>
        )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='Vertical' />
        <View style={styles.conatiner}>
            {icons.map((icon,index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        width:'100%',
        bottom:'-1%',
        zIndex:999,
        backgroundColor:'#000'

    },
    conatiner:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        paddingTop:10
    },
    icon:{
        width:30,
        height:30,
    },
    profilePic:(activetab = '') =>( {
        borderRadius:50,
        borderWidth: activetab === 'Profile' ? 2 :0,
        borderColor:'#fff'
    })
})
