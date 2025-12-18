import { Header } from "@/widgets/header/ui/Header/Header"
import { Footer } from "@/widgets/footer/ui/Footer/Footer"
import { ContactsSection } from "@/widgets/contacts/ui/ContactsSection/ContactsSection"
import { Modal } from "@/shared/ui/Modal/Modal"
import { BookingWidget } from "@/features/book-appointment/ui/BookingWidget"
import { useUiStore } from "@/shared/model/useUiStore"
import { Container } from "@/shared/ui/Layout/Container"
import { Button } from "@/shared/ui/Button/Button"
import { MOCK_MASTERS } from "@/entities/master/model/mock-data"
import { MasterCard } from "@/entities/master/ui/MasterCard/MasterCard"
import { MOCK_SERVICES } from "@/entities/service/model/mock-data"
import { ServiceCard } from "@/entities/service/ui/ServiceCard/ServiceCard"

function App() {
  const { isBookingModalOpen, closeBookingModal, openBookingModal } =
    useUiStore()

  return (
    <>
      <Header />

      <main>
        <section style={{ padding: "80px 0", textAlign: "center" }}>
          <Container>
            <h1
              style={{
                fontSize: "3.5rem",
                marginBottom: "1rem",
                color: "var(--color-primary)",
              }}
            >
              Кедровница
            </h1>
            <p
              style={{ maxWidth: 600, margin: "0 auto 30px", fontSize: "18px" }}
            >
              Пространство русской гармонии и телесного здоровья.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
              <Button onClick={openBookingModal}>Записаться</Button>
              <Button variant="outline" onClick={openBookingModal}>
                Оформить сертификат
              </Button>
            </div>
          </Container>
        </section>

        <section id="masters" style={{ marginBottom: 80 }}>
          <Container>
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
          </Container>
        </section>

        <section id="services" style={{ marginBottom: 80 }}>
          <Container>
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
                  actionSlot={
                    <Button
                      variant="outline"
                      style={{ width: "100%" }}
                      onClick={openBookingModal}
                    >
                      Выбрать
                    </Button>
                  }
                />
              ))}
            </div>
          </Container>
        </section>

        <ContactsSection />
      </main>

      <Footer />

      <Modal isOpen={isBookingModalOpen} onClose={closeBookingModal}>
        <BookingWidget />
      </Modal>
    </>
  )
}

export default App
