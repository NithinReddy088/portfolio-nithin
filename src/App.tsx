import { ThemeProvider } from './hooks/useTheme'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { CustomCursor } from './components/ui/CustomCursor'
import { ScrollProgress } from './components/ui/ScrollProgress'
import './styles/globals.css'

function Portfolio() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}
