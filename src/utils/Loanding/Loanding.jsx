import React from 'react'
import styles from './Loanding.module.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loanding() {
    return (
        <div className={styles.container}>
            <AiOutlineLoading3Quarters className={styles.loandingIcon} />
        </div>
    )
}