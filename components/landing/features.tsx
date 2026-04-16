"use client"

import { motion } from "framer-motion"
import { 
  Wrench, 
  Car, 
  Users, 
  FileText, 
  Package, 
  Settings, 
  Truck, 
  Wallet, 
  UserCog,
  Building2
} from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Trabajos",
    description: "Órdenes activas y seguimiento en tiempo real",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Car,
    title: "Vehículos",
    description: "Historial completo de cada auto que entra",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Users,
    title: "Clientes",
    description: "Base de datos con toda la información",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: FileText,
    title: "Presupuestos",
    description: "Creá presupuestos profesionales en 2 clics",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Package,
    title: "Productos",
    description: "Stock inteligente con alertas automáticas",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Settings,
    title: "Servicios",
    description: "Catálogo de servicios con precios",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Truck,
    title: "Proveedores",
    description: "Gestión de compras y contactos",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Wallet,
    title: "Caja",
    description: "Control de ingresos y egresos diarios",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: UserCog,
    title: "Empleados",
    description: "Asignación de trabajos por mecánico",
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    icon: Building2,
    title: "Mi Equipo",
    description: "Configuración y datos del taller",
    color: "bg-teal-500/10 text-teal-600",
  },
]

export function Features() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl text-balance">
            Todo lo que necesitás, en un solo lugar
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            10 módulos diseñados específicamente para talleres mecánicos argentinos.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className={`inline-flex rounded-xl p-3 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
