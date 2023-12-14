
import * as React from 'react';
import { View, Text } from 'react-native';

import { Login, Main, Profile, Register, Welcome } from '../Screens';
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fontSizes } from '../constants';
import Settings from '../Screens/Setting';
const Tab = createBottomTabNavigator();
const screenOptions = ({route})=>({
    headerShown:false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,

    tabBarBackground: () => (
        <View style={{backgroundColor: colors.primary, flex: 1,}}/>
      ),
    tabBarIcon: ({focused, color,size})=>{
        let screenName = route.name
        // let iconName = '';
        // if (screenName === 'Main') {
        //     iconName = 'home'
        // } else if (screenName === 'Login') {
        //     iconName = 'heart'
        // } else if (screenName === 'Welcome') {
        //     iconName = 'cogs'
        // }
        // const iconName = screenName === 'Main' ? 'home' : (screenName === 'Settings' ? 'cogs' : (screenName === 'Welcome' ? 'cogs' : ''))
        const iconName = screenName === 'Main' ? 'home' : (screenName === 'Settings' ? 'cogs'  : '')

        return (
            <Icon
                name={iconName}
                size={25}
                color={focused ? 'white' : colors.inactive}
                style={{paddingTop:5}}
            />
        )
    },
})
function UITab() {
  return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name={'Main'}
                component={Main}
                options={{
                    tabBarLabel:'Home',
                    tabBarLabelStyle:{
                        fontSize: fontSizes.h5,
                    },
                }}
            />
            <Tab.Screen
                name={'Settings'}
                component={Settings}
                options={{
                    tabBarLabel:'Settings',
                    tabBarLabelStyle:{
                        fontSize: fontSizes.h5,
                    },
                }}
                />
        </Tab.Navigator>
  )
}

export default UITab
