import { Link } from "react-router";
import styles from "../../styles/ui/ShopButton.module.css";

function ShopButton() {

    return (

        <Link to="/shop" className={styles.heroLink}>
            Explore the Collection
        </Link>
    );
}

export default ShopButton;