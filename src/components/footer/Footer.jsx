import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {

  return (
    <div className={styles.container}>
      <h3 className={styles.footerLogo}>Delivery</h3>
      <div className={styles.footerPara}>2023 international delivery all rights reserved</div>  
      <div className={styles.socials}>
       <Image src="/social4.png" alt="" width={25} height={25} className={styles.footerIcon}/>  
       <Image src="/social3.png" alt="" width={25} height={25} className={styles.footerIcon}/>  
       <Image src="/social5.png" alt="" width={25} height={25} className={styles.footerIcon}/>  
       <Image src="/social2.png" alt="" width={25} height={25} className={styles.footerIcon}/>  
       <Image src="/social1.png" alt="" width={25} height={25} className={styles.footerIcon}/> 
      </div>  
    </div>
  )
}

export default Footer