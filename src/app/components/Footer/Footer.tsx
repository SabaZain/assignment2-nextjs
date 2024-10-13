import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.section}>
            <p className={styles.paragraph}>&copy;2024 S@Z EazyWe@r. All rights reserved.</p>
        </footer>
    );
}

