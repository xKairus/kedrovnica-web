import { Button } from "@/shared/ui/Button/Button"
import s from "./Header.module.css"

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="/" className={s.logo}>
          КЕДРОВНИЦА
        </a>

        <nav className={s.nav}>
          <a href="#services" className={s.link}>
            Услуги
          </a>
          <a href="#masters" className={s.link}>
            Мастера
          </a>
          <a href="#reviews" className={s.link}>
            Отзывы
          </a>
          <a href="#contacts" className={s.link}>
            Контакты
          </a>
        </nav>

        <Button variant="outline">Оформить сертификат</Button>
      </div>
    </header>
  )
}
