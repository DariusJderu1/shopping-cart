import styles from "../../styles/app/Cart.module.css";

function Cart() {

    return (

        <main className={styles.cartContainer}>
            <div className={styles.cartHeader}>
                <h1 className={styles.title}>Shopping Cart</h1>

                <p className={styles.description}>Review your items below before proceeding to checkout.</p>
            </div>
        </main>
    );
}

export default Cart;