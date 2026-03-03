"use client"
import { useEffect } from 'react'
import styles from './Register.module.css'
import { BsGraphUpArrow } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'
import ResearchField from './ContentField/ResearchField';
import ContentImage from './ContentImage/Image';

export default function Page() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true
        })
    }, [])

    return (
        <section className={styles.pageRegister}>
            <h1
                className={styles.titleRegister}
                data-aos="fade-up"
                data-aos-delay={90}>Korivo <span className={styles.textAlternativ}>Gestão</span></h1>
            <p
                className={styles.textRegister}
                data-aos="fade-up"
                data-aos-delay={100}>Comece agora a usar nosso sistema e leve sua empresa a outro nível. <BsGraphUpArrow className={styles.textRegister} /></p>

            <div className={styles.contentPage}>
                <ResearchField />
                <ContentImage />
            </div>
        </section>
    )
}