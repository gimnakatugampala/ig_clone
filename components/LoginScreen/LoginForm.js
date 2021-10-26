import React from 'react'
import { StyleSheet, Text, View ,TextInput ,Button, Pressable, TouchableOpacity } from 'react-native'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validate from 'email-validator'

export default function LoginForm() {

    const LoginFormSchema = Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        password:Yup.string().required().min(8,'Your password has to have at leaset 8 characters')
    })


    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={values =>{
                    console.log(values)
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({handleChange,handleBlur,handleSubmit,values,isValid}) => (
                <>
            <View style={[styles.inputField,{borderColor: values.email.length < 1 || Validate.validate(values.email) ? '#ccc' : 'red'}]}>
            <TextInput
                placeholder='Phone Number ,username or email'
                placeholderTextColor='#444'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
            />
            </View>

            <View style={styles.inputField}>
            <TextInput
                placeholder='Password'
                placeholderTextColor='#444'
                autoCapitalize='none'
                textContentType='password'
                autoFocus={true}
                autoCorrect={false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
            />
            </View>
            <View style={{alignItems:'flex-end',marginBottom:30}}>
                <Text style={{color:'#6BB0F5'}}>Forgot Passowrd ?</Text>
            </View>

            <Pressable titleSize={20} style={styles.button(isValid)} disabled={!isValid} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>

            <View style={styles.signupContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={{color:'#6BB0F5'}}>Signup</Text>
                </TouchableOpacity>
            </View>
            </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:70
    },
    inputField:{
        borderRadius:4,
        padding:6,
        backgroundColor:'#fafafa',
        marginBottom:10,
        borderWidth:1,
        justifyContent:'center'

    },
    button:isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4
    }),
    buttonText:{
        fontWeight:'600',
        color:'#fff',
        fontSize:20
    },
    signupContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:50
    }
})
