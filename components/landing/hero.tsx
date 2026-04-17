"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Wrench } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium"
            >
              <Wrench className="mr-2 h-4 w-4" />
              Sistema para talleres mecánicos
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl text-balance">
              Orden para tu taller,{" "}
              <span className="text-primary">tiempo para vos.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              DonMeca es el software diseñado para mecánicos que quieren
              arreglar autos, no pelear con la computadora. Controlá tus
              trabajos, clientes, stock y caja sin complicaciones.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://sistemadonmeca.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Empezar Prueba Gratuita (7 días)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <div className="mx-auto max-w-xs rounded-md bg-slate-100 px-4 py-1 text-xs text-slate-500">
                    sistemadonmeca.vercel.app
                  </div>
                </div>
              </div>

              {/* Dashboard Preview Content */}
              <div className="rounded-b-xl bg-slate-50 p-4">
                <div className="grid gap-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        label: "Trabajos Hoy",
                        value: "12",
                        color: "bg-primary",
                      },
                      {
                        label: "Ingresos",
                        value: "$485k",
                        color: "bg-emerald-500",
                      },
                      {
                        label: "Clientes",
                        value: "234",
                        color: "bg-slate-700",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg bg-white p-3 shadow-sm"
                      >
                        <div className="text-xs text-slate-500">
                          {stat.label}
                        </div>
                        <div className="mt-1 text-lg font-bold text-slate-950">
                          {stat.value}
                        </div>
                        <div
                          className={`mt-2 h-1 w-full rounded-full ${stat.color} opacity-20`}
                        >
                          <div
                            className={`h-full w-3/4 rounded-full ${stat.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Jobs */}
                  <div className="rounded-lg bg-white p-3 shadow-sm">
                    <div className="text-xs font-medium text-slate-500 mb-2">
                      Trabajos Activos
                    </div>
                    {[
                      {
                        car: "Ford Focus 2019",
                        job: "Cambio de aceite",
                        status: "En proceso",
                      },
                      {
                        car: "VW Gol 2018",
                        job: "Frenos completos",
                        status: "Esperando repuesto",
                      },
                    ].map((job, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-t border-slate-100 first:border-0"
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-950">
                            {job.car}
                          </div>
                          <div className="text-xs text-slate-500">
                            {job.job}
                          </div>
                        </div>
                        <Badge
                          variant={i === 0 ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {job.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -left-4 top-1/4 rounded-lg bg-white p-3 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-slate-950">
                  Presupuesto enviado
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
