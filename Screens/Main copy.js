
import React from 'react'
import { icon, images, fontSizes } from '../constants';
import { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Alert, ImageBackground, Text, Image, TouchableOpacity, TouchableHighlightBase, Switch, Platform } from 'react-native';
// import init from 'react_native_mqtt';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from 'react-native-progress/Circle';
import Slider from '@react-native-community/slider';
import { isIOS } from '../utilies/Device';
import { axiosGet } from './axiosGet';

function Main() {
  const [data, setData] = useState({})
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axiosGet().then(res =>{
      console.log(res.data.data);
      setData(res.data.data)
      setProgress((res.data.data.soilHumidity) / 100)
    }).catch(error =>{
      console.log(error);
    })
  }
   const {temperature, humidity, soilHumidity } = data
  //  soilHumidity = soilHumidity / 100
  //  setData(soilHumidity/100)
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
          marginBottom:20,
          shadowColor: "#000",
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
                Hi, Nhung 👋
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
              <Icon style={{marginRight: 20,}} name="rocket" size={30} color="white" />;
              </Text>
            {/* <Image
              source={icon.question}
              style={{
                height: 20,
                width: 20,
                tintColor: 'white',
                marginRight: 10,
              }}
            /> */}
          </View>
        </View>
        {/* <View style={{ flex: 2 }} /> */}
        {/* <View style={{ flex: 0 ,backgroundColor:'orange'}}> */}
        {/* <View style={styles.progressContainer}>
          <View style={styles.progressItem}>
            <ProgressBar
              //   progress={temperature}
              size={180}
              borderWidth={0}
              color="red"
              unfilledColor="lightgray"
              thickness={10}
              showsText
              //   formatText={() => `${Math.round(temperature * 100)}%`}
              formatText={() => `${Math.round(0.4 * 100)}°C`}
              direction="clockwise"
              endAngle={180} // Giữ nguyên góc 360 độ
              startAngle={90} // Đặt vị trí bắt đầu thành 0 độ để bắt đầu từ phía dưới
              strokeCap="round"
            />
            <Text style={styles.progressLabel}>Nhiệt độ (°C)</Text>
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Nhiệt độ</Text>
          </View>

          <View style={styles.progressItem}>
            <ProgressBar
              //   progress={temperature}
              size={180}
              borderWidth={0}
              color="red"
              unfilledColor="lightgray"
              thickness={10}
              showsText
              //   formatText={() => `${Math.round(temperature * 100)}%`}
              formatText={() => `${Math.round(0.7 * 100)}°F`}
              direction="clockwise"
              endAngle={180} // Giữ nguyên góc 360 độ
              startAngle={90} // Đặt vị trí bắt đầu thành 0 độ để bắt đầu từ phía dưới
              strokeCap="round"
            />
            <Text style={styles.progressLabel}>Nhiệt độ (°F)</Text>
          </View>
        </View> */}
        {/* <View style={styles.progressContainer}> */}
        {/* <View style={styles.progressItem}>
            <ProgressBar
              //   progress={humidity_mois}
              size={180}
              borderWidth={0}
              color="blue"
              unfilledColor="lightgray"
              thickness={10}
              showsText
              //   formatText={() => `${Math.round(humidity_mois * 100)}%`}
              direction="clockwise"
              endAngle={180} // Giữ nguyên góc 360 độ
              startAngle={90} // Đặt vị trí bắt đầu thành 0 độ để bắt đầu từ phía dưới
              strokeCap="round"
            />
            <Text style={styles.progressLabel}>Độ ẩm không khí</Text>
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressLabel}>Độ ẩm</Text>
          </View> */}

        <View style={{
          alignItems: 'center',
          alignSelf: 'center',
          flex: 17,
          backgroundColor: '#ccceff',
          borderRadius: 40,
          marginBottom: 30,
          width: '90%',
          paddingTop: 15,
          shadowColor: "#000",
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
            // fill="yellow" 
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
          marginTop:-10,
          // alignItems:'center'
        }}>

          <View style={{
            backgroundColor: '#ccceff', 
            width: '45%', 
            borderRadius: 30, 
            alignItems: 'center', 
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
            <Text style={{
              fontSize: fontSizes.h4, color: '#39364b', shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            }}>Air Temperature</Text>
            <Text style={{ fontSize: fontSizes.h2, marginTop: 20, color: '#7a6fa3' }}>{temperature}°C   {temperature * (9 / 5) + 32} °F</Text>
          </View>
          <View style={{
            backgroundColor: '#ccceff', width: '45%', borderRadius: 30, alignItems: 'center', justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
            <Text style={{ fontSize: fontSizes.h4, color: '#39364b', }}>Air Humidity</Text>
            <Text style={{ fontSize: fontSizes.h2, marginTop: 20, color: '#7a6fa3' }}>{humidity}%</Text>
          </View>
        </View>
        {/* <Text style={styles.tenda}>Irrigation System</Text> */}
        {/* <View style={{ flex: 30 }}> */}
        {/* <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>
            Set the threshold smaller : 50%
            {sliderValue}%
          </Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            // value={sliderValue}
            step={1}
            onValueChange={value => {
              // this.setState({sliderValue: value});
              // // Gửi MQTT khi Slider thay đổi
              // client.publish('vvn/setvalue', value.toString(), 0);
            }}
          />
        </View> */}
        <View style={{
          flex: 8, backgroundColor: '#ccceff', width: '40%', borderRadius: 30, alignItems: 'center', alignSelf: 'center', marginTop: 20, paddingTop: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}>
          <Text style={{ fontSize: fontSizes.h4, color: '#39364b' }}>Pump On/Off</Text>
          <Switch style={{ marginTop: 20, }}
            // value={pumpStatus}
            onValueChange={value => {
              //   this.setState({pumpStatus: value});
              //   // Gửi MQTT khi Switch thay đổi
              //   client.publish('vvn/pump', value ? 'on' : 'off', 0);
            }}
          />

        </View>
        {/* <View style={{ flex: 30 }}> */}
        {/* <View style={{
          flex: 8, backgroundColor: '#ccceff', width: '90%', borderRadius: 30, alignItems: 'center', alignSelf: 'center', marginTop: 20, paddingTop: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}> */}
          {/* <Text style={{ fontSize: fontSizes.h4, color: '#39364b' }}>
            Set the threshold smaller : 50%
            {sliderValue}% 
          </Text> */}
          {/* <Slider
            style={styles.slider}
            thumbTintColor="#9b8fd1"
            minimumTrackTintColor="#9b8fd1"
            maximumTrackTintColor="#lightgray"
            minimumValue={0}
            maximumValue={100}
            // value={sliderValue}
            step={1}
            onValueChange={value => {
              // this.setState({sliderValue: value});
              // // Gửi MQTT khi Slider thay đổi
              // client.publish('vvn/setvalue', value.toString(), 0);
            }}
          /> */}
        {/* </View> */}
        {/* <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Trạng thái máy bơm:
            {pumpStatus ? 'Bật' : 'Tắt'}{' '}
          </Text>

          <Switch
            // value={pumpStatus}
            onValueChange={value => {
              //   this.setState({pumpStatus: value});
              //   // Gửi MQTT khi Switch thay đổi
              //   client.publish('vvn/pump', value ? 'on' : 'off', 0);
            }}
          />
        </View> */}
        {/* </View> */}
        <View style={{flex:2}}/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    // justifyContent: "center",
    // marginTop: 40,
    // alignItems: 'center',
    // backgroundColor: "#808080",
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
