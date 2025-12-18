import { Review } from "../../model/types"
import s from "./ReviewCard.module.css"

interface ReviewCardProps {
  review: Review
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.header}>
        <div>
          <div className={s.author}>{review.author}</div>
          <div className={s.stars}>{"★".repeat(review.rating)}</div>
          <div className={s.date}>{review.date}</div>
        </div>
      </div>
      <p className={s.text}>{review.text}</p>
      <div className={s.source}>
        <span>2ГИС</span>
      </div>
    </article>
  )
}
