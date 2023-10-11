import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <h3>Hey, Abheer Here!</h3> 
      <h2>Discover my stories and creative ideas : )</h2>
      </div>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.txtContainer}>
          <h1 className={styles.postTitle}>Welcome to Blogopedia, Where Ideas Come to Life!</h1>
          <p className={styles.postDesc}>Explore a wide range of topics, from travel and technology to fashion and food. Connect with like-minded individuals, engage in meaningful discussions, and expand your horizons.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
