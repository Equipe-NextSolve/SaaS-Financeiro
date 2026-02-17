"use client"
import React from 'react'
import styles from './Politics.module.css'
import Carousel from './Components/Carousel/Carousel'
import ArticlePolitics from './Components/Article/ArticlePolitics'

export default function Politics() {
    return (
        <main className={styles.Politics}>
            <section className='divisionContent'>
                <Carousel />
                <ArticlePolitics />
            </section>
        </main>
    )
}
