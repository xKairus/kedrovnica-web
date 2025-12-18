import { Button } from "@/shared/ui/Button/Button"
import { Container } from "@/shared/ui/Layout/Container"
import { useUiStore } from "@/shared/model/useUiStore"
import { MOCK_MASTERS } from "@/entities/master/model/mock-data"
import { MasterCard } from "@/entities/master/ui/MasterCard/MasterCard"
import { MOCK_SERVICES } from "@/entities/service/model/mock-data"
import { ServiceCard } from "@/entities/service/ui/ServiceCard/ServiceCard"
import { ContactsSection } from "@/widgets/contacts/ui/ContactsSection/ContactsSection"
import { Link } from "react-router-dom"

import s from "./HomePage.module.css"

export const HomePage = () => {
  const { openBookingModal } = useUiStore()

  return (
    <>
      {/* 1. HERO и 2. ADVANTAGES */}
      <section className={s.heroSection}>...</section>
      <section className={s.advantagesSection}>...</section>

      {/* 3. PROMO BLOCK */}
      <section className={s.promoSection}>
        <Container>
          <div className={s.promoContent}>
            <h2 className={s.promoTitle}>
              Подари путешествие в <br />
              царство русской гармонии
            </h2>
            <p className={s.promoText}>
              Сила кедра могучего да ягоды сибирской очистит тело и смоет
              усталость. Мастерица заберет все заботы и душа будет радоваться, а
              тело станет легким, как перышко. Наслаждайся, путник, чаем с
              душистыми травами.
            </p>
            <Button onClick={openBookingModal} variant="primary">
              Оформить сертификат
            </Button>
          </div>
        </Container>
      </section>

      {/* 4. ПОПУЛЯРНЫЕ ПРОГРАММЫ */}
      <section style={{ marginBottom: 80 }}>
        <Container>
          <h2
            style={{
              fontSize: 32,
              marginBottom: 40,
              fontFamily: "var(--font-display)",
            }}
          >
            Популярные программы
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {MOCK_SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                actionSlot={
                  <Button
                    variant="outline"
                    style={{ width: "100%" }}
                    onClick={openBookingModal}
                  >
                    Оформить сертификат
                  </Button>
                }
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. SPA MENU */}
      <section style={{ marginBottom: 80 }}>
        <Container>
          <div className={s.menuHeader}>
            <h2 className={s.menuTitle}>Спа-меню</h2>
            <Link to="/services" className={s.menuLink}>
              Посмотреть все →
            </Link>
          </div>

          <div className={s.menuGrid}>
            <Link
              to="#"
              className={s.menuCard}
              style={{ backgroundColor: "#9CA3AF" }}
            >
              <span className={s.menuCardTitle}>СПА ДЛЯ НЕЕ</span>
            </Link>
            <Link
              to="#"
              className={s.menuCard}
              style={{ backgroundColor: "#9CA3AF" }}
            >
              <span className={s.menuCardTitle}>СПА ДЛЯ НЕГО</span>
            </Link>
            <Link
              to="#"
              className={s.menuCard}
              style={{ backgroundColor: "#9CA3AF" }}
            >
              <span className={s.menuCardTitle}>ДЛЯ ДВОИХ</span>
            </Link>
            <Link
              to="#"
              className={s.menuCard}
              style={{ backgroundColor: "#9CA3AF" }}
            >
              <span className={s.menuCardTitle}>МАССАЖ</span>
            </Link>
            <Link
              to="#"
              className={s.menuCard}
              style={{ backgroundColor: "#9CA3AF" }}
            >
              <span className={s.menuCardTitle}>КОРРЕКЦИЯ</span>
            </Link>
            <Link
              to="#"
              className={s.menuCard}
              style={{ backgroundColor: "#9CA3AF" }}
            >
              <span className={s.menuCardTitle}>ДО 5000₽</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* 6. MASTERS */}
      <section id="masters" style={{ marginBottom: 80 }}>
        <Container>
          <h2
            style={{
              fontSize: 32,
              marginBottom: 40,
              fontFamily: "var(--font-display)",
            }}
          >
            Наши мастера
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {MOCK_MASTERS.map((master) => (
              <MasterCard key={master.id} master={master} />
            ))}
          </div>
        </Container>
      </section>

      <ContactsSection />
    </>
  )
}
