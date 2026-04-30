import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import ProductList from "../shop/ProductList.jsx";
import getApiResponseBody from "../shop/helpers/getApiResponseBody.js";

function Shop() {

    const [clothesList, setClothesList] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        (async () => {

            try {

                const menClothingList = await getApiResponseBody("https://fakestoreapi.com/products/category/men's%20clothing");
                const womenClothingList = await getApiResponseBody("https://fakestoreapi.com/products/category/women's%20clothing");

                setClothesList(shuffle(menClothingList.concat(womenClothingList)));
                setLoading(false);

            } catch(error) {

                setError(error.message);
            }

        })();

    }, []);

    return (

        <main>

            <h1>Our Collection</h1>

            <ProductList />

        </main>
    );
}

export default Shop;