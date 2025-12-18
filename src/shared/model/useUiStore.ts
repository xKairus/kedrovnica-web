import { create } from "zustand"

interface ServiceTarget {
  title: string
  price: number
}

interface UiState {
  isBookingModalOpen: boolean
  selectedService: ServiceTarget | null

  openBookingModal: (service?: ServiceTarget) => void
  closeBookingModal: () => void
}

export const useUiStore = create<UiState>((set) => ({
  isBookingModalOpen: false,
  selectedService: null,

  openBookingModal: (service) =>
    set({
      isBookingModalOpen: true,
      selectedService: service || null, // Если услугу не передали, сбрасываем в null
    }),

  closeBookingModal: () =>
    set({
      isBookingModalOpen: false,
      selectedService: null,
    }),
}))
