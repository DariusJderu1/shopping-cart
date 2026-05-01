import { IoIosWarning } from "react-icons/io";
import ShopButton from "../ui/ShopButton.jsx";
import styles from "../../styles/app/ErrorPage.module.css";

function ErrorPage() {

    return (

        <main className={styles.errorContainer}>
            <div className={styles.errorContent}>
                <IoIosWarning className={styles.warningIcon} />

                <h1 className={styles.title}>Page not found</h1>

                <p className={styles.description}>The page you are looking for doesn't exist.</p>

                <ShopButton text="Back to Homepage" />
            </div>
        </main>
    );
}

export default ErrorPage;