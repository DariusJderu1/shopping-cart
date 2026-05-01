import ShopButton from "../ui/ShopButton.jsx";

function EmptyCart() {

    return (

        <section>
            <h2>Your cart is currently empty.</h2>
            
            <ShopButton text="Continue Shopping" />
        </section>
    );
}

export default EmptyCart;