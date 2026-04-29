import { IoShirtSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import styles from "../../styles/app/Navbar.module.css";

function Navbar() {

    return (

        <header className={styles.navbarContainer}>
            <div>
                <IoShirtSharp />
                <a>Wearhaus</a>
            </div>

            <nav>
                <a>Home</a>
                <a>Shop</a>
                <a>Cart</a>
            </nav>

            <label htmlFor="search-bar">
                <IoSearch />
                <input type="search" id="search-bar"/>
            </label>
        </header>
    );
}

export default Navbar;