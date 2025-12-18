import { ReactNode } from 'react';
import { Service } from '../../model/types';
import s from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  actionSlot?: ReactNode; // Сюда передадим кнопку
}

export const ServiceCard = ({ service, actionSlot }: ServiceCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.header}>
        <div>
          <h3 className={s.title}>{service.title}</h3>
          <span className={s.duration}>Продолжительность: {service.duration} мин</span>
        </div>
        <div className={s.price}>{service.price}₽</div>
      </div>

      <div className={s.body}>
        <ul className={s.steps}>
          {service.steps.map((step, index) => (
            <li key={index} className={s.step}>
              {step.name} 
              {step.duration && <span className={s.durationStep}>({step.duration})</span>}
            </li>
          ))}
        </ul>
        
        {/* Место для кнопки */}
        {actionSlot}
      </div>
    </article>
  );
};