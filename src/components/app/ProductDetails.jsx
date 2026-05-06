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

            <main className={styles.productDetailsPageContainer}>
                <CircularProgress aria-label="Loading…" />
            </main>
        );
    }

    if(!shopData.loading && shopData.error) {
    
        return (

            <main className={styles.productDetailsPageContainer}>
                <h1 className={styles.title}>{shopData.error}</h1>
            </main>
        );
    }

    if(!product) {

        return (

            <main className={styles.productDetailsPageContainer}>
                <h1 className={styles.title}>Product not found</h1>
            </main>
        );
    }

    return (

        <main className={styles.productDetailsPageContainer}>
            <article className={styles.productContainer}>
                <div className={styles.imageWrapper}>
                    <img className={styles.productImage} src={product.image} alt={product.title} />
                </div>

                <div className={styles.detailsCard}>
                    <div className={styles.productInfo}>
                        <h1 className={styles.title}>{product.title}</h1>
                        <span className={styles.price}>${product.price}</span>
                    </div>

                    <hr className={styles.divider} />   

                    <p className={styles.description}>{product.description}</p>

                    <hr className={styles.divider} />

                    <form className={styles.formContainer}>
                        <QuantitySelector />

                        <button className={styles.addToCartButton} type="submit">
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