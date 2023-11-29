import axios from 'axios'
import React from 'react'
import { images, fontSizes } from '../constants';
import { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text, Switch, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from 'react-native-progress/Circle';
import { isIOS } from '../utilies/Device';
import { axiosGet } from './axiosGet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioButtonComponent from '../components/RadioButtonComponent';

function Main(props) {
  const [data, setData] = useState({})
  const { temperature, fahrenheit, humidity, soilHumidity } = data
  const [progress, setProgress] = React.useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    getFromStorage();
    getData();
    // Set up interval to fetch data every 1 second
    const intervalId = setInterval(getData, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const getFromStorage = async () => {
    AsyncStorage.getItem('username')
      .then((value) => {
        if (value !== null) {
          setUsername(value);
        }
      })
      .catch((error) => {
        console.log('Error retrieving username:', error);
      });
  };
  const getData = async () => {
    await axiosGet().then(res => {
      // console.log(res.data.data);
      setData(res.data.data)
      setProgress((res.data.data.soilHumidity) / 100)
    }).catch(error => {
      console.log(error);
    })
  }

  // const handleGetToken = async () => {
  //   const dataToken = await AsyncStorage.getItem('AccessToken')
  //   if (!dataToken) {
  //     navigate('Login')
  //   } else {
  //     navigate('UITab')
  //   }
  // }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.background2}
        resizeMode="cover"
        style={{
          flex: 100,
        }}
      >
        <View style={{
          flex: isIOS() ? 7 : 5,
          backgroundColor: '#a695e1',
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: isIOS() ? 100 : 50,
          }}>
            {/* <Image
            source={images.logo}
            style={{
              width: 35,
              height: 35,
              marginHorizontal: 10,
            }}
          /> */}
            <View style={{ marginTop: isIOS() ? 40 : 20 }}>
              <Text style={{
                color: 'white',
                fontSize: fontSizes.h1,
                marginLeft: 20,
              }}>
                Hi, {username} 👋
              </Text>
              <Text style={{
                color: 'white',
                fontSize: fontSizes.h4,
                marginLeft: 20,
              }}>
                Welcome back
              </Text>
            </View>
            <View style={{ flex: 100 }} />
            <Text >
              <Icon style={{ marginRight: 20 }} name="bell" size={25} color="white" />;
            </Text>
          </View>
        </View>

        <View style={{
          alignItems: 'center',
          alignSelf: 'center',
          flex: 17,
          backgroundColor: '#ccceff',
          borderRadius: 40,
          marginBottom: 30,
          width: '90%',
          paddingTop: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }
        }>
          <ProgressBar
            progress={progress}
            // progress={0.8}
            size={200}
            borderWidth={0}
            color="#9b8fd1"
            unfilledColor="lightgray"
            thickness={10}
            b
            showsText
            //   formatText={() => `${Math.round(humidity_mois * 100)}%`}
            formatText={() => `${Math.round(soilHumidity)}%`}
            direction="clockwise"
            // endAngle={180} // Giữ nguyên góc 360 độ
            // startAngle={90} // Đặt vị trí bắt đầu thành 0 độ để bắt đầu từ phía dưới
            strokeCap="round"
          />
          <Text style={{
            alignSelf: 'center',
            marginTop: 10,
            color: '#39364b',
            fontSize: fontSizes.h4,
          }}>Soil moisture</Text>
          {/* </View> */}

          {/* </View> */}
        </View>
        <View style={{
          flex: 10,
          // backgroundColor:'lightblue',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: -10,
          // alignItems:'center'
        }}>

          <View style={{
            backgroundColor: '#ccceff',
            width: '45%',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
            <Text style={{
              fontSize: fontSizes.h4, color: '#39364b', shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              // {temperature * (9 / 5) + 32}
              elevation: 10,
            }}>Air Temperature</Text>
            {/* <Text style={{ fontSize: fontSizes.h2, marginTop: 20, color: '#7a6fa3' }}>{temperature}°C  {`${Math.round((temperature * (9 / 5) + 32) * 100) / 100}°F`}</Text> */}
            <Text style={{ fontSize: fontSizes.h2, marginTop: 20, color: '#7a6fa3' }}>{temperature}°C  {fahrenheit}°F</Text>

          </View>
          <View style={{
            backgroundColor: '#ccceff', width: '45%', borderRadius: 30, alignItems: 'center', justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
            <Text style={{ fontSize: fontSizes.h4, color: '#39364b' }}>Air Humidity</Text>
            <Text style={{ fontSize: fontSizes.h2, marginTop: 20, color: '#7a6fa3' }}>{humidity}%</Text>
          </View>
        </View>
        <View style={{
          flex: 10, backgroundColor: '#ccceff', width: '55%', borderRadius: 30, marginTop: 20, justifyContent: 'center', alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}>
            <Text style={{alignSelf:'center',paddingTop:12, fontSize:fontSizes.h4 , color: '#39364b'}}>Mode</Text>
            <RadioButtonComponent />
        </View>

        <View style={{ flex: 2 }} />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  tenda: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  progressItem: {
    alignItems: 'center',
  },
  progressLabel: {
    marginTop: 1,
  },
  sliderContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  sliderLabel: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 10,
  },
  slider: {
    width: 320,
    height: 60,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  status: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: 'green',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },

  on: {
    flexDirection: 'row',
    fontSize: 20,
    color: 'white',
    //textAlign: "center",
    //margin: 10,
    fontWeight: 'bold',
    backgroundColor: 'green',

    //paddingTop:20,
    //paddingBottom:20,
  },
});
export default Main
