"use client"
import {useEffect} from 'react'
import styles from './Footer.module.css'
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    const linkKorivo = [
        { name: 'Corporativo', href: '' },
        { name: 'Politica de Privacidade', href: '' },
        { name: 'Contato / Suporte', href: '' },
        { name: 'Grupo Whatsapp', href: '' },
    ]

    const linkSocial = [
        { name: 'Instagram', href: '', icon: <FaInstagram /> },
        { name: 'Youtube', href: '', icon: <FaYoutube /> },
        { name: 'LinkedIn', href: '', icon: <FaLinkedinIn /> },
        { name: 'Facebook', href: '', icon: <FaFacebookF /> },
    ]

    return (
        <footer className={styles.Footer}>
            <section className={styles.divisionContent}>
                <div className={styles.column}>
                    <h2 className={styles.logo}>Korivo</h2>
                    <p className={styles.description}>Soluções inteligentes para o crescimento do seu negócio.</p>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.titleColumn}>Institucional</h3>
                    <ul className={styles.list}>
                        {linkKorivo.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className={styles.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.titleColumn}>Redes Sociais</h3>
                    <ul className={styles.listSocial}>
                        {linkSocial.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={styles.socialLink}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <div className={styles.bottomFooter}>
                <h2 className={styles.titlebttmF}>NextSolve</h2>
                <p className={styles.textbttmF}>©2026 Korivo Sistem. Todos os direitos reservado - CNPJ: 62.004.128/0001-80</p>
            </div>
        </footer>
    )
}   