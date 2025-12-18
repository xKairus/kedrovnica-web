import { Master } from '../../model/types';
import s from './MasterCard.module.css';

interface MasterCardProps {
  master: Master;
}

export const MasterCard = ({ master }: MasterCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.imageWrapper}>
        <img src={master.imageUrl} alt={master.name} className={s.image} />
      </div>
      
      <div className={s.content}>
        <div className={s.header}>
          <h3 className={s.name}>{master.name}</h3>
          {master.experience && (
            <span className={s.experience}>Опыт: {master.experience}</span>
          )}
        </div>

        <p className={s.description}>{master.description}</p>

        {master.location && (
          <div className={s.locationBadge}>
            {master.location}
          </div>
        )}
      </div>
    </article>
  );
};