import React from 'react'
import { StyleSheet, Text, View ,TextInput ,Button, Pressable, TouchableOpacity } from 'react-native'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validate from 'email-validator'

export default function SignupForm({navigation}) {

    
    const SingupFormSchema = Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        username:Yup.string().required().min(2,'A Username is required'),
        password:Yup.string().required().min(8,'Your password has to have at leaset 8 characters')
    })


    return (
        <View style={styles.wrapper}>
        <Formik
            initialValues={{email:'',username:'',password:''}}
            onSubmit={values =>{
                console.log(values)
            }}
            validationSchema={SingupFormSchema}
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

        <View style={[styles.inputField,{borderColor: values.username.length || Validate.validate(values.email) ? '#ccc' : 'red'}]}>
        <TextInput
            placeholder='username'
            placeholderTextColor='#444'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
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
            <Text style={styles.buttonText}>Signup</Text>
        </Pressable>

        <View style={styles.signupContainer}>
            <Text>Already have an Account? </Text>
            <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                <Text style={{color:'#6BB0F5'}}>Signin</Text>
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
