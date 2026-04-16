import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { PainPoints } from "@/components/landing/pain-points"
import { Features } from "@/components/landing/features"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { CTAFooter } from "@/components/landing/cta-footer"

// Structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "DonMeca",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Software de gestión para talleres mecánicos argentinos. Controlá trabajos, clientes, stock, presupuestos y caja desde cualquier dispositivo.",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "20000",
        "highPrice": "30000",
        "priceCurrency": "ARS",
        "offerCount": "2"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50"
      },
      "featureList": [
        "Gestión de trabajos y órdenes",
        "Control de vehículos e historial",
        "Base de datos de clientes",
        "Presupuestos profesionales",
        "Control de stock",
        "Catálogo de servicios",
        "Gestión de proveedores",
        "Caja diaria",
        "Gestión de empleados",
        "Configuración del taller"
      ]
    },
    {
      "@type": "Organization",
      "name": "DonMeca",
      "url": "https://donmeca.com.ar",
      "logo": "https://donmeca.com.ar/donmeca-logo.png",
      "description": "Software de gestión para talleres mecánicos en Argentina",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54-2284-231048",
        "contactType": "sales",
        "areaServed": "AR",
        "availableLanguage": "Spanish"
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "name": "DonMeca",
      "url": "https://donmeca.com.ar",
      "description": "Orden para tu taller, tiempo para vos. Software de gestión para talleres mecánicos.",
      "inLanguage": "es-AR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Es difícil de usar DonMeca?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, si sabés usar WhatsApp, sabés usar DonMeca. Diseñamos cada pantalla para que sea intuitiva y fácil de entender. Además, te damos una capacitación gratuita cuando te suscribís."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa con mis datos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Están seguros en la nube, accesibles desde cualquier lugar y dispositivo. Hacemos respaldos automáticos diarios y usamos encriptación de nivel bancario para proteger tu información."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo acceder desde el celular?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, DonMeca funciona perfectamente en el celular, tablet y computadora. Podés consultar información, crear presupuestos y gestionar trabajos desde donde estés."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo cancelar en cualquier momento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, no hay contratos de permanencia. Podés cancelar tu suscripción cuando quieras y tus datos estarán disponibles para descargar durante 30 días después de la cancelación."
          }
        }
      ]
    }
  ]
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        <div className="pt-16"> {/* Offset for fixed header */}
          <Hero />
          <PainPoints />
          <section id="funciones" aria-label="Funciones de DonMeca">
            <Features />
          </section>
          <section id="precios" aria-label="Planes y precios">
            <Pricing />
          </section>
          <section id="faq" aria-label="Preguntas frecuentes">
            <FAQ />
          </section>
          <CTAFooter />
        </div>
      </main>
    </>
  )
}
