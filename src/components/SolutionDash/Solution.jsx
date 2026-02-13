"use client"
import { useEffect } from 'react'
import styles from './Solution.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Solution() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out-back',
            once: true
        })
    })

    const dt_text = [
        {
            description: 'Plataforma Inteligente de Gestão',
            title: 'Tenha controle total da sua empresa com dashboards inteligentes e relatórios em tempo real.',
            text: 'É isso mesmo que você leu. Com a Korivo, você conta com dashboards personalizados e relatórios em tempo real para acompanhar, de forma clara e estratégica, todas as movimentações da sua empresa: financeiro, vendas, estoque e produtos, tudo em um só lugar.',
            link: 'Saiba mais ->'
        }
    ]

    return (
        <section className={styles.Solution}>
            <div className={styles.divisionContent}>
                <article
                    className={styles.SolutionDescription}
                    data-aos="fade-left"
                    data-aos-delay={100}
                >
                    {dt_text.map((text, index) => (
                        <div key={index} className={styles.description}>
                            <span className={styles.descriptionInit}>{text.description}</span>
                            <h1 className={styles.titleSolution}>{text.title}</h1>
                            <p className={styles.text}>{text.text}</p>
                            <Link className={styles.linkSolution} href='/'>{text.link}</Link>
                        </div>
                    ))}
                </article>
                <div
                    className={styles.boxImage}
                    data-aos="fade-rigth"
                    data-aos-delay={100}
                >
                    <div className={styles.ImageStyles}>
                        <Image
                            width={700}
                            height={450}
                            alt='image-ilustration-sistem'
                            src='/Receita.png'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
