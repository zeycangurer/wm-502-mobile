import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../../screens/search/SearchScreen';
import ProductDetailScreen from '../../screens/search/ProductDetailScreen';



const SearchStack = createNativeStackNavigator();

const SearchStackScreen = ({navigation}) => {

    return (
        <SearchStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <SearchStack.Screen name="Search" component={SearchScreen} />
            <SearchStack.Screen name="ProductDetail" component={ProductDetailScreen} />

          </SearchStack.Navigator>
        )
}

export default SearchStackScreen
