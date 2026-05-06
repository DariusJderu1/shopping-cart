import { useParams, useOutletContext } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import QuantitySelector from "../ui/QuantitySelector";
import styles from "../../styles/app/ProductDetails.module.css";

function ProductDetails() {

    const shopData = useOutletContext();
    const { productId } = useParams();

    const product = shopData.clothesList.find(item => item.id === parseInt(productId));

    //======================================================

    if(shopData.loading) {

        return (

            <main className={styles.productDetailsContainer}>
                <CircularProgress aria-label="Loading…" />
            </main>
        );
    }

    if(!shopData.loading && shopData.error) {
    
        return (

            <main className={styles.productDetailsContainer}>
                <h1>{shopData.error}</h1>
            </main>
        );
    }

    return (

        <main className={styles.productDetailsContainer}>
            <article>
                <div>
                    <img src={product.image} alt={product.title} />
                </div>

                <div>
                    <h1>{product.title}</h1>
                    <span>${product.price}</span>
                    <hr />                    
                    <p>{product.description}</p>
                    <hr />

                    <form>
                        <QuantitySelector />

                        <button type="submit">
                            <FaShoppingCart />
                            Add to Cart
                        </button>
                    </form>
                </div>
            </article> 
        </main>
    );
}

export default ProductDetails;


// [
// {
// "id": 0,
// "title": "string",
// "price": 0.1,
// "description": "string",
// "category": "string",
// "image": "http://example.com"
// }
// ]