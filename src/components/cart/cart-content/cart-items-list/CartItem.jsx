import { FaTrash } from "react-icons/fa6";
import QuantitySelector from "../../../ui/QuantitySelector.jsx";

function CartItem({ item }) {

    const product = item.product;
    const quantity = item.quantity;

    return (

        <li>
            <article>
                <div>
                    <img src={product.image} alt={product.title} />

                    <div>
                        <h2>{product.title}</h2>
                        <span>{`$${product.price} each (Subtotal: $${product.price * quantity})`}</span>
                    </div>
                </div>
                
                <div>
                    <QuantitySelector size="small" initialValue={quantity} />
                    <FaTrash />
                </div>
            </article>
        </li>
    );
}

export default CartItem;