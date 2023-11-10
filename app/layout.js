import './globals.css'
import * as React from 'react';
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react';
import SmoothScroll from '@/components/smooth-scroll/SmoothScroll';

//Components
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { metaData } from '@/data/meta-data';

//Setup & Meta
const myFont = localFont({ src: [
  {
    path: './FFFAcidGroteskVariable.ttf',
    style: 'normal',
  },
  {
    path: './FFFAcidGroteskVariable.ttf',
    style: 'italic',
  },
], })

export const metadata = {
  title: metaData.title,
  description: metaData.description,

  //Basic
  generator: metaData.title,
  applicationName: metaData.title,
  referrer: 'origin-when-cross-origin',
  keywords: metaData.keywords,
  authors: [{ name: 'Pedro H. Alencar' }, { name: 'PEAGACE', url: 'https://peagace.com' }],
  creator: 'PEAGACE',
  publisher: 'PEAGACE',
  themeColor: metaData.themeColor,

  //Open Graph
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.url,
    siteName: metaData.subtitle,
    images: [
      {
        url: metaData.metaImage,
        width: 1200,
        height: 600,
      },     
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {/* <Header /> */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  )
}
