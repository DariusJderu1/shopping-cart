import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import getApiResponseBody from "../../shop/helpers/getApiResponseBody.js";

function useShopData() {

    const [clothesList, setClothesList] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        (async () => {

            try {

                const menClothingList = await getApiResponseBody("https://fakestoreapi.com/products/category/men's%20clothing");
                const womenClothingList = await getApiResponseBody("https://fakestoreapi.com/products/category/women's%20clothing");

                setClothesList(shuffle(menClothingList.concat(womenClothingList)));

            } catch(error) {

                setError(error.message);

            } finally {

                setLoading(false);
            }

        })();

    }, []);

    return {
        
        loading, 
        error, 
        clothesList
    };
}

export default useShopData;