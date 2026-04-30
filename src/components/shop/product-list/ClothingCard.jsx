function ClothingCard({ item }) {

    return (

        <li>
            <article>
                <img src={item.image} alt={item.title} />

                <div>
                    <h2>{item.title}</h2>
                    <span>{item.price}</span>
                </div>
            </article>
        </li>
    );
}

export default ClothingCard;