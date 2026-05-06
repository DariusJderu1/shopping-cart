import { Link } from "react-router";
import styles from "../../../styles/shop/product-list/ClothingCard.module.css";

function ClothingCard({ item }) {

    return (

        <li className={styles.clothingCard}>
            <Link to={`/shop/${item.id}`}>
                <article>
                    <div className={styles.imageWrapper}>
                        <img className={styles.image} src={item.image} alt={item.title} />
                    </div>
                     <div className={styles.cardBody}>
                        <h2 className={styles.title}>{item.title}</h2>
                
                        <span className={styles.price}>${item.price}</span>
                    </div>
                </article>
            </Link>
        </li>
    );
}

export default ClothingCard;