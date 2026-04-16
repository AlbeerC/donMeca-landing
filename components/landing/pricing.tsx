"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Plan Básico",
    price: "20.000",
    description: "Ideal para talleres chicos",
    features: [
      "Todos los 10 módulos incluidos",
      "Usuarios ilimitados",
      "Acceso desde cualquier dispositivo",
      "Respaldo automático en la nube",
      "Soporte por email",
    ],
    popular: false,
  },
  {
    name: "Plan Pro",
    price: "30.000",
    description: "Gestión avanzada y soporte prioritario",
    features: [
      "Todo lo del Plan Básico",
      "Reportes avanzados",
      "Integraciones con proveedores",
      "Soporte prioritario por WhatsApp",
      "Capacitación personalizada",
      "Múltiples sucursales",
    ],
    popular: true,
  },
]

export function Pricing() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28 relative overflow-hidden">
      {/* Sticky Badge */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 sm:bottom-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <Badge className="bg-primary text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-primary/25">
            <Sparkles className="mr-2 h-4 w-4" />
            PRIMER MES GRATIS en ambos planes. Sin compromisos.
          </Badge>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl text-balance">
            Precios simples, sin sorpresas
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte a tu taller. Podés cambiar en cualquier momento.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative rounded-2xl border-2 bg-white p-8 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10"
                  : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    Más Popular
                  </Badge>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-slate-950">${plan.price}</span>
                  <span className="text-slate-600">/mes</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full py-6 text-base ${
                  plan.popular
                    ? "shadow-lg shadow-primary/25"
                    : "bg-slate-900 hover:bg-slate-800"
                }`}
                variant={plan.popular ? "default" : "secondary"}
              >
                Empezar Prueba Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
