import ClothingCard from "./product-list/ClothingCard.jsx";

function ProductList({ clothesList }) {

    <ul>
        {clothesList.map(item => {

            return <ClothingCard item={item} key={item.id} />
        })}
    </ul>
}

export default ProductList;