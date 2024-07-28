import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <main className='bg-black w-screen text-white flex flex-col items-center gap-10 px-2 py-10 min-h-screen'>
      <Hero />
      <Projects />
      <Skills />
    </main>
  )
}

export default App
