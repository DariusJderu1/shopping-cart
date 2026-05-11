import CartItemsList from "./cart-content/CartItemsList.jsx";
import OrderSummary from "./cart-content/OrderSummary.jsx";

function CartContent({ cartItems }) {

    return (

        <main>
            <div>
                <CartItemsList cartItems={cartItems} />
                
                <OrderSummary />
            </div>
        </main>
    );
}

export default CartContent;