'use client'
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation({ isOpen, onClose }) {
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

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <nav className={`${styles.nav_Container} ${isOpen ? styles.navOpen : ""}`}>
      <ul className={styles.list_links}>
        {dt_links.map((link, index) => (
          <li
            key={index}
            className={styles.navItem}
          >
            <Link
              className={styles.link}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
