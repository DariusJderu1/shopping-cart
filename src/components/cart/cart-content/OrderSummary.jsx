import confetti from "canvas-confetti";

function OrderSummary() {

    return (

        <section>
            <h2>Order Summary</h2>

            <hr />

            <div>
                <span>Subtotal</span>
                <span></span>
                <span>Shipping</span>
                <span></span>
            </div>

            <hr />

            <div>
                <h3>Total</h3>
                <span></span>
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