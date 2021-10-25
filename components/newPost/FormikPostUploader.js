import React, { useState } from 'react'
import { StyleSheet, Text, View ,TextInput,Image, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

const PLACEHOLDER_IMG = 'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg'

const uploadPostSchema = Yup.object().shape({
    imageURL:Yup.string().url().required('A URL is required'),
    caption:Yup.string().max(2200,'Caption has reached the character limit')
})

export default function FormikPostUploader({navigation}) {

    const [thumbnailURL, setthumbnailURL] = useState(PLACEHOLDER_IMG)

    return (
        <Formik
            initialValues={{caption:'',imageURL:''}}
            onSubmit={(values) =>{
                 console.log(values)
                 navigation.goBack()
                }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({handleBlur,handleChange,handleSubmit,values,errors,isValid}) => 
               <>
                <View style={{margin:20,justifyContent:'space-between',flexDirection:'row'}}>
                    <Image source={{uri:validUrl.isUri(thumbnailURL) ? thumbnailURL : PLACEHOLDER_IMG}} style={{width:100,height:100}} />
                
                <View style={{flex:1,marginLeft:12}}>
                <TextInput
                style={{color:'white',fontSize:20}}
                 placeholder='Write a Caption...'
                 placeholderTextColor='gray'
                 multiline={true}
                 onChangeText={handleChange('caption')}
                 onBlur={handleBlur('caption')}
                 value={values.caption}
                />
                </View>
                </View>

                <Divider width={0.2} orientation="vertical" />
                <TextInput
                onChange={(e) => setthumbnailURL(e.nativeEvent.text)}
                style={{color:'white',fontSize:18}}
                 placeholder='Enter image Url..'
                 placeholderTextColor='gray'
                 onChangeText={handleChange('imageURL')}
                 onBlur={handleBlur('imageURL')}
                 value={values.imageURL}
                />

                {errors.imageURL && (
                    <Text style={{fontSize:10,color:'red'}}>{errors.imageURL}</Text>
                )}

                <Button onPress={handleSubmit} title="Share" disabled={!isValid} />

               </>
            }

        </Formik>
    )
}

const styles = StyleSheet.create({})
