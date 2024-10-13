"use client"
import Link from "next/link";
import Header from "../components/Header/Header";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <Header/>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.paragraph}>We are here to help! Whether you have questions about our products, need assistance with your order, 
        or just want to say hello, we would love to hear from you.
        For inquiries and support, please reach out to us at:</p>
        <ul className={styles.list}>
            <li>Email: saz-eazywear@hotmail.com</li>
            <li>Phone:0333-2424567</li>
        </ul>
        <br></br>
        <p className={styles.paragraph1}>We aim to respond as soon as possible.</p><br/><br/>
        <Link href="/" className={styles.link}>Go to WebPage</Link>

    </div>
  )
}

export default ContactPage;
