import styles from "../../styles/ui/QuantitySelector.module.css";

function QuantitySelector() {

    return (

        <div className={styles.quantitySelector}>
            <button type="button" className={styles.quantityButton} aria-label="Decrease quantity">
                -
            </button>

            <input
                className={styles.quantityInput}
                type="number"
                min="1"
                max="100"
                defaultValue="1"
                aria-label="Quantity"
            />

            <button type="button" className={styles.quantityButton} aria-label="Increase quantity">
                +
            </button>
        </div>
    );
}

export default QuantitySelector;