"use client"
import React from 'react'
import styles from './Values.module.css'
import Link from 'next/link'
import Cards from './components/cards-value/Cards'
import DescriptionV from './components/description-value/DescriptionV'
import FreeTrial from '@/utils/FreeTrial/FreeTrial'

export default function Values() {
    return (
        <main className={styles.Values}>
            <section className={styles.divContentValues}>
                <DescriptionV />
                <FreeTrial />
                <Cards />
            </section>
        </main>
    )
}
