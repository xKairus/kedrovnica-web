import { Container } from "@/shared/ui/Layout/Container"
import s from "./Advantages.module.css"

export const Advantages = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.grid}>
          <div className={s.card}>
            <span className={s.number}>1</span>
            <div className={s.content}>
              <h3 className={s.title}>
                Бесплатная <br /> доставка по городу
              </h3>
              <p className={s.text}>
                При покупке от 5000. <br />
                Мы доставим адресату ваш подарок: настоящую заботу.
              </p>
            </div>
          </div>

          <div className={s.card}>
            <span className={s.number}>2</span>
            <div className={s.content}>
              <h3 className={s.title}>
                Кэшбэк до <br /> 10%
              </h3>
              <p className={s.text}>Накопительная бонусная система.</p>
            </div>
          </div>

          <div className={s.card}>
            <span className={s.number}>3</span>
            <div className={s.content}>
              <h3 className={s.title}>
                Путешествие к <br /> традициям
              </h3>
              <p className={s.text}>
                Натуральная косметика, бережный сервис и уникальный опыт.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
