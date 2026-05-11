import CartItem from "./cart-items-list/CartItem.jsx";

function CartItemsList({ cartItems }) {

    return (

        <ul>
            {cartItems.map(item => {

                return <CartItem item={item} key={item.product.id} />
            })}
        </ul>
    );
}

export default CartItemsList;