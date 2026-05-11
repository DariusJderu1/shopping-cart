import CartItemsList from "./cart-content/CartItemsList.jsx";
import OrderSummary from "./cart-content/OrderSummary.jsx";

function CartContent({ cartItems }) {

    return (

        <main>
            <div>
                <CartItemsList />
                
                <OrderSummary />
            </div>
        </main>
    );
}

export default CartContent;