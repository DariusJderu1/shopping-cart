import CartItem from "./cart-items-list/CartItem.jsx";
import styles from "../../../styles/cart/cart-content/CartItemsList.module.css";

function CartItemsList({ cartItems, handleItemDelete, handleChangeItemQuantity }) {

    return (

        <ul className={styles.cartItemsListContainer}>
            {cartItems.map(item => {

                return <CartItem item={item} handleItemDelete={handleItemDelete} handleChangeItemQuantity={handleChangeItemQuantity} key={item.product.id} />
            })}
        </ul>
    );
}

export default CartItemsList;