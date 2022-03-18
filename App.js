
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
import MainTab from './src/ecommerceSample/MainTab';
import FavoriteReducer from './src/ecommerceSample/state/reducers/favorites.reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const App = () => {

  // const {cart} = useContext(cartContext);

  // var cartLength = cart.length == undefined ? 0 : cart.length

  const store = createStore(
    FavoriteReducer
  )


  return (

    <Provider store={store}>
      <CartProvider>
        <MainTab></MainTab>
      </CartProvider>
    </Provider>



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
