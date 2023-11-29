import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { images, fontSizes } from '../constants';
import UIButton from '../components/UIButton';
import colors from '../constants/colors';
import { isValidEmail, isValidPassword } from '../utilies/Validation';
import { user_login } from '../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { login } from '../api/apiService';

function Login({ navigation }) {
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errors, setErrors] = useState('')

  //states to store email/password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isValidationOK = () => email.length > 0 && password.length > 0
    && isValidEmail(email) === true
    && isValidPassword(password) === true

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      navigation.navigate('UITab');
    } catch (error) {
      // console.error('Login failed', error.response.data.message );
      // throw error.response.data.message
      setErrors(error.response.data.message)
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 100 }}>
      {/* <SafeAreaView style={{flex:100}}> */}
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}
      >
        <SafeAreaView />
        <View style={{ flex: 20 }} />
        {/* <View style={{
              flex: 7,
              // backgroundColor:'red'
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: 50,
              }}>
                <Image
                  source={images.logo}
                  style={{
                    width: 35,
                    height: 35,
                    marginHorizontal: 10,
                  }}
                />
                <Text style={{
                  color: '#9432ff',
                  fontSize: fontSizes.h3,
                }}>
                  IRRIGATION SYSTEM
                </Text>
                <View style={{ flex: 100 }} />
                <Image
                  source={icon.question}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: 'white',
                    marginRight: 10,
                  }}
                />
              </View>
            </View> */}
        <View style={{
          flex: 20,
          // backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image source={images.logo} style={{
             height:  100,
             width: 100,
          }} />
          <Text style={{
            marginTop:10,
            marginBottom: 10,
            fontSize: fontSizes.h1,
            color: '#6c4da5',
          }}>Welcome to</Text>
          <Text style={{
            fontWeight: 'bold',
            fontSize: fontSizes.h1,
            color: '#6c4da5',
          }}>IRRIGATION SYSTEM</Text>
        </View>
        <View style={{
          flex: 10,
        }} />
        <View style={{
          flex: 50,
          alignItems: 'center',

          // backgroundColor: '#f3daff',
          // borderTopLeftRadius: 50, borderTopRightRadius: 50,

        }}>
          <View style={{
            // flex:30,
            marginHorizontal: 20,
            // backgroundColor:'pink',

            width: '70%',
          }}>
            {/* <View style={{backgroundColor:'red'}}> */}
            {/* <Text
                    style={{
                      fontSize: fontSizes.h4,

                    }}>
                    Email
                  </Text> */}
            <TextInput
              onChangeText={(text) => {
                setErrorEmail(isValidEmail(text) === true ? ' ' : 'Email is Not Correct Format')
                setEmail(text)
              }}
              placeholder="EMAIL"
              placeholderTextColor={colors.placeholder}
              style={{
                borderRadius: 30,
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: '#ced7ff',
                paddingVertical: 0,
                height: 40,
                padding: 20,
              }}
            />
            {/* </View> */}
            <Text
              style={{ color: 'red' }}>{errorEmail}
            </Text>
            {/* <View> */}
            {/* <Text
                    style={{
                      fontSize: fontSizes.h4,
                    }}>
                    Password
                  </Text> */}
            <TextInput
              onChangeText={(text) => {
                setErrorPassword(isValidPassword(text) === true ? '' : 'Password must be at least 6 character')
                setPassword(text)
              }}
              secureTextEntry={true}
              placeholder="PASSWORD"
              placeholderTextColor={colors.placeholder}
              style={{
                backgroundColor: '#ced7ff',
                borderRadius: 30,
                borderColor: 'white',
                borderWidth: 1,
                paddingVertical: 0,
                height: 40,
                padding: 20,
              }}
            />
            {/* </View> */}
            <Text
              style={{ color: 'red' }}>{errorPassword}
            </Text>
            <Text
              style={{ color: 'red' }}>{errors}
            </Text>
          </View>

          <UIButton
            disabled={isValidationOK() == false}
            title={'Sign In'.toUpperCase()}
            // onPress={() => {
            //     navigate('UITab')
            //   }}
            onPress={handleLogin}
            // onPress={() => {
            //   navigation.navigate('Register');
            // }}
            style={{
              borderColor: 'white',
              borderWidth: 1,
              width: '50%',
              borderRadius: 25,
              alignItems: 'center',
              backgroundColor: isValidationOK() === true ? colors.primary : colors.inactive,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={{
              padding: 5,
            }}
          />

        </View>
      </ImageBackground>

      {/* </SafeAreaView> */}
    </KeyboardAvoidingView>
  );
}

export default Login;


