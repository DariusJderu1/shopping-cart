import { FaTrash } from "react-icons/fa6";
import QuantitySelector from "../../../ui/QuantitySelector.jsx";

function CartItem() {

    return (

        <li>
            <article>
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <h2></h2>
                    <span></span>
                </div>
                
                <div>
                    <QuantitySelector />
                    <FaTrash />
                </div>
            </article>
        </li>
    );
}

export default CartItem;