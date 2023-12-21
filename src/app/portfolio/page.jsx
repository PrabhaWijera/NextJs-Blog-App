import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
 

const Portfolio = () => {
return(
    <div className={styles.container}>
        <h1 className={styles.selectTitle}>Choose a Gallery</h1>

        <div className={styles.items}>
            <Link href="/portfolio/Illustrations" className={styles.item}>
                <span className={styles.title}>Illustrations</span>
            </Link>

            <Link href="/portfolio/Web" className={styles.item}>
                <span className={styles.title}>Web Design</span>
            </Link>

            <Link href="/portfolio/Application" className={styles.item}>
                <span className={styles.title}>Application</span>
            </Link>
        </div>
    </div>
)
}

export default Portfolio;