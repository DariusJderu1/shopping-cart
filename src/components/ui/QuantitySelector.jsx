function QuantitySelector() {

    return (

        <div>
            <button type="button">-</button>
            <input type="number" min="1" max="100"/>
            <button type="button">+</button>
        </div>
    );
}

export default QuantitySelector;