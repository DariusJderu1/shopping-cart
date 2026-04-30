import { IoShirtSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import styles from "../../styles/app/Navbar.module.css";

function Navbar() {

    return (

        <header className={styles.navbarContainer}>
            <Link className={styles.logo}>
                <IoShirtSharp className={styles.logoIcon} />
                <span>Wearhaus</span>
            </Link>

            <nav className={styles.navLinks}>
                <NavLink to="/" className={ ({isActive}) => {

                    return isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
                }}
                >Home</NavLink>

                <NavLink to="/shop" className={ ({isActive}) => {
                    return isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
                }}
                >Shop</NavLink>

                <NavLink to="/cart" className={ ({isActive}) => {
                    return isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
                }}
                >Cart</NavLink>
            </nav>

            <label htmlFor="search-bar" className={styles.searchBar}>
                <IoSearch className={styles.searchIcon} />
                <input type="search" id="search-bar" placeholder="Search for products"/>
            </label>
        </header>
    );
}

export default Navbar;