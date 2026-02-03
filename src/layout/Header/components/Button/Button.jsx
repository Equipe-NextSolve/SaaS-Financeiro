import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'
import { FaCircleUser } from "react-icons/fa6";

export default function Button() {
    return (
        <section className={styles.container_Btn}>
            <Link className={styles.link_Btn} href='/'><FaCircleUser /> Login</Link>
            <Link className={`${styles.link_Btn} ${styles.collor_Alternative}`} href='/'>Cadastre-se</Link>
        </section>
    )
}