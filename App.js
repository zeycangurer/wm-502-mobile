
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './src/ecommerceSample/navigations/TabScreen';
import MainStackScreen from './src/ecommerceSample/navigations/index'
import HomeStackScreen from './src/ecommerceSample/navigations/stack/HomeStackScreen';
import FavoritesStackScreen from './src/ecommerceSample/navigations/stack/FavoritesStackScreen';
import CartStackScreen from './src/ecommerceSample/navigations/stack/CartStackScreen';
import SearchStackScreen from './src/ecommerceSample/navigations/stack/SearchStackScreen';
import ProfileStackScreen from './src/ecommerceSample/navigations/stack/ProfileStackScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import cartContext, { CartProvider } from './src/ecommerceSample/store/CartContext';


const Tab = createBottomTabNavigator();
const App = () => {

  const {cart} = useContext(cartContext);

  var cartLength = cart.length == undefined ? 0 : cart.length

  return (

    <CartProvider>

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
          <Tab.Screen name="Favorites" component={FavoritesStackScreen}
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

    </CartProvider>


    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen 
    //     name="Home" 
    //     component={HomeScreen}
    //     options={{
    //       title:'Home Screen',
    //       // headerTitleStyle:{
    //       //   color:'tomato'

    //       // }
    //     }} />

    //     <Stack.Screen name="About" component={AboutScreen} />
    //     <Stack.Screen name="Detail" component={DetailScreen} />

    //   </Stack.Navigator>
    // </NavigationContainer>


  );
};


export default App;
