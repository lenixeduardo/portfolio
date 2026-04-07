import { getRepos } from '@/lib/github'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const repos = await getRepos()

    const projectRoutes = repos.map((repo) => ({
      url: `https://lenixeduardo.dev/projects/${repo.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [
      {
        url: 'https://lenixeduardo.dev',
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
      },
      {
        url: 'https://lenixeduardo.dev/#projects',
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: 'https://lenixeduardo.dev/#contact',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      ...projectRoutes,
    ]
  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    return [
      {
        url: 'https://lenixeduardo.dev',
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
      },
    ]
  }
}
