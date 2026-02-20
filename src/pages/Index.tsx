import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bochum | Vegas Barber Salon</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Vegas Barber Salon in Bochum für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bochum"
        />
        <link rel="canonical" href="https://vegasbarber.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Vegas Barber Salon | Premium Barbershop Bochum" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bochum."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegasbarber.de" />
        <meta property="og:image" content="https://vegasbarber.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vegas Barber Salon | Premium Barbershop Bochum" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://vegasbarber.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Vegas Barber Salon",
            "image": "https://vegasbarber.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Castroper Hellweg 422",
              "addressLocality": "Bochum",
              "postalCode": "44805",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4984",
              "longitude": "7.2758"
            },
            "url": "https://vegasbarber.de",
            "telephone": "+49 176 61064592",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/vegasbarber",
              "https://www.instagram.com/vegasbarber"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

