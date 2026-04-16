"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Es difícil de usar?",
    answer:
      "No, si sabés usar WhatsApp, sabés usar DonMeca. Diseñamos cada pantalla para que sea intuitiva y fácil de entender. Además, te damos una capacitación gratuita cuando te suscribís.",
  },
  {
    question: "¿Qué pasa con mis datos?",
    answer:
      "Están seguros en la nube, accesibles desde cualquier lugar y dispositivo. Hacemos respaldos automáticos diarios y usamos encriptación de nivel bancario para proteger tu información.",
  },
  {
    question: "¿Puedo acceder desde el celular?",
    answer:
      "Sí, DonMeca funciona perfectamente en el celular, tablet y computadora. Podés consultar información, crear presupuestos y gestionar trabajos desde donde estés.",
  },
  {
    question: "¿Qué pasa si ya tengo datos en planillas de Excel?",
    answer:
      "Te ayudamos a migrar tus datos existentes sin costo adicional. Nuestro equipo se encarga de importar tu información de clientes, vehículos y productos para que empieces sin problemas.",
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer:
      "Sí, no hay contratos de permanencia. Podés cancelar tu suscripción cuando quieras y tus datos estarán disponibles para descargar durante 30 días después de la cancelación.",
  },
  {
    question: "¿Funciona sin internet?",
    answer:
      "DonMeca necesita conexión a internet para funcionar. Sin embargo, con cualquier conexión básica de celular o WiFi es suficiente para usarlo sin problemas.",
  },
]

export function FAQ() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Todo lo que necesitás saber sobre DonMeca
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-slate-200 bg-white px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-slate-900/5"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-slate-950 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
