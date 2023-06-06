import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero5.png"
import carte from "public/carte.png"
import Button from '@/components/button/Button'
import CarteMonde from '@/components/carteMonde/CarteMonde'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.itemLeft}>
       <h1 className={styles.heroTitle}>we deliver to your home</h1> 
       <p className={styles.heroPara}>all you have to do is contact one of our delivery partners, and he will deliver your goods to you anywhere in the world</p>
       <Button url="/couriers" text="Find courier"/>
      </div>
      <div className={styles.itemRight}>
      <Image src={Hero} alt="" className={styles.heroImg}/>
      </div>
      <CarteMonde />
    </div>
  )
}
