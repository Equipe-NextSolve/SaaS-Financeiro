"'use client"
import { useEffect, useState } from 'react'
import styles from './Carousel.module.css'
import Image from 'next/image'

export default function Carousel() {

    const [imageSrc, setImageSrc] = useState('/politicSS.png')

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 748) {
                setImageSrc('/politicSMobile.png')
            } else {
                setImageSrc('/politicSS.png')
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className={styles.Container}>
            <Image
                className={styles.ImagePolitic}
                src={imageSrc}
                width={1200}
                height={600}
                alt='politicSImage'
            />
        </section>
    )
}