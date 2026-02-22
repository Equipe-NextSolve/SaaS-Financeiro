"use client"

import React, { useEffect } from 'react'
import styles from './Cards.module.css'
import Link from 'next/link'
import { FaCrown, FaRegLightbulb } from "react-icons/fa"
import { AiFillBook } from "react-icons/ai"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Cards() {

    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true
        })
    }, [])

    const dt_cards = [
        {
            id: 1,
            icon: <AiFillBook />,
            title: 'Plano Básico',
            description: [
                'Acesso a todas as Funcionalidades do Sistema.',
                'Suporte limitado (Bot).',
                'No máximo 3 usuários.',
                '1.5 GB para Arquivos.'
            ],
            value: 'R$ 39,90',
            buttonText: 'Adquirir Plano'
        },
        {
            id: 2,
            icon: <FaRegLightbulb />,
            title: 'Plano Intermediário',
            description: [
                'Acesso a todas as Funcionalidades do Sistema.',
                'No máximo 7 usuários.',
                '3.5 GB para Arquivos.',
                'Importação com Marketplace.'
            ],
            value: 'R$ 89,90',
            buttonText: 'Adquirir Plano'
        },
        {
            id: 3,
            icon: <FaCrown />,
            title: 'Plano Premium',
            description: [
                'Acesso a todas as Funcionalidades do Sistema.',
                'No máximo 10 usuários.',
                '3.5 GB para Arquivos.',
                'Suporte com Agente de IA dentro do Sistema.',
                'Importação com Marketplace.'
            ],
            value: 'R$ 119,90',
            buttonText: 'Adquirir Plano'
        }
    ]

    return (
        <section className={styles.sectionCards}>
            <div className={styles.contentCards}>
                {dt_cards.map((item) => (
                    <div
                        className={styles.boxCards}
                        key={item.id}
                        data-aos="fade-up"
                        data-aos-delay={item.id * 100}
                    >
                        <div className={styles.boxTitleIcon}>
                            <span className={styles.iconCards}>{item.icon}</span>
                            <h2 className={styles.titleCards}>{item.title}</h2>
                        </div>

                        <ul className={styles.descriptionCards}>
                            {item.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>

                        <span className={styles.valueCards}>{item.value}</span>

                        <Link href="/" className={styles.buttonCard}>
                            {item.buttonText}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}