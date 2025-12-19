import { useState, FormEvent, useEffect, useMemo } from "react"
import { useUiStore } from "@/shared/model/useUiStore"
import { Button } from "@/shared/ui/Button/Button"
import { CATALOG } from "@/pages/services/model/catalog-data"
import s from "./BookingWidget.module.css"

export const BookingWidget = () => {
  const { selectedService, closeBookingModal } = useUiStore()

  const allServices = useMemo(() => CATALOG.flatMap((cat) => cat.items), [])

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const [currentServiceId, setCurrentServiceId] = useState<string | number>("")

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (selectedService) {
      const found = allServices.find((s) => s.title === selectedService.title)
      if (found) {
        setCurrentServiceId(found.id)
      }
    } else {
      setCurrentServiceId("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedService])

  const currentService = allServices.find((s) => s.id == currentServiceId)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "")
    if (val.startsWith("7") || val.startsWith("8")) val = val.slice(1)
    val = val.slice(0, 10)

    let formatted = ""
    if (val.length > 0) formatted += "+7 (" + val.slice(0, 3)
    if (val.length >= 4) formatted += ") " + val.slice(3, 6)
    if (val.length >= 7) formatted += "-" + val.slice(6, 8)
    if (val.length >= 9) formatted += "-" + val.slice(8, 10)

    setPhone(formatted)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Простая валидация
    if (!name || phone.length < 18) {
      alert("Пожалуйста, заполните имя и корректный телефон")
      return
    }

    setIsLoading(true)

    try {
      // Отправляем данные на нашу функцию
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          message,
          service: currentService?.title || "Не выбрана (Консультация)",
          price: currentService?.price,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setName("")
        setPhone("")
        setMessage("")
      } else {
        console.error("Ошибка сервера")
        alert("Произошла ошибка при отправке. Пожалуйста, позвоните нам.")
      }
    } catch (error) {
      console.error("Ошибка сети:", error)
      alert("Не удалось отправить заявку. Проверьте интернет.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={s.successContainer}>
        <div className={s.successIcon}>✓</div>
        <h3>Заявка принята!</h3>
        <p>Мы свяжемся с вами в ближайшее время.</p>
        <Button onClick={closeBookingModal} variant="outline">
          Закрыть
        </Button>
      </div>
    )
  }

  return (
    <div className={s.container}>
      <h2 className={s.title}>Запись на сеанс</h2>

      <p className={s.subtitle}>
        Оставьте свои контакты, и администратор свяжется с вами для выбора
        времени.
      </p>

      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.field}>
          <label>Выберите программу</label>
          <select
            className={s.select}
            value={currentServiceId}
            onChange={(e) => setCurrentServiceId(e.target.value)}
          >
            <option value="">-- Хочу проконсультироваться --</option>
            {CATALOG.map((group) => (
              <optgroup key={group.id} label={group.title}>
                {group.items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title} — {item.price} ₽
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className={s.field}>
          <label>Ваше имя</label>
          <input
            type="text"
            placeholder="Иван"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={s.input}
          />
        </div>

        <div className={s.field}>
          <label>Телефон</label>
          <input
            type="tel"
            placeholder="+7 (999) 000-00-00"
            value={phone}
            onChange={handlePhoneChange}
            className={s.input}
          />
        </div>

        <div className={s.field}>
          <label>Комментарий</label>
          <textarea
            placeholder="Желаемая дата, время или вопросы..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={s.textarea}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          style={{ width: "100%" }}
          disabled={isLoading}
        >
          {isLoading ? "Отправка..." : "Жду звонка"}
        </Button>

        <p className={s.disclaimer}>
          Нажимая кнопку, вы даете согласие на обработку персональных данных.
        </p>
      </form>
    </div>
  )
}
