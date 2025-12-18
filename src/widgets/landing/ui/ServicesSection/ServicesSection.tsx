import { Button } from "@/shared/ui/Button/Button"
import { Container } from "@/shared/ui/Layout/Container"
import { useUiStore } from "@/shared/model/useUiStore"
import { ServiceCard } from "@/entities/service/ui/ServiceCard/ServiceCard"
import { CATALOG } from "@/pages/services/model/catalog-data"
import s from "./ServicesSection.module.css"

export const ServicesSection = () => {
  const { openBookingModal } = useUiStore()
  const popularServices = CATALOG[0].items.slice(0, 3)

  return (
    <section className={s.section} id="services">
      <Container>
        <h2 className={s.title}>Популярные программы</h2>
        <div className={s.grid}>
          {popularServices.map((service) => {
            const descriptionString = service.steps
              .map((step) => {
                const durationText = step.duration ? ` (${step.duration})` : ""
                return `• ${step.name}${durationText}`
              })
              .join("\n")

            return (
              <ServiceCard
                key={service.id}
                service={{
                  ...service,
                  description: descriptionString,
                }}
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
            )
          })}
        </div>
      </Container>
    </section>
  )
}
