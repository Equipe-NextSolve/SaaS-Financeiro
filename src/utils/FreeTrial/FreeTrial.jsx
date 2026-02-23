import { useEffect } from 'react'
import styles from './FreeTrial.module.css'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function FreeTrial() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true
        })
    })

    const dt_text = [
        {
            title: 'Teste Grátis durante 1 mês',
            description: 'Isso mesmo! Fique à vontade para testar o Korivo gratuitamente durante um mês e descubra todas as funcionalidades e soluções que o sistema pode oferecer para a sua empresa.Tenho certeza de que você irá perceber o valor da nossa plataforma e dará continuidade à sua jornada empresarial conosco.',
            link: 'Teste Grátis'
        }
    ]

    return (
        <section className={styles.FreeTrial}>
            {dt_text.map((item, index) => (
                <div
                    className={styles.containerFreeTrial}
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <h1 className={styles.titleFreeTrial}>{item.title}</h1>
                    <p className={styles.descriptionFreeTrial}>{item.description}</p>
                    <Link href='/'>{item.link}</Link>
                </div>
            ))}
        </section>
    )
}
