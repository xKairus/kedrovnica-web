import { ContactsSection } from "@/widgets/contacts/ui/ContactsSection/ContactsSection"
import { Hero } from "@/widgets/landing/ui/Hero/Hero"
import { Advantages } from "@/widgets/landing/ui/Advantages/Advantages"
import { PromoSection } from "@/widgets/landing/ui/PromoSection/PromoSection"
import { SpaMenu } from "@/widgets/landing/ui/SpaMenu/SpaMenu"
import { ServicesSection } from "@/widgets/landing/ui/ServicesSection/ServicesSection" 
import { MastersSection } from "@/widgets/landing/ui/MastersSection/MastersSection" 

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <PromoSection />
      <SpaMenu />
      <ServicesSection />
      <MastersSection />
      <ContactsSection />
    </>
  )
}
