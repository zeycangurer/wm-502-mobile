import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-elements';

const ProductDetailScreen = ({route, navigation}) => {


    const [product, setProduct] = useState({});

    const { id } = route.params;

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products/" + id)
        .then(res => res.json())
        .then((data) => {
            setProduct(data);
        })

    }, [])

    

    return (
        <View>
          <Card>
            <Card.Title>{product.name}</Card.Title>
            <Card.Divider />
            <Text>Stock: {product.unitsInStock}</Text>
            <Text>Unit Price: {product.unitPrice}</Text>
            <Text>Category Id: {product.categoryId}</Text>

          </Card>
        </View>
    )
}

export default ProductDetailScreen
