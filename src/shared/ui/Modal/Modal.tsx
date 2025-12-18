import { ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import s from "./Modal.module.css"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // Закрытие по нажатию ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => window.removeEventListener("keydown", handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body // Рендерим прямо в <body>
  )
}
