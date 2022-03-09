import React from 'react'
import { View, Text, TextInput } from 'react-native'

const TextInputSample = () => {


    const [name, setName] = useState('');


    return (
        <View>
                <TextInput onChangeText={setName} value={name}/>
        </View>
    )
}

export default TextInputSample
