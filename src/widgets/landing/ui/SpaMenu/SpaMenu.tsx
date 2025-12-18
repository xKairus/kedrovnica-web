import { Container } from "@/shared/ui/Layout/Container"
import s from "./SpaMenu.module.css"

const CATEGORIES = [
  { id: 1, title: "СПА ДЛЯ НЕЕ", link: "#" },
  { id: 2, title: "СПА ДЛЯ НЕГО", link: "#" },
  { id: 3, title: "ДЛЯ ДВОИХ", link: "#" },
  { id: 4, title: "МАССАЖ", link: "#" },
  { id: 5, title: "КОРРЕКЦИЯ", link: "#" },
  { id: 6, title: "ДО 5000₽", link: "#" },
]

export const SpaMenu = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.header}>
          <h2 className={s.title}>Спа-меню</h2>
          <a href="#services" className={s.link}>
            Посмотреть все →
          </a>
        </div>

        <div className={s.grid}>
          {CATEGORIES.map((cat) => (
            <a key={cat.id} href={cat.link} className={s.card}>
              <span className={s.cardTitle}>{cat.title}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
