import ShopButton from "../ui/ShopButton.jsx";
import styles from "../../styles/app/Home.module.css";

function Home() {

    return (

        <main className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Build a wardrobe
                        <br />
                        you actually wear.
                    </h1>

                    <p className={styles.heroText}>
                        Discover a handpicked collection of clothing made for simple outfits,
                        clean looks, and pieces you can wear again and again.
                    </p>

                    <ShopButton />
                </div>
            </section>
        </main>
    );
}

export default Home;