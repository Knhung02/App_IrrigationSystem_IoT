import React, { useEffect, useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, KeyboardAwareScrollView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { images, fontSizes } from '../constants';
import UIButton from '../components/UIButton';
import colors from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Input from '../components/Input';
import { isIOS } from '../utilies/Device';

function Login({ navigation }) {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({})
  const [errorSubmit, setErrorSubmit] = useState('')
  const validate = () => {
    let isValid = true;

    if (!inputs.email) {
      handleError('Please enter email!', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please enter a valid email!', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please enter password!', 'password');
      isValid = false;
    } else if (inputs.password.length < 6) {
      handleError('Password must be at least 6 character', 'password');
      isValid = false;
    }

    if (isValid) {
      handleLogin();
    }
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const handleLogin = async () => {
    try {
      const data = {
        email: inputs.email,
        password: inputs.password,
      }
      const response = await axios.post('http://localhost:3000/auth/login', data);
       // Lưu AccessToken vào AsyncStorage
       console.log(JSON.stringify(response.data.accessToken))
       await AsyncStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
      // console.log(JSON.stringify(response.data.Auth.name))
      await AsyncStorage.setItem('username', JSON.stringify(response.data.Auth.name));
      navigation.navigate('UITab');
    } catch (error) {
      // console.error('Login failed', error.response.data.message );
      // throw error.response.data.message
      setErrorSubmit(error.response.data.message)
    }
  };
  return (
    <View
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <ScrollView contentContainerStyle={{ paddingTop: isIOS() ? '60%' : '50%', flexGrow: 1 }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 50,
            color: '#5c27a9',
            textAlign: 'center',
          }}>Hello</Text>
          <Text style={{
            // fontWeight: 'bold',
            textAlign: 'center',
            fontSize: fontSizes.h3,
            marginTop: 10,
            color: '#5c27a9',
          }}>Sign in to your account</Text>
          <View style={{
            // flex: 65,
            // alignItems: 'center',
            width: '70%',
            marginHorizontal: 60,
            marginTop: 50,
          }}>
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="mail"
              label="Email"
              placeholder="Enter your email address"
              error={errors.email}
            // onFocus={(text) => setErrorEmail(isValidEmail(text) === true ? ' ' : 'Email is Not Correct Format')}

            />
            <Input
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              iconName="lock"
              label="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
          </View>
          <Text
            style={{ color: 'red', textAlign: 'center' }}>{errorSubmit}
          </Text>
          <UIButton
            title={'Sign In'.toUpperCase()}
            style={{
              borderColor: 'white',
              borderWidth: 1,
              width: '50%',
              borderRadius: 25,
              alignItems: 'center',
              marginTop: 30,
              alignSelf: 'center',
              backgroundColor: colors.primary,
            }}
            onPress={validate}
          />
          <Text style={{ marginTop: 10, color: '#39364b', fontSize: fontSizes.h5, textAlign: 'center' }}>Don't have an account?</Text>


          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={{ marginTop: 3, color: '#5c27a9', fontSize: fontSizes.h5, textAlign: 'center' }}>
            Sign Up now
          </Text>

          {/* </View> */}
        </ScrollView>
      </ImageBackground>

    </View>
  );

  // return (
  //   <View>
  //     <ImageBackground
  //       source={images.background}
  //       resizeMode="cover"
  //       style={{
  //         flex: 1,
  //       }}
  //     >
  //       <ScrollView contentContainerStyle={{ paddingTop: '40%', flexGrow: 1 }}>

  //         <View style={{
  //           // flex: 20,
  //           // backgroundColor: 'orange',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>
  //           <Text style={{
  //             fontWeight: 'bold',
  //             fontSize: 50,
  //             color: '#5c27a9',
  //           }}>Hello</Text>
  //           <Text style={{
  //             // fontWeight: 'bold',
  //             fontSize: fontSizes.h3,
  //             marginTop: 10,
  //             color: '#5c27a9',
  //           }}>Sign in to your account</Text>
  //         </View>
  //         <View style={{
  //           // flex: 70,
  //           alignItems: 'center',

  //           // backgroundColor: '#f3daff',
  //           // borderTopLeftRadius: 50, borderTopRightRadius: 50,

  //         }}>
  //           <View style={{
  //             // flex:30,
  //             marginHorizontal: 20,
  //             // backgroundColor:'pink',

  //             width: '70%',
  //           }}>
  //             {/* <View style={{backgroundColor:'red'}}> */}
  //             {/* <Text
  //                   style={{
  //                     fontSize: fontSizes.h4,

  //                   }}>
  //                   Email
  //                 </Text> */}
  //             {/* <TextInput
  //             onChangeText={(text) => {
  //               setErrorEmail(isValidEmail(text) === true ? ' ' : 'Email is Not Correct Format')
  //               setEmail(text)
  //             }}
  //             placeholder="Enter email"
  //             placeholderTextColor={colors.placeholder}
  //             style={{
  //               borderRadius: 30,
  //               borderColor: 'white',
  //               borderWidth: 1,
  //               backgroundColor: '#ced7ff',
  //               paddingVertical: 0,
  //               height: 40,
  //               padding: 20,
  //             }}
  //           />
  //           {/* </View> */}

  //             {/* <View> */}
  //             {/* <Text
  //                   style={{
  //                     fontSize: fontSizes.h4,
  //                   }}>
  //                   Password
  //                 </Text> */}
  //             {/* <TextInput

  //             onChangeText={(text) => {
  //               setErrorPassword(isValidPassword(text) === true ? '' : 'Password must be at least 6 character')
  //               setPassword(text)
  //             }}
  //             secureTextEntry={true}
  //             placeholder="Enter password"
  //             placeholderTextColor={colors.placeholder}
  //             style={{
  //               backgroundColor: '#ced7ff',
  //               borderRadius: 30,
  //               borderColor: 'white',
  //               borderWidth: 1,
  //               paddingVertical: 0,
  //               height: 40,
  //               padding: 20,
  //             }}
  //           />
  //           <Text
  //             style={{ color: 'red' }}>{errorPassword}
  //           </Text> */}
  //             <Text style={{ marginLeft: 150, color: '#5c27a9', fontSize: fontSizes.h5 }}>Forgot Password?</Text>

  //             {/* </View> */}

  //             <Text
  //               style={{ color: 'red' }}>{errors}
  //             </Text>
  //           </View>

  //           <UIButton

  //             title={'Sign In'.toUpperCase()}
  //             // onPress={() => {
  //             //     navigate('UITab')
  //             //   }}
  //             onPress={handleLogin}
  //             // onPress={() => {
  //             //   navigation.navigate('Register');
  //             // }}
  //             style={{
  //               borderColor: 'white',
  //               borderWidth: 1,
  //               width: '50%',
  //               borderRadius: 25,
  //               alignItems: 'center',
  //               // backgroundColor: isValidationOK() === true ? colors.primary : colors.inactive,
  //               backgroundColor: colors.primary,
  //             }}
  //           />
  //           <Text style={{ marginTop: 7, color: '#39364b', fontSize: fontSizes.h5 }}>Don't have an account?</Text>

  //           <TouchableOpacity
  //             onPress={() => {
  //               navigation.navigate('Register');
  //             }}
  //             style={{
  //               padding: 5,

  //             }}
  //           >
  //             <Text style={{ marginTop: 3, color: '#5c27a9', fontSize: fontSizes.h5 }}>Sign up now</Text>
  //           </TouchableOpacity>

  //         </View>
  //       </ScrollView>
  //     </ImageBackground>

  //   </View>
  // );
}

export default Login;


