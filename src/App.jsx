import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
        <CTA />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Securely Insurance. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
