import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {

  return (
    <main className='bg-black w-screen text-white flex flex-col items-center gap-10 min-h-screen'>
      <Hero />
      <Projects />
    </main>
  )
}

export default App
