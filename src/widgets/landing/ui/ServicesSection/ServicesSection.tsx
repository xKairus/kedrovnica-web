import { Button } from "@/shared/ui/Button/Button"
import { Container } from "@/shared/ui/Layout/Container"
import { useUiStore } from "@/shared/model/useUiStore"
import { MOCK_SERVICES } from "@/entities/service/model/mock-data"
import { ServiceCard } from "@/entities/service/ui/ServiceCard/ServiceCard"
import s from "./ServicesSection.module.css"

export const ServicesSection = () => {
  const { openBookingModal } = useUiStore()

  return (
    <section className={s.section} id="services">
      <Container>
        <h2 className={s.title}>Популярные программы</h2>
        <div className={s.grid}>
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
  )
}
