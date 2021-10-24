import React from 'react'
import { StyleSheet, Text, View ,ScrollView, Image} from 'react-native'
import { USERS } from '../../data/users'



export default function Stories() {
    return (
        <View style={{marginBottom:13}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                USERS.map((story,index) => (
                    <View key={index} style={{alignItems:'center'}}>
                    <Image style={styles.story}  source={{
                        uri: story.image
                    }} />
                    <Text style={{color:'white'}}>{story.user.length > 11 ? story.user.slice(0,10).toLowerCase() + '..' : story.user.toLowerCase()}</Text>
                    </View>
                ))
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:6,
        borderWidth:3,
        borderColor:'#ff8501',
        
    }
})
