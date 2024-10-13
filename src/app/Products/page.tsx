"use client"
import Link from "next/link";
import Header from "../components/Header/Header";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <div>
      <Header/>
      <h1 className={styles.heading}>Products List</h1>
      <ol>
        <li className={styles.list}>Flats</li>
        <li className={styles.list}>Heels</li>
        <li className={styles.list}>Block Heels</li>
        <li className={styles.list}>Wedge Sandals</li>
        <li className={styles.list}>Sneakers</li>
        <li className={styles.list}>Loafers</li>
      </ol><br/><br/>
      <Link href="/" className={styles.link}>Go to WebPage</Link>
    </div>
  )
}

export default ProductsPage;
