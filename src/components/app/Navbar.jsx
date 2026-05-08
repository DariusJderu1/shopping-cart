import { IoShirtSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import Badge from '@mui/material/Badge';
import styles from "../../styles/app/Navbar.module.css";

function Navbar({numberOfItems}) {

    return (

        <header className={styles.navbarContainer}>
            <Link className={styles.logo} to="/">
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

                <Badge
                    badgeContent={numberOfItems}
                    sx={{
                        "& .MuiBadge-badge": {
                            minWidth: "1.6rem",
                            height: "1.6rem",
                            padding: "0 0.45rem",

                            backgroundColor: "#ff6846",
                            color: "#ffffff",

                            borderRadius: "999px",

                            fontSize: "0.95rem",
                            fontWeight: 800,
                            lineHeight: 1,

                            top: "1.15rem",
                            right: "-0.15rem",
                        }
                    }}
                >
                    <NavLink to="/cart" className={ ({isActive}) => {
                        return isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
                    }}
                    >Cart</NavLink>
                </Badge>
            </nav>

            <label htmlFor="search-bar" className={styles.searchBar}>
                <IoSearch className={styles.searchIcon} />
                <input type="search" id="search-bar" placeholder="Search for products"/>
            </label>
        </header>
    );
}

export default Navbar;