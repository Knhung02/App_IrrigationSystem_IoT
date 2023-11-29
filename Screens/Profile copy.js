import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, Text, Dimensions, TouchableOpacity, View } from 'react-native';
// import {
//     user as UserRepository,
//     population as PopulationRepository
//   } from '../repositories'

  import {
    user as UserRepository,
    population as PopulationRepository,
} from '../repositories'
import { fontSizes } from '../constants';
import { convertDateTimeToString } from '../utilies/DateTime';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import colors from '../constants/colors';
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const chartConfig = {
      backgroundGradientFrom: 'white',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: 'white',
      backgroundGradientToOpacity: 1.0,
      //color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      color: (opacity) => colors.primary,
      strokeWidth: 1, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: true // optional
    }
  
function Profile(props) {
    const [user, setUser] = useState({})
    const [populations, setPopulations] = useState([])

    //call when component loaded <=> componentDidMount
    useEffect(() => {
        UserRepository.getUserDetail()
            .then(responseUser => setUser(responseUser))
        PopulationRepository.getPopulation({
            drilldowns: 'Nation',
            measures: 'Population'
        }).then(responsePopulations => setPopulations(responsePopulations))    
    },[])
    //useEffect co 2 phan: ham ()=>{}: noi dung thuc thi, phan 2 la []
    //[]: danh sach cac state thay doi, khi state thay doi thi ham () =>{} duoc goi
    //[] rỗng thì khi nào load thi chạy 1 lần
    UserRepository.getUserDetail()
    const {email, dateOfBirth, gender,userId, address, username,url,phone, registeredDate } = user
  return (
    <SafeAreaView style={{
        flex: 1,
        paddingTop: 50,
        paddingStart: 20,
        // backgroundColor: 'rgba(0,0,0,0.6)'
    }}>
    <Image
        style={{
            width: 160,
            height: 160,
            resizeMode: 'cover',
            borderRadius: 80,
            alignSelf: 'center',
            marginBottom: 20,
        }}
        source={{
            uri: url
        }} />
    <View style={{flexDirection: 'row'}}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: fontSizes.h5}}>Username:  </Text>
        <Text>{user.username}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>Email:  </Text>
        <Text>{email}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>DOB:  </Text>
        <Text>{convertDateTimeToString(dateOfBirth)}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>Gender:  </Text>
        <Text>{gender}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>Address:  </Text>
        <Text>{address}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>Phone:  </Text>
        <Text>{phone}</Text>
    </View>
    <View>      
        {/* <Text>{JSON.stringify(populations)}</Text> */}
        {/* <LineChart
            data={{
                labels: populations.sort((a, b) => parseInt(a.year)-parseInt(b.year))
                    .map(item => item.year),
                datasets: [
                  {
                    data: populations.sort((a, b) => parseInt(a.year)-parseInt(b.year))
                        .map(item => Math.floor(item.population/1000_000, 0)),
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    strokeWidth: 2 // optional
                  }
                ],
                legend: ["Population/Year"] // optional
              }}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            bezier
        /> */}
    </View>
</SafeAreaView>

  )
}

export default Profile