import { ReactNode } from "react"
import { Service } from "../../model/types"
import { formatDuration } from "@/shared/lib/formatDuration"
import s from "./ServiceCard.module.css"

interface ServiceCardProps {
  service: Service
  actionSlot?: ReactNode
}

export const ServiceCard = ({ service, actionSlot }: ServiceCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.header}>
        <div className={s.headerContent}>
          <h3 className={s.title}>{service.title}</h3>
          <div className={s.duration}>
            Продолжительность: {formatDuration(service.duration)}
          </div>
        </div>
        <div className={s.price}>{service.price} ₽</div>
      </div>

      <div className={s.body}>
        <div className={s.description}>{service.description}</div>

        {actionSlot && <div className={s.actions}>{actionSlot}</div>}
      </div>
    </article>
  )
}
