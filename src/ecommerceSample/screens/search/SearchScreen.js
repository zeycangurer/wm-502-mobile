import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements';



const SearchScreen = ({navigation}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })

    }, []);

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
                data={products}
                renderItem={renderItem}
            >

            </FlatList>
        </View>
    )
}

export default SearchScreen
