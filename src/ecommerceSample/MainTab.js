import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import CartStackScreen from './navigations/stack/CartStackScreen';
import FavoritesStackScreen from './navigations/stack/FavoritesStackScreen';
import HomeStackScreen from './navigations/stack/HomeStackScreen';
import ProfileStackScreen from './navigations/stack/ProfileStackScreen';
import SearchStackScreen from './navigations/stack/SearchStackScreen';
import cartContext from './store/CartContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getStoreCart, storeCart } from './helper/StorageHelper';
import FavoritesScreen from './screens/favorites/FavoritesScreen';


const Tab = createBottomTabNavigator();


const MainTab = () => {

    const { cart, setCart } = useContext(cartContext);

    var cartLength = cart.length == undefined ? 0 : cart.length

    useEffect(() => {
       
        getStoreCart().then((data) => {
            console.log('Data', data);
             setCart(data);
        })

    }, [])

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />

                <Tab.Screen name="Search" component={SearchStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="archive-search" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Cart" component={CartStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cart" color={color} size={26} />
                        ),
                        tabBarBadge: cartLength
                    }}
                />
                <Tab.Screen name="Favorites" component={FavoritesScreen}
                    options={{

                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="star" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="face-man-profile" color={color} size={26} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default MainTab
