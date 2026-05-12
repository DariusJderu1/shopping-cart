import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./app/Navbar.jsx";
import useShopData from "./app/hooks/useShopData.js";
import styles from "../styles/App.module.css";

function cartHasProduct(cartItems, id) {

    for(const item of cartItems)
        if(item.product.id === id)
            return true;

    return false;
}

function totalNumberOfItems(cartItems) {

    return cartItems.reduce((total, currentItem) => {

        return total + currentItem.quantity;
        
    }, 0);
}

function App() {

    const shopData = useShopData();
    const [cartItems, setCartItems] = useState([]);

    function handleItemAdd(newItem) {

        // { productId: -, quantity: - }
        if(cartHasProduct(cartItems, newItem.product.id)) {

            const newCartItemsArray = cartItems.map(item => {

                if(item.product.id !== newItem.product.id)
                    return item;

                else
                    return {product: item.product, quantity: item.quantity + newItem.quantity};
            });

            setCartItems(newCartItemsArray);
        }
            
        else
            setCartItems([...cartItems, newItem]);
    }

    function handleItemDelete(id) {

        const newCartItemsArray = cartItems.filter(item => item.product.id !== id);

        setCartItems(newCartItemsArray);
    }

    function handleChangeItemQuantity(id, quantity) {

        const newCartItemsArray = cartItems.map(item => {

            if(item.product.id !== id)
                return item;

            else
                return {product: item.product, quantity: quantity};
                
        });

        setCartItems(newCartItemsArray);
    }

    return (

        <div className={styles.appLayout}>
            <Navbar numberOfItems={totalNumberOfItems(cartItems)}/>
            
            <Outlet context={[shopData, handleItemAdd, cartItems, handleItemDelete, handleChangeItemQuantity]}/>
        </div>
    );
}

export default App;