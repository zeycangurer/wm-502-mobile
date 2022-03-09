import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

const FlatListSample = () => {

    
    const [products, setProducts] = useState([]);


    const flatScroll = useRef(null)

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        })

    }, [])


    const testScroll = () => {
        
        // flatScroll.current.scrollToOffset({animated:true})
    }


    const renderItem = ({item}) => {
        return <Text>{item.name}</Text>
    }
    
    return (
        <View>
            <Button onPress={() => testScroll()} title='Test Button'></Button>
           <FlatList
            ref={flatScroll}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            
           >
           </FlatList>
        </View>
    )
}

export default FlatListSample
