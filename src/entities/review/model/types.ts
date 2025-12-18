export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  text: string;
  source: '2gis' | 'yandex' | 'google';
}