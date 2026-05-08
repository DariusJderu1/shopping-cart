import { useState } from "react";
import styles from "../../styles/ui/QuantitySelector.module.css";

function QuantitySelector({ size }) {

    const [value, setValue] = useState(1);

    const sizeClass = size === "small" ? styles.small : "";

    function handleClick(e) {

        if(e.target.innerText === "-")
            if(value - 1 >= 1)
                setValue(value - 1);

        if(e.target.innerText === "+")
            if(value + 1 <= 100)
                setValue(value + 1);
    }

    function handleInputChange(e) {

        const number = Number(e.target.value);

        setValue(number);

        if(number === 0)
            setValue(1);
    }

    return (

        <div className={`${styles.quantitySelector} ${sizeClass}`}>
            <button type="button" className={styles.quantityButton} onClick={handleClick} aria-label="Decrease quantity">
                -
            </button>

            <input
                className={styles.quantityInput}
                type="number"
                value={value}
                onChange={handleInputChange}
                min="1"
                max="100"
                defaultValue="1"
                name="quantity-selector"
                aria-label="Quantity"
            />

            <button type="button" className={styles.quantityButton} onClick={handleClick} aria-label="Increase quantity">
                +
            </button>
        </div>
    );
}

export default QuantitySelector;