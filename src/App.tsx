import { Header } from "@/widgets/header/ui/Header/Header"
import { Modal } from "@/shared/ui/Modal/Modal"
import { Button } from "@/shared/ui/Button/Button"
import { MOCK_MASTERS } from "@/entities/master/model/mock-data"
import { MasterCard } from "@/entities/master/ui/MasterCard/MasterCard"
import { MOCK_SERVICES } from "@/entities/service/model/mock-data"
import { ServiceCard } from "@/entities/service/ui/ServiceCard/ServiceCard"
// Импортируем наш стор
import { useUiStore } from "@/shared/model/useUiStore"
import { BookingWidget } from "@/features/book-appointment/ui/BookingWidget" // Это создадим следующим шагом

function App() {
  // Достаем состояние и функции из стора
  const { isBookingModalOpen, closeBookingModal, openBookingModal } =
    useUiStore()

  return (
    <>
      <Header />

      <main
        style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}
      >
        {/* Секция Мастеров */}
        <section style={{ marginBottom: 60 }}>
          <h2>Наши мастера</h2>
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
        </section>

        {/* Секция Услуг */}
        <section>
          <h2>Популярные услуги</h2>
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
                // Теперь кнопка реально открывает модалку через стор
                actionSlot={
                  <Button
                    variant="outline"
                    style={{ width: "100%" }}
                    onClick={openBookingModal}
                  >
                    Записаться
                  </Button>
                }
              />
            ))}
          </div>
        </section>
      </main>

      {/* Модалка теперь управляется через стор */}
      <Modal isOpen={isBookingModalOpen} onClose={closeBookingModal}>
        <BookingWidget />
      </Modal>
    </>
  )
}

export default App
