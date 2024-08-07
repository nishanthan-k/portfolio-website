import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <main className='bg-black w-screen text-white flex flex-col items-center gap-10 px-2 py-10 min-h-screen overflow-hidden select-none'>
      <section className='mb-14'>
        <Hero />
      </section>
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
