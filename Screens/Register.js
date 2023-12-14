import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { images, fontSizes } from '../constants';
import UIButton from '../components/UIButton';
import colors from '../constants/colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../components/Input';

function Register({ navigation }) {
  //state => when a state is changed => UI is reloaded
  //use Effect()
  //states for validating
  const [inputs, setInputs] = React.useState({
    email: '',
    name: '',
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

    if (!inputs.name) {
      handleError('Please enter name!', 'name');
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
      handleRegister();
    }
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const handleRegister = async () => {
    try {
      const data = {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      }
      await axios.post('http://localhost:3000/auth/register', data);
      // console.log(response.data)
      navigation.navigate('Login');
    } catch (error) {
      // console.error('Login failed', error.response.data.message );
      // throw error.response.data.message
      setErrorSubmit(error.response.data.message)
    }
  };
  return (
    <View style={{ flex: 100 }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <ScrollView contentContainerStyle={{ paddingTop: '40%', flexGrow: 1 }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#5c27a9',
            textAlign: 'center',
            marginVertical: 40,
          }}>Create account</Text>
          <View style={{
            // flex: 65,
            // alignItems: 'center',
            width: '70%',
            marginHorizontal: 60,
          }}>
            <Input
              onChangeText={text => handleOnchange(text, 'name')}
              onFocus={() => handleError(null, 'name')}
              iconName="user"
              placeholder="Enter your name"
              error={errors.name}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="mail"
              label="Email"
              placeholder="Enter your email address"
              error={errors.email}

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
            title={'Sign Up'.toUpperCase()}
            style={{
              borderColor: 'white',
              borderWidth: 1,
              width: '50%',
              borderRadius: 25,
              alignItems: 'center',
              marginVertical: 30,
              alignSelf: 'center',
              backgroundColor: colors.primary,
            }}
            onPress={validate}
          />
          <Text style={{ color: '#39364b', fontSize: fontSizes.h5, textAlign: 'center' }}>Already have an account?</Text>

          <Text
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={{ marginTop: 3, color: '#5c27a9', fontSize: fontSizes.h5, textAlign: 'center' }}>
            Sign In now
          </Text>

          {/* </View> */}
        </ScrollView>
      </ImageBackground>

    </View>
  );
}

export default Register
