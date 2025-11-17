import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white">
          <div className="absolute inset-0">
            <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
          </div>
          <div className="relative z-10 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Ready to protect what matters?</h3>
              <p className="mt-2 text-slate-300 max-w-xl">Answer a few questions and get a personalized quote in minutes. Switch anytime. Cancel anytime.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-medium hover:bg-slate-100 transition">
              Start your quote
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
