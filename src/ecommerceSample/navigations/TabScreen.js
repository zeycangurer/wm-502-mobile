import React from 'react'
import { View, Text } from 'react-native'
import HomeStackScreen from './stack/HomeStackScreen'
import SearchStackScreen from './stack/SearchStackScreen'
import CartStackScreen from './stack/CartStackScreen'
import FavoritesStackScreen from './stack/FavoritesStackScreen'
import ProfileStackScreen from './stack/ProfileStackScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();



const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen}/>
            <Tab.Screen name="Search" component={SearchStackScreen}   />
            <Tab.Screen name="Cart" component={CartStackScreen} />
            <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />

        </Tab.Navigator>
    )
}

export default TabScreen
