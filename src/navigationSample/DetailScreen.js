import React from 'react'
import { View, Text } from 'react-native'

const DetailScreen = ({route, navigation}) => {

    const { id, name } = route.params;

    return (
        <View>
            <Text>Id: {id}</Text>
            <Text>Name: {name}</Text>

        </View>
    )
}

export default DetailScreen
