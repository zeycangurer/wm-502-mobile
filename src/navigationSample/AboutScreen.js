import React from 'react'
import { View, Text, Button } from 'react-native'

const AboutScreen = ({navigation}) => {
    return (
        <View>
            <Text>About Screen</Text>
            <Button onPress={() => navigation.goBack()} title='Go Back!'></Button>
        </View>
    )
}

export default AboutScreen
