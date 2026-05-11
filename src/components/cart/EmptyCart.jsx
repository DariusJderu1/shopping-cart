import ShopButton from "../ui/ShopButton.jsx";
import styles from "../../styles/cart/EmptyCart.module.css";

function EmptyCart() {

    return (

        <section className={styles.emptyCartContainer}>
            <h2>Your cart is currently empty.</h2>
            
            <ShopButton text="Continue Shopping" />
        </section>
    );
}

export default EmptyCart;