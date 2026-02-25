"use client"
import { useEffect } from 'react'
import styles from './FreeTrial.module.css'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FiCheckCircle } from 'react-icons/fi'

const stats = [
    'Sem cartão de crédito',
    'Acesso completo por 30 dias',
    'Cancele quando quiser',
]

export default function FreeTrial() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true
        })
    })

    return (
        <section className={styles.FreeTrial}>
            <div
                className={styles.containerFreeTrial}
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className={styles.badgeFreeTrial}>
                    <span className={styles.badgeDot} />
                    Oferta Especial
                </div>

                <h1 className={styles.titleFreeTrial}>
                    Teste <span className={styles.titleHighlight}>Grátis</span> durante 1 mês
                </h1>

                <p className={styles.descriptionFreeTrial}>
                    Fique à vontade para testar o Korivo gratuitamente durante um mês e descubra
                    todas as funcionalidades que o sistema pode oferecer para a sua empresa.
                    Tenho certeza de que você irá perceber o valor da nossa plataforma e dará
                    continuidade à sua jornada empresarial conosco.
                </p>

                <Link href='/' className={styles.ctaLink}>
                    Teste Grátis
                </Link>

                <div className={styles.statsRow}>
                    {stats.map((label, i) => (
                        <div className={styles.statItem} key={i}>
                            <FiCheckCircle size={15} />
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}