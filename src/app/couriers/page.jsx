import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Couriers = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>choose a courier based on your location</h1>
      <div className={styles.items}>
        <Link href="/couriers/africa" className={styles.item}>
          <span className={styles.title}>Africa</span>
        </Link>
        <Link href="/couriers/europe" className={styles.item}>
          <span className={styles.title}>Europe</span>
        </Link>
        <Link href="/couriers/united" className={styles.item}>
          <span className={styles.title}>United States</span>
        </Link>
      </div>
    </div>
  )
}

export default Couriers

















