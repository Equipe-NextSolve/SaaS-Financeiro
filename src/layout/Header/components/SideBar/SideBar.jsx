"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./SideBar.module.css";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const sideBarRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const dt_links = [
     {
      label: "Serviço",
      href: "/#about"
    },
    {
      label: "Soluções",
      href: "/#solutions",
    },
    {
      label: "Dashboards",
      href: "/#dashboard",
    },
    {
      label: "Valores",
      href: "/Values"
    },
    {
      label: "Suporte",
      href: "/#quem-somos"
    },  
  ];

  return (
    <section className={styles.sideBar}>
      <button
        className={`${styles.menuButton} ${isOpen ? styles.active : ""}`}
        ref={buttonRef}
        onClick={toggleMenu}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayActive : ""}`}
        onClick={closeMenu}
      >
        <aside
          className={`${styles.containerSideBar} ${isOpen ? styles.openBox : ""
            }`}
          ref={sideBarRef}
          aria-label="Menu lateral"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Menu de Navegação</h2>
            <FaTimes className={styles.closeIcon} onClick={closeMenu} />
          </div>

          <nav className={styles.navigation}>
            {dt_links.map((link, index) => (
              <Link
                key={index}
                className={styles.navLink}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.footer}>
            <span>Korivo Sistema</span>
          </div>
        </aside>
      </div>
    </section>
  );
}