"use client"
import React, { useEffect, useState } from "react"
import styles from "./ResearchField.module.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function ResearchField() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: "ease-in-out",
            once: true,
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "phone") {
            const formatted = value
                .replace(/\D/g, "")
                .replace(/^(\d{2})(\d)/g, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2")
                .slice(0, 15)

            setFormData({ ...formData, [name]: formatted })
            return
        }

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (formData.password.length < 6) {
            setErrorMessage("A senha deve ter no mínimo 6 caracteres.")
            return
        }

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("As senhas não coincidem.")
            return
        }

        try {
            setIsLoading(true)

            console.log("Dados enviados:", formData)

            alert("Cadastro realizado com sucesso!")

            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
            })
        } catch (error) {
            setErrorMessage("Erro ao realizar cadastro.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className={styles["register-section"]}>
            <div
                className={styles["register-container"]}
                data-aos="fade-right"
                data-aos-delay="100"
            >
                <h2 className={styles["register-title"]}>
                    Inscreva-se em um Plano
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className={styles["register-form"]}
                >
                    <div className={styles["form-group"]}>
                        <label
                            htmlFor="name"
                            className={styles["form-label"]}
                        >
                            Razão Social / Nome
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={styles["form-input"]}
                        />
                    </div>

                    <div className={styles["form-group"]}>
                        <label
                            htmlFor="email"
                            className={styles["form-label"]}
                        >
                            Informe seu E-mail
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={styles["form-input"]}
                        />
                    </div>

                    <div className={styles["form-group"]}>
                        <label
                            htmlFor="phone"
                            className={styles["form-label"]}
                        >
                            Informe seu Contato
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className={styles["form-input"]}
                        />
                    </div>

                    <div className={styles["form-group"]}>
                        <label
                            htmlFor="password"
                            className={styles["form-label"]}
                        >
                            Crie uma Senha
                        </label>

                        <div className={styles["password-wrapper"]}>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className={`${styles["form-input"]} ${styles["password-input"]}`}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className={styles["password-toggle-button"]}
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </div>
                    </div>

                    <div className={styles["form-group"]}>
                        <label
                            htmlFor="confirmPassword"
                            className={styles["form-label"]}
                        >
                            Confirme sua Senha
                        </label>

                        <div className={styles["password-wrapper"]}>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`${styles["form-input"]} ${styles["password-input"]}`}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                                className={styles["password-toggle-button"]}
                            >
                                {showConfirmPassword
                                    ? "Ocultar"
                                    : "Mostrar"}
                            </button>
                        </div>
                    </div>

                    {errorMessage && (
                        <p className={styles["form-error-message"]}>
                            {errorMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={styles["submit-button"]}
                    >
                        {isLoading
                            ? "Cadastrando..."
                            : "Criar Conta"}
                    </button>
                </form>
            </div>
        </section>
    )
}