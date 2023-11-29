import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://localhost:3000';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
    const token = response.data.token;

    // Save the token to AsyncStorage
    await AsyncStorage.setItem('token', token);

    return token;
  } catch (error) {
    throw error;
  }
};

// export const logout = async () => {
//   try {
//     // Implement your logout API endpoint in NestJS
//     const response = await axios.post(`${BASE_URL}/logout`);

//     // Remove the token from AsyncStorage
//     await AsyncStorage.removeItem('token');

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };