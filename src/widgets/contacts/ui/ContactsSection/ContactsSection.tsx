import { Container } from "@/shared/ui/Layout/Container"
import s from "./ContactsSection.module.css"

export const ContactsSection = () => {
  return (
    <section className={s.section} id="contacts">
      <Container>
        <div className={s.container}>
          <div className={s.info}>
            <h2 className={s.title}>Где нас найти</h2>

            <div className={s.addressBlock}>
              <h3 className={s.salonName}>Кедровница</h3>
              <address className={s.address}>
                ул. Николая Семёнова, 31к2, 1 этаж
              </address>
              <a href="tel:+79612020522" className={s.phone}>
                +7 961 202 05 22
              </a>
            </div>

            <div className={s.addressBlock}>
              <h3 className={s.salonName}>Кедровница</h3>
              <address className={s.address}>ул. Седова, 19</address>
              <a href="tel:+79612061919" className={s.phone}>
                +7 961 206 19 19
              </a>
            </div>
          </div>

          <div className={s.mapWrapper}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=65.578687%2C57.126487&z=12"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Map"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}
