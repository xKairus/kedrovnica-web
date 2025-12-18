import { useState, useEffect } from "react"
import { Button } from "@/shared/ui/Button/Button"
import { useUiStore } from "@/shared/model/useUiStore"
import clsx from "clsx"
import s from "./Header.module.css"

export const Header = () => {
  const { openBookingModal } = useUiStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="/" className={s.logo} onClick={closeMenu}>
          КЕДРОВНИЦА
        </a>

        <nav className={s.nav}>
          <a href="#services" className={s.link}>
            Услуги
          </a>
          <a href="#masters" className={s.link}>
            Мастера
          </a>
          <a href="#contacts" className={s.link}>
            Контакты
          </a>
          <div className={s.actions}>
            <Button variant="outline" onClick={() => openBookingModal()}>
              Оформить сертификат
            </Button>
          </div>
        </nav>

        <button
          className={s.burgerButton}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <div className={clsx(s.mobileMenu, { [s.open]: isMenuOpen })}>
          <a href="#services" className={s.mobileLink} onClick={closeMenu}>
            Услуги
          </a>
          <a href="#masters" className={s.mobileLink} onClick={closeMenu}>
            Мастера
          </a>
          <a href="#contacts" className={s.mobileLink} onClick={closeMenu}>
            Контакты
          </a>

          <Button
            onClick={() => {
              closeMenu()
              openBookingModal()
            }}
          >
            Оформить сертификат
          </Button>
        </div>
      </div>
    </header>
  )
}
