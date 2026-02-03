'use client'
import Link from "next/link";
import styles from "./Navigation.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Navigation({ isOpen, onClose }) {
  const dt_links = [
    {
      label: "Serviço",
      href: "/#quem-somos"
    },
    {
      label: "Soluções",
      href: "/#solutions",
      dropdown: [
        { label: "Dashboards Personalizados", href: "/service" },
        { label: "Cadastro de Clientes", href: "/service" },
        { label: "Estoque em tempo real", href: "/service" },
        { label: "Contas a pagar e a receber", href: "/service" },
        { label: "Extrato e integração com o Banco", href: "/service" },
      ],
    },
    {
      label: "Base",
      href: "/#cards-services",
      dropdown: [
        { label: "Next.js", href: "/tech" },
        { label: "WoordPress", href: "/tech" },
        { label: "Sistemas de Gestão", href: "/tech" },
      ],
    },
    {
      label: "Valores",
      href: "/#quem-somos"
    },
    {
      label: "Contato",
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
            className={`${styles.navItem} ${link.dropdown ? styles.hasDropdown : ""}`}
          >
            {link.dropdown ? (
              <div className={styles.dropdownWrapper}>
                <Link
                  className={`${styles.link} ${styles.dropdownLink}`}
                  href={link.href}
                  onClick={() => handleLinkClick()}
                >
                  {link.label}
                  <IoIosArrowDown className={styles.arrowIcon} />
                </Link>

                <ul className={styles.dropdownMenu}>
                  {link.dropdown.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        className={styles.dropdownItem}
                        href={item.href}
                        onClick={() => handleLinkClick()}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                className={styles.link}
                href={link.href}
                onClick={() => handleLinkClick()}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}