import { IoShirtSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function Navbar() {

    return (

        <header>
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