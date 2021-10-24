import React from 'react'
import { Image, StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { POSTS } from '../../data/posts'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name:'Like',
        imageURL:'https://img.icons8.com/fluency-systems-regular/60/ffffff/heart.png'
    },
    {
        name:'Comment',
        imageURL:'https://img.icons8.com/fluency-systems-regular/60/ffffff/chat.png'
    },
    {
        name:'Share',
        imageURL:'https://img.icons8.com/fluency-systems-regular/60/ffffff/share.png'
    },
    {
        name:'Save',
        imageURL:'https://img.icons8.com/fluency-systems-regular/60/ffffff/save.png'
    },
    

]


export default function Post({post}) {
    return (
        <View style={{marginBottom:30}}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{marginHorizontal:15,marginTop:10}}>
                <PostFooter />
                <Likes post={post} />
                <Captions post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}


const PostHeader = ({post}) =>(
    
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5,alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
            <Image source={{uri:post.profile_picture}} style={styles.story} />
            <Text style={{color:'white',marginLeft:5,fontWeight:'700'}}>
                {post.user}
            </Text>
        </View>

        <Text style={{color:'white',fontWeight:'900'}}>...</Text>
    </View>

)


const PostImage = ({post}) => (
    <View style={{
        width:'100%',
        height:450
    }}>
    <Image source={{uri: post.imageURL}} style={{height:'100%',resizeMode:'cover'}} />
    </View>
)


const PostFooter = () =>(
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={styles.leftFooterIconsContainer}>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageURL} />
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageURL} />
    <Icon imgStyle={[styles.footerIcon,styles.shareIcon]} imgUrl={postFooterIcons[2].imageURL} />
    </View>

    <View>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageURL} />
    </View>

    </View>
)


const Icon = ({imgStyle,imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle}  source={{uri: imgUrl}} />
    </TouchableOpacity>

)


const Likes = ({post}) => (
    <View style={{flexDirection:'row',marginTop:4}}>
    <Text style={{color:'white',fontWeight:'600'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)   


const Captions = ({post}) => (
    <View style={{marginTop:5}}>
    <Text style={{color:'white'}}>
        <Text style={{fontWeight:'600'}}>{post.user}</Text>
        <Text>  {post.caption}</Text>
        </Text>
    </View>
)

const CommentSection = ({post}) =>(
    <View style={{marginTop:5}}>
        {!!post.comments.length && (
            <Text style={{color:'gray'}}>
                View {''}
                {post.comments.length > 1 ? 'all' :''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' :'comment'}
            </Text>
        )}
    </View>
)


const Comments = ({post}) => (
    <>
    {post.comments.map((comment,index) => (
        <View key={index} style={{flexDirection:'row',marginTop:5}}>
            <Text style={{color:'white'}}>
                <Text style={{fontWeight:'bold'}}>{comment.user}</Text>{' '}
                {comment.comment}
            </Text>
        </View>
    ))}
    </>
)

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:3,
        borderColor:'#ff8501',
    },
    footerIcon:{
        width:33,
        height:33
    },
    shareIcon:{
        transform:[{rotate:'320deg'}],
        marginTop:-3
    },
    leftFooterIconsContainer:{
        flexDirection:'row',
        width:'32%',
        justifyContent:'space-between'
    }
})
