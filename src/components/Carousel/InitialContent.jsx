"use client"
import React from 'react'
import styles from './InitialContent.module.css'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

export default function InitialContent() {
    const v_text = [
        {
            title: 'Gestory - Sistema Financeiro',
            text: 'Somos uma empresa de tecnologia e desenvolvimento que entrega a solução certa para você por meio da inovação tecnológica.',
            link: 'Experimente grátis por 1 mês'
        }
    ]

    const slide = [
        {
            id: 1,
            image: '/slide-001.png',
            alt: 'image-01'
        },
        {
            id: 2,
            image: '/slide-002.png',
            alt: 'image-02'
        },

    ]

    return (
        <section className={styles.container_Carousel}>
            <section className={styles.description_Fixed}>
                {v_text.map((text, index) => (
                    <div key={index}>
                        <h1 className={styles.title_Description}>{text.title}</h1>
                        <p className={styles.text_Description}>{text.text}</p>

                        <div className={styles.container_left}>
                            <input
                                className={styles.input_email}
                                type="email"
                                placeholder='Informe seu e-mail'
                            />
                            <Link href='' className={styles.link_Btn}>{text.link}</Link>
                        </div>
                    </div>
                ))}
            </section>


            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
            >
                {slide.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image
                            width={300}
                            height={300}
                            src={item.image}
                            alt={item.alt}
                            priority={item.id === 1}
                            className={styles.image_Carousel}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
