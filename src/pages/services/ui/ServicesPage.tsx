import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Container } from "@/shared/ui/Layout/Container"
import { Button } from "@/shared/ui/Button/Button"
import { ServiceCard } from "@/entities/service/ui/ServiceCard/ServiceCard"
import { useUiStore } from "@/shared/model/useUiStore"
import { CATALOG } from "../model/catalog-data"
import s from "./ServicesPage.module.css"

export const ServicesPage = () => {
  const { openBookingModal } = useUiStore()
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "")
        const element = document.getElementById(id)

        if (element) {
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className={s.page}>
      <Container>
        {CATALOG.map((section) => (
          <section key={section.id} className={s.section} id={section.id}>
            <h2 className={s.sectionTitle}>{section.title}</h2>
            <div className={s.grid}>
              {section.items.map((item) => {
                const descriptionString = item.steps
                  .map((step) => {
                    const durationText = step.duration
                      ? ` (${step.duration})`
                      : ""
                    return `• ${step.name}${durationText}`
                  })
                  .join("\n")

                return (
                  <ServiceCard
                    key={item.id}
                    service={{
                      ...item,
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
