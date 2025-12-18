import { Service } from "./types"

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
