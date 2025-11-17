import { useState } from 'react'
import { Menu, X, Shield, Phone, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
            <Shield size={18} />
          </span>
          Securely
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Coverage</a>
          <a href="#plans" className="text-slate-600 hover:text-slate-900 transition">Plans</a>
          <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition">Stories</a>
          <a href="#faq" className="text-slate-600 hover:text-slate-900 transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <Phone size={16} /> Support
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition">
            <User size={16} /> Sign in
          </a>
        </div>

        <button aria-label="menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#features" className="py-2">Coverage</a>
            <a href="#plans" className="py-2">Plans</a>
            <a href="#testimonials" className="py-2">Stories</a>
            <a href="#faq" className="py-2">FAQ</a>
            <a href="#" className="py-2 flex items-center gap-2"><Phone size={16}/> Support</a>
            <a href="#" className="py-2 flex items-center gap-2"><User size={16}/> Sign in</a>
          </div>
        </div>
      )}
    </header>
  )
}
