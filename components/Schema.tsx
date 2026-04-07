'use client'

export function JsonLdSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lenix Eduardo',
    url: 'https://lenixeduardo.dev',
    image: 'https://lenixeduardo.dev/og-image.png',
    description:
      'Full Stack Developer focused on performance, scalability, and clean architecture.',
    email: 'lenix.camargo@gmail.com',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Self-employed',
    },
    sameAs: [
      'https://github.com/lenixeduardo',
      'https://linkedin.com/in/lenixeduardo',
      'https://twitter.com/xambinho',
      'https://instagram.com/xambinho',
    ],
    knowsAbout: [
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Azure',
      'Docker',
      'Full Stack Development',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
