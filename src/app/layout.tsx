import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://voltway.vercel.app'),
  title: 'VoltWay — дороги, що заряджають майбутнє',
  description: 'VoltWay — інтелектуальна дорожня система бездротової зарядки електромобілів у русі.',
  openGraph: {
    title: 'VoltWay — дороги, що заряджають майбутнє',
    description: 'Інтелектуальна дорожня система, що бездротово заряджає електромобілі під час руху.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'VoltWay' }],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoltWay — дороги, що заряджають майбутнє',
    description: 'Інтелектуальна дорожня система, що бездротово заряджає електромобілі під час руху.',
    images: ['/images/og-image.jpg'],
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='uk' className={`${geist.variable} scroll-smooth`}><body>{children}</body></html>}
