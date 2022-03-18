import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/HomeScreen'
import React from 'react'


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {


    return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
        <HomeStack.Screen name="HomePage" component={HomeScreen} />
      </HomeStack.Navigator>
    )
}

export default HomeStackScreen
