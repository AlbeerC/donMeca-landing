"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Plan Básico",
    price: "20.000",
    description: "Ideal para talleres chicos o unipersonales",
    features: [
      "Todos los 10 módulos incluidos",
      "1 usuario administrador",
      "Acceso completo a todas las funciones",
      "Acceso desde cualquier dispositivo",
      "Respaldo automático en la nube",
      "Soporte por whatsapp",
    ],
    popular: false,
  },
  {
    name: "Plan Pro",
    price: "30.000",
    description: "Para talleres con empleados",
    features: [
      "Todos los 10 módulos incluidos",
      "Múltiples usuarios con roles",
      "1 Admin + Staff ilimitados",
      "Control de acceso por rol (Staff con permisos restringidos)",
      "Acceso desde cualquier dispositivo",
      "Respaldo automático en la nube",
      "Soporte prioritario por WhatsApp",
    ],
    popular: true,
  },
];

export function Pricing() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28 relative overflow-hidden">
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 sm:bottom-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <Badge
            className="
        bg-primary text-white font-semibold shadow-lg shadow-primary/25
        px-3 py-1.5 text-xs
        sm:px-4 sm:py-2 sm:text-sm
      "
          >
            <Sparkles className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">
              7 Días de prueba en ambos planes. Sin compromisos.
            </span>
            <span className="sm:hidden">7d de prueba</span>
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
            Elegí el plan que mejor se adapte a tu taller. Podés cambiar en
            cualquier momento.
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
                <h3 className="text-xl font-semibold text-slate-950">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-slate-950">
                    ${plan.price}
                  </span>
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
                asChild
                className={`mt-8 w-full py-6 text-base cursor-pointer ${
                  plan.popular
                    ? "shadow-lg shadow-primary/25"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
                variant={plan.popular ? "default" : "default"}
              >
                <a
                  href="https://sistemadonmeca.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Empezar Prueba Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
