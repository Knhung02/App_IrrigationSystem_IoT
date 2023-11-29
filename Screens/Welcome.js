import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { images, fontSizes } from '../constants';
import UIButton from '../components/UIButton';

function Welcome({navigation}) {
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
        <View style={{flex:30}}/>
        <View style={{
          flex: 10,
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
        <View style={{flex:20}}/>
        <View style={{
          flex: 40,
          alignItems: 'center',
        }}>

          <UIButton
            // disabled={isValidationOK() == false}
            title={'Sign In'.toUpperCase()}
            style={{
              borderColor: 'white',
              borderWidth: 1,
              width: '50%',
              borderRadius: 25,
              alignItems: 'center',
              backgroundColor: '#a695e1',
              marginBottom:20,
            }}
            onPress={() => {
              navigation.navigate('Login')
            }}
          />
            <UIButton
            // disabled={isValidationOK() == false}
            title={'Sign Up'.toUpperCase()}
            style={{
              borderColor: 'white',
              borderWidth: 1,
              width: '50%',
              borderRadius: 25,
              alignItems: 'center',
              backgroundColor: '#a695e1',
            }}
            onPress={() => {
              navigation.navigate('Login')
            }}
          />
          {/* <Text style={{
            fontSize: fontSizes.h4,
            alignSelf: 'center',
            color: '#39364b',
          }}>Want to register new Account nhungh?
          </Text> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register')
            }}
            style={{
              padding: 5,
            }}
          >
            {/* <Text style={{
              fontSize: fontSizes.h5,
              alignSelf: 'center',
              textDecorationLine: 'underline',
              color: '#39364b',
            }}
            >Register</Text> */}
          </TouchableOpacity>

        </View>
      </ImageBackground>

      {/* </SafeAreaView> */}
    </KeyboardAvoidingView>
  );
}

export default Welcome;
