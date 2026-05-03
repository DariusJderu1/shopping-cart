import { useOutletContext } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import ProductList from "../shop/ProductList.jsx";
import styles from "../../styles/app/Shop.module.css";

function Shop() {

    const shopData = useOutletContext();

    //==================================
    // React component return

    if(shopData.loading) {

        return (

            <main className={styles.shopContainer}>
                <CircularProgress aria-label="Loading…" />
            </main>
        );
    }

    if(!shopData.loading && shopData.error) {

        return (

            <main className={styles.shopContainer}>
                <h1 className={styles.title}>{shopData.error}</h1>
            </main>
        );
    }

    return (

        <main className={styles.shopContainer}>
            <h1 className={styles.title}>Our Collection</h1>

            <ProductList listOfClothes={shopData.clothesList} />
        </main>
    );
}

export default Shop;