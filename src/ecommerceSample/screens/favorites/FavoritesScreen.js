import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

const FavoritesScreen = ({navigation, favorites}) => {





    const goToDetail = (id) => {

        navigation.navigate('ProductDetail',{id:id})
    }

    const renderItem = ({item}) => {

        return (<>

            <ListItem key={item.id} bottomDivider onPress={() => goToDetail(item.id)}>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.unitPrice.toFixed(2)}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </>)

    }

    return (
        <View>
            <FlatList
                data={favorites}
                renderItem={renderItem}
            >

            </FlatList>
        </View>
    )

}

const mapStateToProps = (state) => {
    return {
      favorites: state
    };
  }

export default connect(mapStateToProps)(FavoritesScreen)
