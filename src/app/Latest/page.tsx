"use client"
import Link from "next/link";
import Header from "../components/Header/Header";
import Image from "next/image";
import styles from "./latest.module.css";

const LatestPage = () => {
  return (
    <div>
      <Header/>
      <h1 className={styles.heading}>Latest Wear</h1>
      <main className={styles.main}>
      <Image src="/Image/shoes 3.jpg" alt="ladies shoes" width={400} height={400}/>
      <Image src="/Image/shoes 4.webp" alt="ladies shoes" width={400} height={400}/>
      <Image src="/Image/shoes 7.jpg" alt="ladies shoes" width={400} height={400}/>
      </main>
      <Link href="/" className={styles.link}>Go to WebPage</Link>
    </div>
  )
}

export default LatestPage;
