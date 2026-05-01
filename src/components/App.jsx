import { Outlet } from "react-router";
import Navbar from "./app/Navbar.jsx";
import styles from "../styles/App.module.css";

function App() {

    return (

        <div className={styles.appLayout}>
            <Navbar />
            
            <Outlet />
        </div>
    );
}

export default App;