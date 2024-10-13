"use client"
import Link from "next/link";
import Header from "../components/Header/Header";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <Header/>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.paragraph}>Welcome to <span className={styles.name}>S@Z EazyWe@r</span>, stylish and comfortable ladies' shoes!<br/> Our passion for footwear drives us to curate a collection that blends fashion, quality, and affordability.
         we believe that every woman deserves to feel confident and beautiful in her shoes, whether she is heading to work, enjoying a night out, or relaxing at home. 
         We carefully select each pair to ensure they meet our high standards of comfort and style.
         We are committed to providing exceptional customer service, making your shopping experience as delightful as possible. Our team is here to help you find the perfect pair.</p>
         <Link href="/" className={styles.link}>Go to WebPage</Link>
  
    </div>
  )
    
}

export default AboutPage;
