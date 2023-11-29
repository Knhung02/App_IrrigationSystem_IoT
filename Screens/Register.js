import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { icon, images, fontSizes } from '../constants';
import UIButton from '../components/UIButton';
import colors from '../constants/colors';
import { isValidEmail, isValidPassword } from '../utilies/Validation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Register({ navigation }) {
    //state => when a state is changed => UI is reloaded
    //use Effect()
    //states for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errors, setErrors] = useState('')
    //states to store email/password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const isValidationOK = () => email.length > 0 && password.length > 0 && name.length > 0
      && isValidEmail(email) === true
      && isValidPassword(password) === true



    const handleRegister = async () => {
      try {
        const response = await axios.post('http://localhost:3000/auth/register', {
          email,
          password,
          name,
        });
        
        // console.log(response.data)
            const Username  = response.data.data.name;
      // Store the token securely on the device
      await AsyncStorage.setItem('Username', Username);
        navigation.navigate('Login');
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
          <View style={{
            flex: 50,
            // backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 50, borderTopRightRadius: 50,
          }}>
            <Image source={images.logo} style={{
              height: 90,
              width: 90,
            }} />
            <Text style={{
              marginBottom: 7,
              fontSize: fontSizes.h1,
              color: '#0e5529',
            }}>Welcome to</Text>
            <Text style={{
              fontWeight: 'bold',
              fontSize: fontSizes.h1,
              color: '#0e5529',
            }}>IRRIGATION SYSTEM</Text>
          </View>
          {/* <View style={{
                flex: 10,
                // backgroundColor: 'blue',
              }} /> */}
          <View style={{
            flex: 50,
            alignItems: 'center',
            // backgroundColor: 'pink',
          }}>
            <View style={{
              // flex:30,
              marginHorizontal: 20,
              // backgroundColor:'pink',
              width: '70%',
            }}>
              <TextInput
                onChangeText={(text) => {
                  setErrorEmail(isValidEmail(text) === true ? ' ' : 'Email is Not Correct Format')
                  setEmail(text)
                }}
                placeholder="Email"
                placeholderTextColor={colors.placeholder}
                style={{
                  borderRadius: 30,
                  borderColor: 'white',
                  borderWidth: 1,
                  backgroundColor: '#74b848',
                  paddingVertical: 0,
                  height: 40,
                  padding: 20,
                }}
              />
              {/* </View> */}
              <Text
                style={{ color: 'red' }}>{errorEmail}
              </Text>
              <TextInput
                onChangeText={(text) => {
                  setErrorPassword(isValidPassword(text) === true ? '' : 'Password must be at least 6 character')
                  setPassword(text)
                }}
                secureTextEntry={true}
                placeholder="PASSWORD"
                placeholderTextColor={colors.placeholder}
                style={{
                  backgroundColor: '#74b848',
                  borderRadius: 30,
                  borderColor: 'white',
                  borderWidth: 1,
                  paddingVertical: 0,
                  height: 40,
                  padding: 20,
                }}
              />
              <TextInput
                onChangeText={(text) => {
                  // setErrorPassword(isValidationOK() === true ? '' : 'Please Enter your name!')
                  setName(text)
                }}
                secureTextEntry={true}
                placeholder="NAME"
                placeholderTextColor={colors.placeholder}
                style={{
                  backgroundColor: '#74b848',
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
             
              <Text
                style={{ color: 'red' }}>{errorPassword}
              </Text>
            </View>
            <UIButton
              disabled={isValidationOK() == false}
              title={'Sign Up'.toUpperCase()}
              style={{
                borderColor: 'white',
                borderWidth: 1,
                width: '50%',
                borderRadius: 25,
                alignItems: 'center',
                backgroundColor: isValidationOK() === true ? colors.primary : colors.inactive,
              }}
              onPress={handleRegister}
            />
            <Text style={{
              fontSize: fontSizes.h4,
              alignSelf: 'center',
              color: '#0e5529',
            }}>Want to register new Account ?
            </Text>

          </View>
        </ImageBackground>
        {/* </SafeAreaView> */}
      </KeyboardAvoidingView>
    );
}

export default Register
