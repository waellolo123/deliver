import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Cont from '/public/contact.png'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.contactTitle}>Let's Keep in Touch</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image 
         src={Cont}
         alt=''
         className={styles.contactImg}
        />
      </div>
      <form className={styles.form}>
        <input type="text"  placeholder='name' className={styles.input}/>
        <input type="text"  placeholder='email' className={styles.input}/>
        <textarea 
         cols="30" rows="10"
         placeholder='message'
         className={styles.textArea}
         ></textarea>
         <Button url="#" text="Send"/>
      </form>
      </div>
    </div>
  )
}

export default Contact