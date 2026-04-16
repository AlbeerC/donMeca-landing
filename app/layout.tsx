import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://donmeca.com.ar'),
  title: {
    default: 'DonMeca | Software de Gestión para Talleres Mecánicos en Argentina',
    template: '%s | DonMeca - Gestión de Talleres',
  },
  description: 'DonMeca: Orden para tu taller, tiempo para vos. Software de gestión para talleres mecánicos argentinos. Controlá trabajos, clientes, stock, presupuestos y caja desde cualquier dispositivo. Probalo gratis 30 días.',
  keywords: [
    'software taller mecánico',
    'gestión taller mecánico',
    'sistema taller automotriz',
    'software para mecánicos',
    'gestión de taller Argentina',
    'facturación taller mecánico',
    'presupuestos taller',
    'control de stock taller',
    'administración taller mecánico',
    'programa para taller de autos',
    'sistema de gestión automotriz',
    'software mecánica automotriz',
    'taller mecánico digital',
    'órdenes de trabajo taller',
    'historial de vehículos',
    'gestión de clientes taller',
    'caja diaria taller',
    'DonMeca',
  ],
  authors: [{ name: 'DonMeca', url: 'https://donmeca.com.ar' }],
  creator: 'DonMeca',
  publisher: 'DonMeca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/',
    },
  },
  openGraph: {
    title: 'DonMeca | Orden para tu taller, tiempo para vos',
    description: 'Software de gestión para talleres mecánicos argentinos. Controlá trabajos, clientes, stock y caja sin complicaciones. Probalo gratis 30 días.',
    url: 'https://donmeca.com.ar',
    siteName: 'DonMeca',
    images: [
      {
        url: '/donmeca-logo.png',
        width: 1200,
        height: 630,
        alt: 'DonMeca - Software de Gestión para Talleres Mecánicos',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DonMeca | Software de Gestión para Talleres Mecánicos',
    description: 'Orden para tu taller, tiempo para vos. Controlá trabajos, clientes, stock y caja sin complicaciones.',
    images: ['/donmeca-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f97316',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
