import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Livreur from 'public/deliveryMan.jpg'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src={Livreur} 
        width={'100%'} height={400}
        alt='' 
        className={styles.aboutImg}
        />
        <div className={styles.imgTexts}>
          <h1 className={styles.imgTitle}>who are we? where do we work?</h1>
          <h2 className={styles.imgDesc}>your property is in very good hands</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.aboutItem}>
       <h3 className={styles.aboutItemTitle}>Our Partners</h3>  
       <p className={styles.aboutItemDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cum animi debitis reiciendis quae possimus eveniet suscipit doloribus perspiciatis dolores quaerat repudiandae consequuntur rem 
       <br />
       <br />
       dolorum eum dolorem dolor, fugit magnam architecto delectus rerum harum! Quas blanditiis provident tempore nisi placeat, unde quasi cum eligendi vel obcaecati quia, repudiandae accusantium. Ducimus.</p>  
      </div>
      <div className={styles.aboutItem}>
       <h3 className={styles.aboutItemTitle}>Our Work Territories</h3>  
       <p className={styles.aboutItemDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cum animi debitis reiciendis quae possimus eveniet suscipit doloribus perspiciatis dolores quaerat repudiandae consequuntur rem 
       <br />
       <br />
       dolorum eum dolorem dolor, fugit magnam architecto delectus rerum harum! Quas blanditiis provident tempore nisi placeat, unde quasi cum eligendi vel obcaecati quia, repudiandae accusantium. Ducimus.</p> 
       <Button url="/contact" text="Contact"/>
      </div>
      </div>
    </div>
  )
}

export default About




