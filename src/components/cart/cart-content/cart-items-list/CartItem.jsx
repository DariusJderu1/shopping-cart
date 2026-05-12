import { FaTrash } from "react-icons/fa6";
import QuantitySelector from "../../../ui/QuantitySelector.jsx";
import styles from "../../../../styles/cart/cart-content/cart-items-list/CartItem.module.css";

function CartItem({ item, handleItemDelete }) {

    const product = item.product;
    const quantity = item.quantity;

    return (

        <li className={styles.cartItem}>
            <article className={styles.cartItemArticle}>
                <div className={styles.productSide}>
                    <div className={styles.imageWrapper}>
                        <img className={styles.image} src={product.image} alt={product.title} />
                    </div>

                    <div className={styles.productInfo}>
                        <h2 className={styles.title}>{product.title}</h2>
                        <span className={styles.priceLine}>{`$${(product.price).toFixed(2)} each (Subtotal: $${(product.price * quantity).toFixed(2)})`}</span>
                    </div>
                </div>
                
                <div className={styles.actions}>
                    <QuantitySelector size="small" initialValue={quantity} />
                    
                    <button onClick={() => handleItemDelete(product.id)} className={styles.removeButton} type="button" aria-label={`Remove ${product.title} from cart`}>
                        <FaTrash className={styles.trashIcon} />
                    </button>
                </div>
            </article>
        </li>
    );
}

export default CartItem;