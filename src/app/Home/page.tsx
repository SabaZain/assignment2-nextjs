"use client"
import Link from "next/link";
import Header from "../components/Header/Header";
import Image from "next/image";
import styles from "./home.module.css";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <p className={styles.paragraph}>Welcome to <span className={styles.name}>SAZ EazyWear!</span>  Step into style and comfort.<br /><br />
          We believe that the right pair of shoes can elevate any outfit and boost your confidence.</p>
        <br></br>

        <Image src="/Image/Homepic.jpg" alt="ladies shoes" width={750} height={350} /><br /><br />
        <Link href="/" className={styles.link}>Go to WebPage</Link>
      </main>

    </div>

  )
}

export default HomePage;
