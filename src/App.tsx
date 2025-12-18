import { Routes, Route } from "react-router-dom"
import { Header } from "@/widgets/header/ui/Header/Header"
import { Footer } from "@/widgets/footer/ui/Footer/Footer"
import { Modal } from "@/shared/ui/Modal/Modal"
import { BookingWidget } from "@/features/book-appointment/ui/BookingWidget"
import { useUiStore } from "@/shared/model/useUiStore"
import { HomePage } from "@/pages/home/ui/HomePage"
import { ServicesPage } from "@/pages/services/ui/ServicesPage" // <-- Импорт

function App() {
  const { isBookingModalOpen, closeBookingModal } = useUiStore()

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />{" "}
        </Routes>
      </main>

      <Footer />

      <Modal isOpen={isBookingModalOpen} onClose={closeBookingModal}>
        <BookingWidget />
      </Modal>
    </>
  )
}

export default App
