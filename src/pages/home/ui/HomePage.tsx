import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Layout/Container';
import { useUiStore } from '@/shared/model/useUiStore';
import { MOCK_MASTERS } from '@/entities/master/model/mock-data';
import { MasterCard } from '@/entities/master/ui/MasterCard/MasterCard';
import { MOCK_SERVICES } from '@/entities/service/model/mock-data';
import { ServiceCard } from '@/entities/service/ui/ServiceCard/ServiceCard';
import { ContactsSection } from '@/widgets/contacts/ui/ContactsSection/ContactsSection';

// Импортируем стили
import s from './HomePage.module.css';

export const HomePage = () => {
  const { openBookingModal } = useUiStore();

  return (
    <>
      {/* 1. HERO BLOCK */}
      <section className={s.heroSection}>
        <Container>
          <h1 className={s.heroTitle}>
            Подарочный сертификат <br />
            в спа-салон Тюмени
          </h1>
          <p className={s.heroSubtitle}>
            Проявить заботу и любовь - легко: <br />
            готовый подарок всего за 10 минут
          </p>
          <Button onClick={openBookingModal} variant="primary">
            Оформить сертификат
          </Button>
        </Container>
      </section>

      {/* 2. ADVANTAGES */}
      <section className={s.advantagesSection}>
        <Container>
          <div className={s.advantagesGrid}>
            <div className={s.advantageCard}>
              <span className={s.advantageNumber}>1</span>
              <div className={s.advantageContent}>
                <h3 className={s.advantageTitle}>Бесплатная <br/> доставка по городу</h3>
                <p className={s.advantageText}>
                  При покупке от 5000. <br/>
                  Мы доставим адресату ваш подарок: настоящую заботу.
                </p>
              </div>
            </div>
            
            <div className={s.advantageCard}>
              <span className={s.advantageNumber}>2</span>
              <div className={s.advantageContent}>
                <h3 className={s.advantageTitle}>Кэшбэк до <br/> 10%</h3>
                <p className={s.advantageText}>
                  Накопительная бонусная система.
                </p>
              </div>
            </div>

            <div className={s.advantageCard}>
              <span className={s.advantageNumber}>3</span>
              <div className={s.advantageContent}>
                <h3 className={s.advantageTitle}>Путешествие к <br/> традициям</h3>
                <p className={s.advantageText}>
                  Натуральная косметика, бережный сервис и уникальный опыт, который запомнится надолго.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Остальные секции пока оставляем как есть, их поправим следующим коммитом */}
      <section id="masters" style={{ marginBottom: 80 }}>
        <Container>
          <h2 style={{ fontSize: 32, marginBottom: 40, fontFamily: 'var(--font-display)' }}>Наши мастера</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {MOCK_MASTERS.map(master => (
              <MasterCard key={master.id} master={master} />
            ))}
          </div>
        </Container>
      </section>

      <section id="services" style={{ marginBottom: 80 }}>
        <Container>
          <h2 style={{ fontSize: 32, marginBottom: 40, fontFamily: 'var(--font-display)' }}>Популярные услуги</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {MOCK_SERVICES.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                actionSlot={
                  <Button variant="outline" style={{ width: '100%' }} onClick={openBookingModal}>
                    Выбрать
                  </Button>
                }
              />
            ))}
          </div>
        </Container>
      </section>

      <ContactsSection />
    </>
  );
};