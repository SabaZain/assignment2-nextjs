import Link from "next/link";
import styles from ".//header.module.css"


export default function Header () {
  return (
    <header className={styles.container}>
        <h3 className={styles.logo}>S@Z EazyWe@r</h3>
        <nav className={styles.navbar}>
            <ul>
                <li><Link href="/Home">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Products">Products</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
        </nav>
        
        </header>
        
  );
}


