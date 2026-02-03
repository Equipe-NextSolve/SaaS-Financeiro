import React from 'react'
import styles from './About.module.css'
import { FaMoneyCheckAlt, FaRegNewspaper, FaUserCog } from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";
import { MdOutlinePointOfSale, MdAccountBalance } from "react-icons/md";
import Link from 'next/link';

export default function About() {
    const dt_About = [
        {
            icon: <MdAccountBalance />,
            title: 'Gerenciamento Financeiro',
            description: 'Faça o Gerenciamento de toda a sua movimentação financeira pessoal ou empresarial no nosso sistema.',
            link: 'Saiba mais'
        },
        {
            icon: <AiFillControl />,
            title: 'Cadastro e Controle de Estoque',
            description: 'Tenha o controle e estoque de seus produtos em tempo real.',
            link: 'Saiba mais'
        },
        {
            icon: <FaUserCog />,
            title: 'Cadastro de Clientes',
            description: 'Cadastre seus clientes, tanto pessoas pessoa juridica e fisica.',
            link: 'Saiba mais'
        },
        {
            icon: <MdOutlinePointOfSale />,
            title: 'Registro de Vendas',
            description: 'Sistema de Gerenciamento de Vendas.',
            link: 'Saiba mais'
        },
        {
            icon: <FaMoneyCheckAlt />,
            title: 'Acompanhamento de Contas a pagar e a receber.',
            description: 'Faça o Gerenciamento de toda a sua movimentação financeira pessoal ou empresarial no nosso sistema.',
            link: 'Saiba mais'
        },
        {
            icon: <FaRegNewspaper />,
            title: 'Dashboards Personalizados para todas as telas.',
            description: 'Tenha todo o relatório de todas as suas movimentações no sistema.',
            link: 'Saiba mais'
        },
    ]

    return (
        <section className={styles.About} id='about'>
            <div className={styles.containerTitle}>
                <h1 className={styles.titleAbout}>
                    O <span className={`${styles.titleAbout} ${styles.colorAltern}`}>Gestory</span> oferece as funcionalidades essenciais para impulsionar os resultados do seu negócio.
                </h1>
            </div>
            <section className={styles.contentAbout}>
                {dt_About.map((item, index) => (
                    <div key={index} className={styles.card}>

                        <div className={styles.cardIcon}>
                            {item.icon}
                        </div>

                        <h3 className={styles.cardTitle}>{item.title}</h3>

                        <p className={styles.cardDescription}>
                            {item.description}
                        </p>

                        <Link href="/service" className={styles.cardLink}>
                            {item.link} →
                        </Link>
                    </div>
                ))}
            </section>
        </section>
    )
}