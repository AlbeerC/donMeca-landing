"use client"

import { motion } from "framer-motion"
import { X, Check, FileX, Clock, Search, Smartphone } from "lucide-react"

const beforeItems = [
  { icon: FileX, text: "Papeles y facturas perdidas" },
  { icon: Clock, text: "Horas buscando información" },
  { icon: Search, text: "Sin historial de clientes" },
  { icon: X, text: "Caja desordenada" },
]

const afterItems = [
  { text: "Todo digital y organizado" },
  { text: "Información al instante" },
  { text: "Historial completo por cliente" },
  { text: "Caja clara y precisa" },
]

export function PainPoints() {
  return (
    <section className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            ¿Todavía usás papel o planillas difíciles?
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Sabemos lo frustrante que es perder tiempo en papelerío cuando podrías estar arreglando autos.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-red-500/20 bg-red-950/20 p-8"
          >
            <div className="absolute -top-4 left-6 rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white">
              ANTES
            </div>
            <div className="mt-4 space-y-5">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                    <item.icon className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-lg text-slate-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
            {/* Messy desk illustration */}
            <div className="mt-8 rounded-xl bg-slate-900/50 p-6 border border-slate-800">
              <div className="flex flex-wrap gap-2">
                {["Factura #234", "Nota cliente", "Presup...", "???", "Llamar Juan"].map((note, i) => (
                  <div
                    key={i}
                    className="rounded bg-yellow-200/80 px-3 py-2 text-xs text-slate-800 transform"
                    style={{ rotate: `${(i - 2) * 5}deg` }}
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-primary/20 bg-primary/5 p-8"
          >
            <div className="absolute -top-4 left-6 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
              CON DONMECA
            </div>
            <div className="mt-4 space-y-5">
              {afterItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
            {/* Clean app illustration */}
            <div className="mt-8 rounded-xl bg-slate-900/50 p-4 border border-slate-800">
              <div className="flex items-center gap-3">
                <Smartphone className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-medium text-white">Todo en tu celular</div>
                  <div className="text-xs text-slate-400">Accedé desde cualquier lugar</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
