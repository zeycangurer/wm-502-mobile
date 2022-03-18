import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { storeCart } from '../../helper/StorageHelper';
import { addFavorites } from '../../state/actions/favorites.action';
import cartContext from '../../store/CartContext';

const ProductDetailScreen = ({ route, navigation, favorites, onCreate }) => {

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

      storeCart([...cart, item]);
      setCart([...cart, item]);

    }
    else {

      cartItem.quantity = cartItem.quantity + 1;

      storeCart([...cart]);
      setCart([...cart])

    }
  }


  const addFavorite = () => {

    onCreate(product);
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

        <Button
          title="Add to Favorites"
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => addFavorite(product)}
        />
      </Card>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    favorites: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (data) => {
      dispatch(addFavorites(data))
    }
  }
} 


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen)

