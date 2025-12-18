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
        duration: 60,
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
          { name: "Прогревание в бочке" },
          {
            name: "Классический / расслабляющий массаж всего тела",
            duration: "60 мин",
          },
        ],
      },
      {
        id: 103,
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
      {
        id: 203,
        title: "Вересковый мёд",
        duration: 140,
        price: 6000,
        category: "spa",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Очищение скрабом с мёдом" },
          {
            name: "Классический / расслабляющий массаж тела",
            duration: "90 мин",
          },
          { name: "Кремовый уход" },
        ],
      },
    ],
  },
  {
    id: "for-him", 
    title: "Для него",
    items: [
      {
        id: 301,
        title: "Душу зановить",
        duration: 100,
        price: 3700,
        category: "spa",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Расслабляющий массаж тела", duration: "60 мин" },
          { name: "Массаж ступней", duration: "20 мин" },
        ],
      },
      {
        id: 302,
        title: "Богатырь",
        duration: 120,
        price: 5000,
        category: "spa",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Очищение скрабом из сбора сибирских трав" },
          {
            name: "Проработка мышц шейно-воротниковой зоны",
            duration: "20 мин",
          },
          { name: "Расслабляющий массаж тела", duration: "60 мин" },
        ],
      },
    ],
  },
  {
    id: "for-two", 
    title: "Идеально для двоих",
    items: [
      {
        id: 401,
        title: "Лепота",
        duration: 80,
        price: 5000,
        category: "couple",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Расслабляющий массаж тела", duration: "40 мин" },
          { name: "Массаж стоп или головы на выбор", duration: "20 мин" },
        ],
      },
      {
        id: 402,
        title: "Услада",
        duration: 100,
        price: 8000,
        category: "couple",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Очищение скрабом из кедра и сибирских ягод" },
          {
            name: "Классический/расслабляющий массаж тела",
            duration: "40 мин",
          },
        ],
      },
    ],
  },
  {
    id: "massage", 
    title: "Массаж",
    items: [
      {
        id: 501,
        title: "Массаж Классический",
        duration: 60,
        price: 2500,
        category: "massage",
        steps: [
          { name: "Проработка всех групп мышц" },
          { name: "Снятие напряжения и усталости" },
        ],
      },
      {
        id: 502,
        title: "Массаж спины",
        duration: 40,
        price: 1800,
        category: "massage",
        steps: [
          { name: "Глубокая проработка мышц спины" },
          { name: "Устранение зажимов" },
        ],
      },
    ],
  },
  {
    id: "correction", 
    title: "Коррекция фигуры",
    items: [
      {
        id: 601,
        title: "Скульптор тела",
        duration: 90, 
        price: 14500,
        category: "correction",
        steps: [
          { name: "Антицеллюлитный массаж" },
          { name: "Лимфодренажный массаж" },
          { name: "Обертывание" },
        ],
      },
      {
        id: 602,
        title: "Против отеков",
        duration: 60,
        price: 4500,
        category: "correction",
        steps: [
          { name: "Прогревание в бочке" },
          { name: "Лимфодренажный массаж тела", duration: "60 мин" },
        ],
      },
    ],
  },
]
