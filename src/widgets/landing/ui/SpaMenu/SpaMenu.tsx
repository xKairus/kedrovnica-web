import { Link } from 'react-router-dom'; 
import { Container } from '@/shared/ui/Layout/Container';
import s from './SpaMenu.module.css';

const CATEGORIES = [
  { id: 1, title: 'СПА ДЛЯ НЕЕ', link: '/services#for-her' },
  { id: 2, title: 'СПА ДЛЯ НЕГО', link: '/services#for-him' },
  { id: 3, title: 'ДЛЯ ДВОИХ', link: '/services#for-two' },
  { id: 4, title: 'МАССАЖ', link: '/services#massage' },
  { id: 5, title: 'КОРРЕКЦИЯ', link: '/services#correction' },
  { id: 6, title: 'ДО 5000₽', link: '/services#under-5000' },
];

export const SpaMenu = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.header}>
          <h2 className={s.title}>Спа-меню</h2>
          <Link to="/services" className={s.link}>Посмотреть все →</Link>
        </div>
        
        <div className={s.grid}>
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} to={cat.link} className={s.card}>
              <span className={s.cardTitle}>{cat.title}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};