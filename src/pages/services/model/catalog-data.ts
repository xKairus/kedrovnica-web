import { Service } from "@/entities/service/model/types"

export interface CatalogSection {
  id: string
  title: string
  items: Service[]
}

export const CATALOG: CatalogSection[] = [
  {
    id: "under-5000",
    title: "Спа-программы до 5000₽",
    items: [
      {
        id: 101,
        title: "Забота",
        duration: 60, // число (минуты)
        price: 1500,
        category: "spa",
        steps: [
          { name: "Прогревание в бочке", duration: "20 мин" },
          { name: "Расслабляющий массаж всего тела", duration: "40 мин" },
        ],
      },
      {
        id: 102,
        title: "Массаж 60",
        duration: 80,
        price: 2500,
        category: "massage",
        steps: [
          { name: "Прогревание в бочке" }, // duration опционален в типе
          {
            name: "Классический / расслабляющий массаж всего тела",
            duration: "60 мин",
          },
        ],
      },
      {
        id: 103,
        title: "Любо",
        duration: 70,
        price: 2500,
        category: "spa",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Расслабляющий массаж всего тела", duration: "30 мин" },
          { name: "Восстанавливающий массаж головы", duration: "20 мин" },
        ],
      },
      {
        id: 104,
        title: "Сила Сибири",
        duration: 100,
        price: 3800,
        category: "spa",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Очищение скрабом из сбора сибирских трав" },
          {
            name: "Классический/расслабляющий массаж всего тела",
            duration: "60 мин",
          },
        ],
      },
    ],
  },
  {
    id: "for-her",
    title: "Для неё",
    items: [
      {
        id: 201,
        title: "Поленица",
        duration: 120,
        price: 5000,
        category: "spa",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Очищение скрабом из сибирских ягод" },
          {
            name: "Проработка мышц шейно-воротниковой зоны",
            duration: "20 мин",
          },
          { name: "Расслабляющий массаж тела", duration: "60 мин" },
        ],
      },
      {
        id: 202,
        title: "Царская багряница",
        duration: 120,
        price: 5000,
        category: "spa",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Очищение скрабом из сбора сибирских трав" },
          { name: "Водорослевое обертывание" },
          { name: "Расслабляющий массаж тела", duration: "40 мин" },
        ],
      },
    ],
  },
  // ... добавь остальные секции по аналогии, используя steps
]
