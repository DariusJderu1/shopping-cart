import ClothingCard from "./product-list/ClothingCard.jsx";
import styles from "../../styles/shop/ProductList.module.css";

function ProductList({ listOfClothes }) {

    return (

        <ul className={styles.itemsContainer}>
            {listOfClothes.map(item => {

                return <ClothingCard item={item} key={item.id} />
            })}
        </ul>
    );
    
}

export default ProductList;