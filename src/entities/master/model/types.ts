export interface Master {
  id: number;
  name: string; 
  role?: string; // Например: "Мастер спа-программ", "Массажист"(опционально)
  imageUrl: string; // Ссылка на фото
  description: string; // Описание 
  experience?: string; // "Опыт: 10 лет"
  location?: string;   // "Филиал на Седова, 19"
}

export interface ServiceStep {
  name: string; // Например: "Прогревание в бочке"
  duration?: string; // "20 мин" (опционально)
}

export interface Service {
  id: number;
  title: string; // "Кедровница"
  price: number; // 3700
  duration: number; // В минутах, например 100
  description?: string; // Краткое описание
  steps: ServiceStep[]; // Список этапов (булллиты в карточке)
  category: 'spa' | 'massage' | 'correction' | 'couple'; // Категория для фильтрации
}