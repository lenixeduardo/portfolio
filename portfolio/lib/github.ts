export interface Repository {
  id: number
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  html_url: string
  topics?: string[]
}

export interface RepositoryWithSlug extends Repository {
  slug: string
}

async function fetchGitHubRepos(): Promise<Repository[]> {
  try {
    const response = await fetch(
      'https://api.github.com/users/lenixeduardo/repos?per_page=100',
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

    // Filter out forks and sort by stars
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
    return []
  }
}

export async function getRepos(): Promise<RepositoryWithSlug[]> {
  const repos = await fetchGitHubRepos()

  return repos.map((repo) => ({
    ...repo,
    slug: repo.name
      .toLowerCase()
      .replace(/[^\w-]+/g, '-')
      .replace(/^-+|-+$/g, ''),
  }))
}

export async function getRepo(slug: string): Promise<RepositoryWithSlug | null> {
  const repos = await getRepos()
  return repos.find((repo) => repo.slug === slug) || null
}

export async function getTopRepos(limit: number = 6): Promise<RepositoryWithSlug[]> {
  const repos = await getRepos()
  return repos.slice(0, limit)
}
