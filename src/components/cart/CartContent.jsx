import CartItemsList from "./cart-content/CartItemsList.jsx";
import OrderSummary from "./cart-content/OrderSummary.jsx";
import styles from "../../styles/cart/CartContent.module.css";

function CartContent({ cartItems }) {

    return (

        <main className={styles.cartContentContainer}>
            <CartItemsList cartItems={cartItems} />
            
            <OrderSummary cartItems={cartItems} />
        </main>
    );
}

export default CartContent;