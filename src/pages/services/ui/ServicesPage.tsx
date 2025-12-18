import { Container } from "@/shared/ui/Layout/Container"
import { Button } from "@/shared/ui/Button/Button"
import { ServiceCard } from "@/entities/service/ui/ServiceCard/ServiceCard"
import { useUiStore } from "@/shared/model/useUiStore"
import { CATALOG } from "../model/catalog-data"
import s from "./ServicesPage.module.css"

export const ServicesPage = () => {
  const { openBookingModal } = useUiStore()

  return (
    <div className={s.page}>
      <Container>
        {CATALOG.map((section) => (
          <section key={section.id} className={s.section} id={section.id}>
            <h2 className={s.sectionTitle}>{section.title}</h2>

            <div className={s.grid}>
              {section.items.map((item) => {
                // МАГИЯ ТУТ:
                // Мы берем массив steps и превращаем его в строку с буллетами "•"
                // и переносами строк "\n"
                const descriptionString = item.steps
                  .map((step) => {
                    // Если есть длительность этапа, добавляем её в скобках
                    const durationText = step.duration
                      ? ` (${step.duration})`
                      : ""
                    return `• ${step.name}${durationText}`
                  })
                  .join("\n") // Соединяем новой строкой

                return (
                  <ServiceCard
                    key={item.id}
                    service={{
                      ...item,
                      // Принудительно кладем сгенерированный текст в description,
                      // чтобы карточка его увидела
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
          </section>
        ))}
      </Container>
    </div>
  )
}
