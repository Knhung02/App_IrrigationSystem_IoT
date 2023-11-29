/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import {Login, Welcome, Register, Main} from './Screens';
import App from './App';
import UITab from './navigation/UITab';


AppRegistry.registerComponent(appName,() => ()=>

    <App/>
);

