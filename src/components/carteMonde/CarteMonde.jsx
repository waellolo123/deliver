import Image from 'next/image'
import React from 'react'
import styles from './carteMonde.module.css'
import carte from '../../../public/carte.png'

const CarteMonde = () => {
  return (
    <div className={styles.container}>
      <Image 
      src={carte}
      className={styles.carteImg}/>
    </div>
  )
}

export default CarteMonde