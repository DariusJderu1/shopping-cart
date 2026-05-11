import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./app/Navbar.jsx";
import useShopData from "./app/hooks/useShopData.js";
import styles from "../styles/App.module.css";

function cartHasProduct(cartItems, id) {

    for(const item of cartItems)
        if(item.productId === id)
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
        if(cartHasProduct(cartItems, newItem.productId)) {

            const newCartItemsArray = cartItems.map(item => {

                if(item.productId !== newItem.productId)
                    return item;

                else
                    return {productId: item.productId, quantity: item.quantity + newItem.quantity}
            });

            setCartItems(newCartItemsArray);
        }
            
        else
            setCartItems([...cartItems, newItem]);

    }

    return (

        <div className={styles.appLayout}>
            <Navbar numberOfItems={totalNumberOfItems(cartItems)}/>
            
            <Outlet context={[shopData, handleItemAdd, cartItems]}/>
        </div>
    );
}

export default App;