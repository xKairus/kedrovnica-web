import { Button } from "@/shared/ui/Button/Button"
import { Container } from "@/shared/ui/Layout/Container"
import { useUiStore } from "@/shared/model/useUiStore"
import s from "./PromoSection.module.css"

export const PromoSection = () => {
  const { openBookingModal } = useUiStore()

  return (
    <section className={s.section}>
      <Container>
        <div className={s.content}>
          <h2 className={s.title}>
            Подари путешествие в <br />
            царство русской гармонии
          </h2>
          <p className={s.text}>
            Сила кедра могучего да ягоды сибирской очистит тело и смоет
            усталость. Мастерица заберет все заботы, и душа будет радоваться, а
            тело станет легким, как перышко. Наслаждайся, путник, чаем с
            душистыми травами.
          </p>
          <Button
            onClick={() => openBookingModal()}
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
