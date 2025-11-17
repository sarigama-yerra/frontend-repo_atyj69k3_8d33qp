import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-slate-700 ring-1 ring-black/5">
            <ShieldCheck size={16} className="text-emerald-600" />
            Trusted protection for what matters most
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Insurance, simplified.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">Modern coverage for modern life.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Get clear, affordable coverage in minutes. No jargon. No hidden fees. Just peace of mind.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#plans" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-base font-medium hover:bg-slate-800 transition">
              Get a quote
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 ring-1 ring-black/10 px-6 py-3 text-base font-medium hover:bg-slate-50 transition">
              Explore coverage
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-600">
            <div>
              <div className="text-2xl font-semibold text-slate-900">98%</div>
              Claims satisfaction
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">24/7</div>
              Human support
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">5 min</div>
              Average quote time
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">A+</div>
              Financial strength
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
