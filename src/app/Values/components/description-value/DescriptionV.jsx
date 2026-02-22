"use client"
import React, { useEffect } from 'react'
import styles from './DesciprionV.module.css'
import { FcStatistics } from "react-icons/fc";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function DescriptionV() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    const dt_text = [
        {
            id: 1,
            title: 'Gostou do que viu em nossa página? Então escolha um dos nossos planos e proporcione à sua empresa uma experiência completa e eficiente de gestão.',
            description: 'Se você deseja testar nossa plataforma antes de decidir, disponibilizamos gratuitamente o plano intermediário por 30 dias. Assim, você poderá conhecer o sistema na prática e escolher com segurança o plano ideal para a sua empresa.',          
        }
    ]

    return (
        <section className={styles.sectionDescription}>
            {dt_text.map((item) => (  
                <div
                    className={styles.contentDescription}
                    key={item.id}  
                    data-aos="fade-up"
                    data-aos-delay={item.id * 100}
                >
                    <h1 className={styles.titleDescription}>{item.title}</h1>

                    <div className={styles.boxDescription}>
                        <p className={styles.text}>{item.description}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}