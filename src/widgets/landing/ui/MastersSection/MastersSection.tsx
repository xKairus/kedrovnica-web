import { Container } from "@/shared/ui/Layout/Container"
import { MOCK_MASTERS } from "@/entities/master/model/mock-data"
import { MasterCard } from "@/entities/master/ui/MasterCard/MasterCard"
import s from "./MastersSection.module.css"

export const MastersSection = () => {
  return (
    <section className={s.section} id="masters">
      <Container>
        <h2 className={s.title}>Наши мастера</h2>
        <div className={s.grid}>
          {MOCK_MASTERS.map((master) => (
            <MasterCard key={master.id} master={master} />
          ))}
        </div>
      </Container>
    </section>
  )
}
