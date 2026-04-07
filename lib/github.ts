export interface Repository {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  html_url: string
  homepage: string | null
  fork: boolean
  topics?: string[]
  readmeDescription?: string
  imageUrl?: string
}

export interface RepositoryWithSlug extends Repository {
  slug: string
}

async function fetchGitHubRepos(): Promise<Repository[]> {
  try {
    const response = await fetch(
      'https://api.github.com/users/lenixeduardo/repos?per_page=100&sort=created&direction=desc',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: Repository[] = await response.json()

    // Filter out forks and portfolio repo
    return repos.filter((repo) => !repo.fork && repo.name !== 'portfolio')
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
    return []
  }
}

async function fetchOgImage(owner: string, repo: string): Promise<string | null> {
  try {
    const response = await fetch(`https://github.com/${owner}/${repo}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    })
    if (!response.ok) return null
    
    const html = await response.text()
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/)
    return ogImageMatch?.[1] || null
  } catch {
    return null
  }
}

export async function getRepos(): Promise<RepositoryWithSlug[]> {
  const repos = await fetchGitHubRepos()

  // Fetch OG images in parallel
  const imagePromises = repos.map(repo => fetchOgImage('lenixeduardo', repo.name))
  const images = await Promise.all(imagePromises)

  return repos.map((repo, index) => ({
    ...repo,
    slug: repo.name
      .toLowerCase()
      .replace(/[^\w-]+/g, '-')
      .replace(/^-+|-+$/g, ''),
    imageUrl: images[index] || undefined,
  }))
}

export async function getRepo(slug: string): Promise<RepositoryWithSlug | null> {
  const repos = await getRepos()
  return repos.find((repo) => repo.slug === slug) || null
}

async function fetchReadme(owner: string, repo: string): Promise<string | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 },
    })
    if (!response.ok) return null
    const data = await response.json()
    const content = Buffer.from(data.content, 'base64').toString('utf-8')
    // Extract first paragraph as description
    const lines = content.split('\n').filter(line => line.trim())
    const firstPara = lines.find(line => !line.startsWith('#') && line.trim()) || ''
    // Remove Markdown formatting: headers, blockquotes, and clean up
    return firstPara.replace(/^#+\s*/, '').replace(/^>\s*/, '').trim() || null
  } catch {
    return null
  }
}

export async function getTopRepos(limit: number = 5): Promise<RepositoryWithSlug[]> {
  const repos = await getRepos()
  const topRepos = repos.slice(0, limit)
  
  // Fetch README descriptions in parallel
  const readmePromises = topRepos.map(repo => fetchReadme('lenixeduardo', repo.name))
  const readmeDescriptions = await Promise.all(readmePromises)
  
  return topRepos.map((repo, index) => ({
    ...repo,
    readmeDescription: readmeDescriptions[index]
  }))
}
