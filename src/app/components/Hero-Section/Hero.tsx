import Link from "next/link";
import styles from "./hero.module.css";

export default function Hero () {
  return (
    <section className={styles.hero}>
        <h2 className={styles.main}>Every step tells a story.<br/><br/> Explore our stylish and comfortable ladies shoes that empower you to express yourself.<br/><br/>
            Join us in celebrating every moment, one step at a time.</h2>
        <br/>
        <Link href="/Latest">
        <button className={styles.button}>See the Latest</button>
        </Link>
    </section>
  )
};
