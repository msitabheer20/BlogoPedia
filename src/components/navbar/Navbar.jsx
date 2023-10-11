import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from "next-auth/react";
import ThemeToggle from '../themeToggle/themeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import Social from '../social/Social';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Social width={24} height={24}/>
      <Link href="/" className={styles.logo}>
        <Image src="/bloglogo.png" alt="" height={50} width={50} className={styles.logoImg} />
        BlogoPedia
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
