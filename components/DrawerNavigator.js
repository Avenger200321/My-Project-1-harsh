import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomSideBarMenu from './CustomSideBarMenu';
import HomeScreen from '../screens/HomeScreen';

export const DrawerNavigator = createDrawerNavigator({
  Home :{
    screen: HomeScreen
  },
  Notification:{
    screen:NotificationsScreen
  },
  Settings:{
    screen:SettingsScreen
  }
},
{
  contentComponent:CustomSideBarMenu
},
{initialRouteName:'Home'}
)

export default DrawerNavigator;
