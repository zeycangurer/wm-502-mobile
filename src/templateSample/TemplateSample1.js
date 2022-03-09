import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TemplateSample1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Friday, 15 Dec</Text>
                <Text>Search</Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleMainText}>Learn</Text>
                <Text>Choose the part of the body</Text>
            </View>

            <View style={styles.box}>
                <Text>Box-1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box-1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box-1</Text>
            </View>
            <View style={styles.box}>
                <Text>Box-1</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:40,
        flex:1,
        flexDirection:'column'
    },
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        flex:3
    },
    titleMainText:{
        fontSize:40,
        fontWeight:'bold'
    },
    box:{
        flex:3
    }
})

export default TemplateSample1
