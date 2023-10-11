import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Social from '../social/Social'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/bloglogo.png" alt="" width={50} height={50} className={styles.logoImg}/>
           <h1 className={styles.logoTxt}>BlogoPedia</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facilis deserunt voluptates beatae vero. Pariatur quam repellendus minus animi rerum ex nobis voluptates! Esse doloremque dicta magni, aspernatur explicabo sequi.</p>
        <Social width={18} height={18} />
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" >Home</Link>
          <Link href="/" >Blog</Link>
          <Link href="/" >About</Link>
          <Link href="/" >Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" >Style</Link>
          <Link href="/" >Fashion</Link>
          <Link href="/" >Coding</Link>
          <Link href="/" >Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/" >Facebook</Link>
          <Link href="/" >Instagram</Link>
          <Link href="/" >Twitter</Link>
          <Link href="/" >Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
