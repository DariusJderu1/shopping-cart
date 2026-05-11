import { useOutletContext } from "react-router";
import EmptyCart from "../cart/EmptyCart.jsx";
import CartContent from "../cart/CartContent.jsx";
import styles from "../../styles/app/Cart.module.css";

function Cart() {

    const [, , cartItems] = useOutletContext();

    return (

        <main className={styles.cartContainer}>
            <header className={styles.cartHeader}>
                <h1 className={styles.title}>Shopping Cart</h1>
                <p className={styles.description}>Review your items below before proceeding to checkout.</p>
            </header>

            {cartItems.length === 0 ?
                <EmptyCart /> :
                <CartContent cartItems={cartItems} />}
        </main>
    );
}

export default Cart;