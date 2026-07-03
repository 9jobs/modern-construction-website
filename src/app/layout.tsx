import type { Metadata } from 'next';
import './globals.css';
import { PropertyProvider } from '../context/PropertyContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LocationSelector } from '../components/LocationSelector';
import { CompareTool } from '../components/CompareTool';
import { PropertyDetailModal } from '../components/PropertyDetailModal';
import { MotionSiteShell } from '../components/MotionSiteShell';

export const metadata: Metadata = {
  title: 'Modern Properties | Property Buying, & Selling',
  description:
    'Modern Properties buys properties with potential, coordinates development or renovation through trusted third-party contractors, and offers completed properties for sale.',
  keywords:
    'Modern Properties, property buying, property selling, property development coordination, renovated properties for sale, ready-to-buy properties, property investment resale',
  authors: [{ name: 'Modern Properties' }],
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Load Google Fonts dynamically in the browser to avoid build-time fetch errors */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700&family=Pinyon+Script&family=Monsieur+La+Doulaise&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-brand-bg text-brand-charcoal min-h-full flex flex-col selection:bg-brand-primary selection:text-white">
        <PropertyProvider>
          <Header />
          <MotionSiteShell>{children}</MotionSiteShell>
          <Footer />
          <LocationSelector />
          <CompareTool />
          <PropertyDetailModal />
        </PropertyProvider>
      </body>
    </html>
  );
}
