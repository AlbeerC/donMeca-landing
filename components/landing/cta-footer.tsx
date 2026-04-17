"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, MapPin } from "lucide-react"

export function CTAFooter() {
  return (
    <footer className="bg-slate-950">
      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              ¿Dudas? Te asesoramos por WhatsApp.
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
              Estamos para ayudarte. Escribinos y te respondemos en minutos.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-7 text-lg shadow-xl shadow-[#25D366]/25 hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all"
              >
                <a
                  href="https://wa.me/542284231048"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Escribime al +54 2284 231048
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <img 
                  src="/donmeca-logo.png" 
                  alt="DonMeca" 
                  className="h-12 w-12 object-contain"
                />
                <span className="text-xl font-bold text-white">DonMeca</span>
              </div>
              <p className="mt-4 text-slate-400 max-w-sm">
                Orden para tu taller, tiempo para vos. Sistema de gestión diseñado especialmente para talleres mecánicos argentinos.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <a href="https://wa.me/542284231048" className="hover:text-white transition-colors">
                    +54 2284 231048
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hola@donmeca.com.ar" className="hover:text-white transition-colors">
                    caminosalbertodev@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Argentina</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} DonMeca. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
