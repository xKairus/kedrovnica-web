import { Container } from "@/shared/ui/Layout/Container"
import s from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.container}>
          <div>
            © {new Date().getFullYear()} Кедровница. Все права защищены.
          </div>
          <div className={s.socials}>
            <a href="#" className={s.link}>
              Политика конфиденциальности
            </a>
            <a href="#" className={s.link}>
              ВКонтакте
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
