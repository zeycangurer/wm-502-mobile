import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const TouchableSample = () => {

    const pressTest = () => {
        alert("Test message!!")
    }

    return (
        <View>
            <TouchableOpacity onPress={() => pressTest()}>
                <View>
                    <Text>Click Me!</Text>
                    <Text>Click Me!</Text>
                    <Text>Click Me!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TouchableSample
