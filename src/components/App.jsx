import { Outlet } from "react-router";
import Navbar from "./app/Navbar.jsx";
import useShopData from "./app/hooks/useShopData.js";
import styles from "../styles/App.module.css";

function App() {

    const shopData = useShopData();

    return (

        <div className={styles.appLayout}>
            <Navbar />
            
            <Outlet context={shopData}/>
        </div>
    );
}

export default App;