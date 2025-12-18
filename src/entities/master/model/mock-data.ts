import { Master } from "./types"
import { Service } from "./types"

export const MOCK_MASTERS: Master[] = [
  {
    id: 1,
    name: "Наталья",
    role: "Старший мастер",
    experience: "10 лет",
    location: "Филиал на Седова, 19",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    description:
      "Очень люблю работать с детьми и беременными женщинами. Заряжаюсь положительной энергией.",
  },
  {
    id: 2,
    name: "Татьяна",
    role: "Мастер спа-программ",
    experience: "5 лет",
    location: "Филиал на Седова, 19",
    imageUrl:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=600&auto=format&fit=crop",
    description:
      "Я выбрала эту профессию, потому что мне нравится помогать людям чувствовать себя лучше.",
  },
]

export const MOCK_SERVICES: Service[] = [
  {
    id: 1,
    title: "Кедровница",
    price: 3700,
    duration: 100,
    category: "spa",
    steps: [
      { name: "Прогревание в бочке", duration: "20 мин" },
      {
        name: "Очищение скрабом из кедра и сибирских ягод",
        duration: "20 мин",
      },
      { name: "Глубокая проработка мышц спины", duration: "30 мин" },
      { name: "Расслабляющий массаж тела", duration: "30 мин" },
    ],
  },
  {
    id: 2,
    title: "Богатырь",
    price: 5000,
    duration: 120,
    category: "spa",
    steps: [
      { name: "Прогревание в бочке", duration: "20 мин" },
      { name: "Очищение скрабом из сбора сибирских трав", duration: "20 мин" },
      { name: "Проработка мышц шейно-воротниковой зоны", duration: "20 мин" },
      { name: "Расслабляющий массаж тела", duration: "60 мин" },
    ],
  },
]
