import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Layout/Container';
import { useUiStore } from '@/shared/model/useUiStore';
import { MOCK_MASTERS } from '@/entities/master/model/mock-data';
import { MasterCard } from '@/entities/master/ui/MasterCard/MasterCard';
import { MOCK_SERVICES } from '@/entities/service/model/mock-data';
import { ServiceCard } from '@/entities/service/ui/ServiceCard/ServiceCard';
import { ContactsSection } from '@/widgets/contacts/ui/ContactsSection/ContactsSection';

import { Hero } from '@/widgets/landing/ui/Hero/Hero';
import { Advantages } from '@/widgets/landing/ui/Advantages/Advantages';
import { PromoSection } from '@/widgets/landing/ui/PromoSection/PromoSection';
import { SpaMenu } from '@/widgets/landing/ui/SpaMenu/SpaMenu';

export const HomePage = () => {
  const { openBookingModal } = useUiStore();

  return (
    <>
      <Hero />
      <Advantages />
      <PromoSection />
      <SpaMenu />
      
      <section style={{ marginBottom: 80 }}>
        <Container>
          <h2 style={{ fontSize: 32, marginBottom: 40, fontFamily: 'var(--font-display)' }}>Популярные программы</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {MOCK_SERVICES.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                actionSlot={
                  <Button variant="outline" style={{ width: '100%' }} onClick={openBookingModal}>
                    Оформить сертификат
                  </Button>
                }
              />
            ))}
          </div>
        </Container>
      </section>

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

      <ContactsSection />
    </>
  );
};