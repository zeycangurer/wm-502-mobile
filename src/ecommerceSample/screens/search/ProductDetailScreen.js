import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements';
import cartContext from '../../store/CartContext';

const ProductDetailScreen = ({route, navigation}) => {
  
  const { cart, setCart } = useContext(cartContext);

    const [product, setProduct] = useState({});

    const { id } = route.params;

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products/" + id)
        .then(res => res.json())
        .then((data) => {
            setProduct(data);
        })

    }, []);

    const addCart = (item) => {

      //Mevcut ürün sepette var mı?
      var cartItem = cart.find(q => q.id == item.id);

      if (cartItem == undefined) {

          item.quantity = 1;
          setCart([...cart, item]);
      }
      else {

          cartItem.quantity = cartItem.quantity + 1;
          setCart([...cart])

      }
  }

    

    return (
        <View>
          <Card>
            <Card.Title>{product.name}</Card.Title>
            <Card.Divider />
            <Text>Stock: {product.unitsInStock}</Text>
            <Text>Unit Price: {product.unitPrice}</Text>
            <Text>Category Id: {product.categoryId}</Text>
            <Button
                title="Add to Cart"
                buttonStyle={{
                  backgroundColor: 'rgba(78, 116, 289, 1)',
                  borderRadius: 3,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                onPress={() => addCart(product)}
              />
          </Card>
        </View>
    )
}

export default ProductDetailScreen
