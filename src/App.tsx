import { MOCK_MASTERS } from "@/entities/master/model/mock-data"
import { MasterCard } from "@/entities/master/ui/MasterCard/MasterCard"
import { MOCK_SERVICES } from "@/entities/service/model/mock-data"
import { ServiceCard } from "@/entities/service/ui/ServiceCard/ServiceCard"
import { Button } from "@/shared/ui/Button/Button"

function App() {
  return (
    <div style={{ padding: 40, backgroundColor: "#eee" }}>
      <h2>Тест Мастера</h2>
      <MasterCard master={MOCK_MASTERS[0]} />

      <h2 style={{ marginTop: 40 }}>Тест Услуги</h2>
      <div style={{ width: 300 }}>
        <ServiceCard
          service={MOCK_SERVICES[0]}
          actionSlot={
            <Button variant="outline" style={{ width: "100%" }}>
              Оформить сертификат
            </Button>
          }
        />
      </div>
    </div>
  )
}

export default App

