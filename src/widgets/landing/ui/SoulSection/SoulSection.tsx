import { Button } from "@/shared/ui/Button/Button"
import { Container } from "@/shared/ui/Layout/Container"
import { useUiStore } from "@/shared/model/useUiStore"
import s from "./SoulSection.module.css"

export const SoulSection = () => {
  const { openBookingModal } = useUiStore()

  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <h2 className={s.title}>
            Пусть ваш подарок <br />
            будет как душа
          </h2>
          <p className={s.subtitle}>Ценным, теплым, сердечным</p>
          <Button
            onClick={openBookingModal}
            variant="primary"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Оформить сертификат
          </Button>
        </div>
      </Container>
    </section>
  )
}
