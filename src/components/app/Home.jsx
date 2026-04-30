import { Link } from "react-router";
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

                    <Link to="/shop" className={styles.heroLink}>
                        Explore the Collection
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;