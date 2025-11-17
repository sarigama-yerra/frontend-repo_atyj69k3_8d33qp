import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Essential',
    price: 19,
    features: ['Core protections', 'Standard deductibles', 'Email support']
  },
  {
    name: 'Plus',
    price: 39,
    popular: true,
    features: ['Expanded coverage', 'Lower deductibles', 'Priority support']
  },
  {
    name: 'Elite',
    price: 79,
    features: ['Premium coverage', 'Minimal deductibles', '24/7 concierge']
  }
]

export default function Plans() {
  return (
    <section id="plans" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent plans</h2>
          <p className="mt-3 text-slate-600">Pick a plan, adjust your options, and get instant pricing.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl p-6 ring-1 ring-black/5 bg-white shadow-sm ${tier.popular ? 'md:-mt-4 md:mb-4 border border-blue-200 shadow-md' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-blue-600 text-white text-xs px-3 py-1 shadow">Most popular</div>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-2 text-4xl font-semibold text-slate-900">
                ${tier.price}
                <span className="text-base font-normal text-slate-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${tier.popular ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 ring-1 ring-black/10 hover:bg-slate-50'}`}>Choose {tier.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
