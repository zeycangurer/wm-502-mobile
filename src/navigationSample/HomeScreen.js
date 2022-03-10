import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {

    const goToAbout = () => {
        navigation.navigate('About')
    }

    const goToDetail = () => {
        navigation.navigate(
            'Detail',{
                id: 10,
                name: 'Çağatay'
            }
        )
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={() => goToAbout()} title="Go to about!"></Button>
            <Button onPress={() => goToDetail()} title='Go to detail!'></Button>
        </View>
    )
}

export default HomeScreen
