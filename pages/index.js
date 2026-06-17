import Head from 'next/head'
import Navbar   from '../components/Navbar'
import Hero     from '../components/Hero'
import About    from '../components/About'
import Projects from '../components/Projects'
import Skills   from '../components/Skills'
import Contact  from '../components/Contact'
import Footer   from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Suleiman Usama — AI Researcher</title>
        <meta name="description" content="AI researcher focused on deep learning for healthcare and infrastructure in African contexts. Jeonbuk National University, South Korea." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title"       content="[Your Name] — AI Researcher" />
        <meta property="og:description" content="Building AI that works where it matters. SCD detection, computer vision, African healthcare context." />
        <meta property="og:type"        content="website" />

        {/* Favicon — simple text favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔬</text></svg>" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
