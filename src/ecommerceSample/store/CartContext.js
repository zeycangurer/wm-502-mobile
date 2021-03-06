import React from 'react';
import { createContext, useState } from 'react';
import { getStoreCart } from '../helper/StorageHelper';


const cartContext = createContext(null);

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([])

    const values = {
        cart,
        setCart 
    }

    return <cartContext.Provider value={values} >{children}</cartContext.Provider>

}

export default cartContext