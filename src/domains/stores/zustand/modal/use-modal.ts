import { create } from "zustand";

interface ModalStore {
  modalStates: Record<string, boolean>;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
  isModalOpen: (modalId: string) => boolean;
}

const useModalStore = create<ModalStore>((set, get) => ({
  modalStates: {},

  // Hàm mở modal
  openModal: (modalId) =>
    set((state) => ({
      modalStates: {
        ...state.modalStates,
        [modalId]: true,
      },
    })),

  // Hàm đóng modal
  closeModal: (modalId) =>
    set((state) => ({
      modalStates: {
        ...state.modalStates,
        [modalId]: false,
      },
    })),

  // Hàm kiểm tra trạng thái mở của modal
  isModalOpen: (modalId) => {
    return !!get().modalStates[modalId]; // Trả về giá trị boolean
  },
}));

export default useModalStore;
