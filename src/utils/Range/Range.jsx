import React from 'react'
import styles from './Range.module.css'
import { FaStar } from "react-icons/fa";

export default function Range() {
    return (
        <section className={styles.container_Range}>
            <div className={styles.Assessment}>
                <h1 className={styles.title_Range}></h1>
                <FaStar className={styles.icon_Star}/>
                <FaStar className={styles.icon_Star}/>
                <FaStar className={styles.icon_Star}/>
                <FaStar className={styles.icon_Star}/>
                <FaStar className={styles.icon_Star}/>
            </div>
            <div className={styles.content_Description}>
                <h1 className={styles.title_Range}>+10.000 usuários administrando suas financas com o Gestory</h1>
            </div>
        </section>
    )
}   