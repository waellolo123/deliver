import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from "next/navigation"

async function getData(id){
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if(!res.ok){
     return notFound()
  }
  return res.json()
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
     <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>{data.desc}</p>
        <div className={styles.author}>
          <Image 
           src="https://cdn.pixabay.com/photo/2014/09/17/11/47/man-449406_1280.jpg"
           alt=''
           width={40}
           height={40}
           className={styles.avatar}
          />
          <h3>{data.username}</h3>
        </div>     
      </div>
      <div className={styles.imageContainer}>
        <Image 
         src={data.image}
         width={400}
         height={300}
         alt=''
         className={styles.containerImage}
        />
      </div>
     </div>
     <div  className={styles.content}>
          <p  className={styles.text}>{data.content}</p>
        </div>
    </div>
  )
}

export default BlogPost