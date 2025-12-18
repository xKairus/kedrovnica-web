import { Button } from "@/shared/ui/Button/Button"
import { Container } from "@/shared/ui/Layout/Container"
import { useUiStore } from "@/shared/model/useUiStore"
import s from "./Hero.module.css"

export const Hero = () => {
  const { openBookingModal } = useUiStore()

  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>
          Подарочный сертификат <br />в спа-салон Тюмени
        </h1>
        <p className={s.subtitle}>
          Проявить заботу и любовь - легко: <br />
          готовый подарок всего за 10 минут
        </p>
        <Button onClick={() => openBookingModal()} variant="primary">
          Оформить сертификат
        </Button>
      </Container>
    </section>
  )
}
