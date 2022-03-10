import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabScreen from './TabScreen'

const MainStack = createStackNavigator();

const MainStackScreen = ({navigation,params}) => {

    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="ECommerce" component={TabScreen} />
        </MainStack.Navigator>
    )
}

export default MainStackScreen