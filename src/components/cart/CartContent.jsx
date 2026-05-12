import CartItemsList from "./cart-content/CartItemsList.jsx";
import OrderSummary from "./cart-content/OrderSummary.jsx";
import styles from "../../styles/cart/CartContent.module.css";

function CartContent({ cartItems, handleItemDelete }) {

    return (

        <main className={styles.cartContentContainer}>
            <CartItemsList cartItems={cartItems} handleItemDelete={handleItemDelete} />
            
            <OrderSummary cartItems={cartItems} />
        </main>
    );
}

export default CartContent;