import { Button } from "@/shared/ui/Button/Button"
import { Container } from "@/shared/ui/Layout/Container"
import { MOCK_REVIEWS } from "@/entities/review/model/mock-data"
import { ReviewCard } from "@/entities/review/ui/ReviewCard/ReviewCard"
import s from "./ReviewsSection.module.css"

export const ReviewsSection = () => {
  return (
    <section className={s.section} id="reviews">
      <Container>
        <div className={s.container}>
          <div className={s.summaryCard}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
                Кедровница
              </div>
              <div className={s.ratingBig}>4.9</div>
              <div
                style={{ color: "#FFC107", letterSpacing: 4, margin: "8px 0" }}
              >
                ★★★★★
              </div>
              <div className={s.ratingLabel}>На основе 501 оценок</div>
            </div>
            <div className={s.buttonWrapper}>
              <Button
                variant="outline"
                style={{ fontSize: 14, padding: "8px 16px" }}
              >
                Оставить отзыв
              </Button>
            </div>
          </div>

          <div className={s.reviewsGrid}>
            {MOCK_REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
