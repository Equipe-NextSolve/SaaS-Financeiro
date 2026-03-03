"use client"
import React, { useEffect } from 'react'
import styles from './Image.module.css'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ContentImage() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true
        })
    })

    return (
        <section className={styles.boxImage}>
            <div
                className={styles.Image}
                data-aos="fade-left"
                data-aos-delay={100}
            >
                <Image
                    width={700}
                    height={700}
                    src='/statists.png'
                    alt='Image-Ilutrative'
                    priority
                    className={styles.imageIlustrativ}
                />
            </div>
        </section>
    )
}