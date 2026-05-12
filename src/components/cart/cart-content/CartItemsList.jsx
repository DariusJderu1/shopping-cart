import CartItem from "./cart-items-list/CartItem.jsx";
import styles from "../../../styles/cart/cart-content/CartItemsList.module.css";

function CartItemsList({ cartItems }) {

    return (

        <ul className={styles.cartItemsListContainer}>
            {cartItems.map(item => {

                return <CartItem item={item} key={item.product.id} />
            })}
        </ul>
    );
}

export default CartItemsList;