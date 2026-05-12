import confetti from "canvas-confetti";

function sumAllPrices(cartItems) {

    return cartItems.reduce((total, item) => {

        return total + (item.quantity * item.product.price);
    }, 0);
}

function OrderSummary({ cartItems }) {

    const total = sumAllPrices(cartItems);

    return (

        <section>
            <h2>Order Summary</h2>

            <hr />

            <div>
                <span>Subtotal</span>
                <span>{`$${total}`}</span>
                <span>Shipping</span>
                <span>$5.00</span>
            </div>

            <hr />

            <div>
                <h3>Total</h3>
                <span>{`$${total + 5}`}</span>
            </div>

            <button onClick={() => {
                confetti({
                    particleCount: 120,
                    spread: 70,
                    origin: {
                        y: 0.65,
                    },
                });
            }}>
                Proceed to Checkout
            </button>
            
        </section>
    );
}

export default OrderSummary;