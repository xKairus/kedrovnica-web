import { create } from 'zustand';

interface UiState {
  isBookingModalOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isBookingModalOpen: false,
  openBookingModal: () => set({ isBookingModalOpen: true }),
  closeBookingModal: () => set({ isBookingModalOpen: false }),
}));