import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import getApiResponseBody from "./shop/helpers/getApiResponseBody.js";
import Navbar from "./app/Navbar.jsx";
import styles from "../styles/App.module.css";

function App() {

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
                setLoading(false);
            }

        })();

    }, []);

    const shopData = {

        loading, 
        error, 
        clothesList
    };

    return (

        <div className={styles.appLayout}>
            <Navbar />
            
            <Outlet context={shopData}/>
        </div>
    );
}

export default App;