import ClothingCard from "./product-list/ClothingCard.jsx";

function ProductList({ listOfClothes }) {

    return (

        <ul>
            {listOfClothes.map(item => {

                return <ClothingCard item={item} key={item.id} />
            })}
        </ul>
    );
    
}

export default ProductList;