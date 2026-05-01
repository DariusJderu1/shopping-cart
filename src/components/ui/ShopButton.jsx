import { Link } from "react-router";
import styles from "../../styles/ui/ShopButton.module.css";

function ShopButton({ text }) {

    return (

        <Link to="/shop" className={styles.heroLink}>
            {text}
        </Link>
    );
}

export default ShopButton;