import confetti from "canvas-confetti";
import styles from "../../../styles/cart/cart-content/OrderSummary.module.css";

function sumAllPrices(cartItems) {

    return cartItems.reduce((total, item) => {

        return total + (item.quantity * item.product.price);
    }, 0);
}

function OrderSummary({ cartItems }) {

    const total = sumAllPrices(cartItems);

    function handleCheckoutClick() {

        confetti({
            particleCount: 120,
            spread: 70,
            origin: {
                y: 0.65,
            },
        });
    }

    return (

        <section className={styles.orderSummary}>
            <h2 className={styles.title}>Order Summary</h2>

            <hr className={styles.divider} />

            <div className={styles.pricingContainer}>
                <span>Subtotal</span>
                <span>{`$${total.toFixed(2)}`}</span>

                <span>Shipping</span>
                <span>$5.00</span>
            </div>

            <hr className={styles.divider} />

            <div className={styles.totalContainer}>
                <h3>Total</h3>
                <span>{`$${(total + 5).toFixed(2)}`}</span>
            </div>

            <button className={styles.checkoutButton} onClick={handleCheckoutClick}>
                Proceed to Checkout
            </button>
        </section>
    );
}

export default OrderSummary;