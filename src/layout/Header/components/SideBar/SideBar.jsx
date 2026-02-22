"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./SideBar.module.css";
import Link from "next/link";
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
      duration: 700,
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
    { label: "Serviço", href: "" },
    { label: "Soluções", href: "" },
    { label: "Base", href: "" },
    { label: "Valores", href: "/Values" },
    { label: "Contato", href: "" },
  ];

  return (
    <section className={styles.sideBar}>
      <button
        className={`${styles.Menu} ${isOpen ? styles.Active : ""}`}
        ref={buttonRef}
        onClick={toggleMenu}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
      >
        <span className={styles.menuLine}></span>
        <span className={styles.menuLine}></span>
        <span className={styles.menuLine}></span>
      </button>

      <div
        className={`${styles.Overlay} ${isOpen ? styles.overlayActive : ""
          }`}
        onClick={closeMenu}
      >
        <aside
          className={`${styles.containerSideBar} ${isOpen ? styles.openBox : ""
            }`}
          ref={sideBarRef}
          aria-label="Menu lateral"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className={styles.Navigation}>
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
        </aside>
      </div>
    </section>
  );
}
