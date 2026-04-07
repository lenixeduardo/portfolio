import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { JsonLdSchema } from '@/components/Schema'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lenixeduardo.dev'),
  title: 'Lenix Eduardo | Full Stack Developer',
  description:
    'I build systems that solve real-world problems. Full Stack Developer focused on performance, scalability, and clean architecture.',
  authors: [{ name: 'Lenix Eduardo', url: 'https://lenixeduardo.dev' }],
  creator: 'Lenix Eduardo',
  keywords: [
    'Full Stack Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Developer',
    'Software Engineer',
    'Web Developer',
    'São Paulo',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lenixeduardo.dev',
    title: 'Lenix Eduardo | Full Stack Developer',
    description:
      'I build systems that solve real-world problems. Full Stack Developer focused on performance, scalability, and clean architecture.',
    siteName: 'Lenix Eduardo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lenix Eduardo - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lenix Eduardo | Full Stack Developer',
    description:
      'I build systems that solve real-world problems. Full Stack Developer focused on performance, scalability, and clean architecture.',
    creator: '@xambinho',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: 'https://lenixeduardo.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <JsonLdSchema />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-black text-white antialiased`}>
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.015] bg-noise"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
