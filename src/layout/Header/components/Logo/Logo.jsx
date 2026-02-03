import React from 'react'
import styles from './Logo.module.css'
import Link from 'next/link'

export default function Logo() {
  return (
    <section className={styles.container_Logo}>
      <Link className={styles.title_Logo} href=''>Gestory</Link>
    </section>
  )
}
