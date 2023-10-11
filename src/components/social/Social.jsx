"use client"
import { signIn } from 'next-auth/react'
import styles from './social.module.css'
import Image from "next/image"

const Social = (props) => {
  return (
    <div className={styles.social}>
        <Image src="/google.png" alt="facebook" width={props.width} height={props.height} onClick={() => signIn("google")} className={styles.socialIcon}/>
        <Image src="/instagram.png" alt="instagram" width={props.width} height={props.height} className={styles.socialIcon}/>
        <Image src="/twitter.png" alt="tiktok" width={props.width} height={props.height} className={styles.socialIcon}/>
        <Image src="/youtube.png" alt="youtube" width={props.width} height={props.height} className={styles.socialIcon}/>
      </div>
  )
}

export default Social
