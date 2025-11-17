import { HeartHandshake, Home, Car, Briefcase, ShieldCheck, PiggyBank } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'Home & Renters',
    desc: 'Protect your space and everything in it with tailored coverage for owners and renters.'
  },
  {
    icon: Car,
    title: 'Auto',
    desc: 'Smarter auto insurance with flexible deductibles and rapid claims support.'
  },
  {
    icon: Briefcase,
    title: 'Life & Income',
    desc: 'Plan ahead with life and income protection designed around your goals.'
  },
  {
    icon: HeartHandshake,
    title: 'Health',
    desc: 'Essential medical coverage with transparent terms and broad networks.'
  },
  {
    icon: PiggyBank,
    title: 'Savings',
    desc: 'Bundle policies and save with discounts that reward smart choices.'
  },
  {
    icon: ShieldCheck,
    title: 'Claims that care',
    desc: 'Fast, human claims processing with empathy at the center.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Coverage that fits your life</h2>
          <p className="mt-3 text-slate-600">Clear, comprehensive protection across every part of your day.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-50 to-emerald-50" />
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
