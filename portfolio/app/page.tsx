import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { getTopRepos } from '@/lib/github'

export default async function Home() {
  const projects = await getTopRepos(6)

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  )
}
