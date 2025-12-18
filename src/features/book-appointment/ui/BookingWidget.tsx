import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/shared/ui/Button/Button"
import { Input } from "@/shared/ui/Input/Input"
import { useUiStore } from "@/shared/model/useUiStore"
import s from "./BookingWidget.module.css"

interface BookingFormValues {
  name: string
  phone: string
  comment?: string
}

export const BookingWidget = () => {
  const { closeBookingModal } = useUiStore()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>()

  const onSubmit = (data: BookingFormValues) => {
    console.log("Данные формы:", data)

    setSubmittedName(data.name)
    setIsSubmitted(true)

    setTimeout(() => {
      closeBookingModal()
      setIsSubmitted(false)
      setSubmittedName("")
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className={s.successMessage}>
        <div style={{ fontSize: 40 }}>✅</div>
        <p>Спасибо, {submittedName}! Мы скоро свяжемся с вами.</p>
      </div>
    )
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>Запись на сеанс</h2>
        <p className={s.subtitle}>
          Оставьте свои данные, и наши администраторы свяжутся с вами для
          уточнения деталей.
        </p>
      </div>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Ваше имя"
          {...register("name", { required: "Пожалуйста, представьтесь" })}
          error={errors.name?.message}
        />

        <Input
          placeholder="Телефон"
          type="tel"
          {...register("phone", {
            required: "Нам нужен номер, чтобы позвонить",
            pattern: {
              value: /^[0-9+() -]*$/,
              message: "Некорректный номер телефона",
            },
          })}
          error={errors.phone?.message}
        />

        <Input
          placeholder="Пожелания (необязательно)"
          {...register("comment")}
        />

        <Button type="submit" style={{ marginTop: 8 }}>
          Жду звонка
        </Button>
      </form>
    </div>
  )
}
