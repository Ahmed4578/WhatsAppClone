import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ListProfiles from './Home/ListProfiles'
import Groups from './Home/Groups'
import MyProfile from './Home/MyProfile'

const Tab=createMaterialBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="ListProfiles" component={ListProfiles}></Tab.Screen>
        <Tab.Screen name="Groups" component={Groups}></Tab.Screen>
        <Tab.Screen name="MyProfile" component={MyProfile}></Tab.Screen>
    </Tab.Navigator>
  )
}