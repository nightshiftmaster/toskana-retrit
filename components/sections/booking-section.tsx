"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, MapPin, Calendar, CheckCircle, Phone, Mail, Instagram } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations"

const BookingSection = forwardRef<HTMLElement>((props, ref) => {
  const { ref: animationRef, controls } = useScrollAnimation()

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: "+7 (XXX) XXX-XX-XX" },
    { icon: <Mail className="w-5 h-5" />, text: "INFO@TUSCANY-RETREAT.COM" },
    { icon: <Instagram className="w-5 h-5" />, text: "@TUSCANY_RETREAT" },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-stone-600 text-white">
      <motion.div
        ref={animationRef}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-light mb-16 tracking-wider">
          ЗАБРОНИРУЙТЕ СВОЁ МЕСТО
        </motion.h2>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={staggerItem} className="space-y-4">
            <motion.div whileHover={{ x: 10 }} className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6" />
              <span className="text-lg tracking-wider font-light">ДАТЫ: 10–17 АВГУСТА</span>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6" />
              <span className="text-lg tracking-wider font-light">МЕСТО ВЫЛЕТА: МИЛАН</span>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-4">
            <motion.div whileHover={{ x: 10 }} className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6" />
              <span className="text-lg tracking-wider font-light">СТОИМОСТЬ: ОТ 2600$</span>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg tracking-wider font-light">ЧТО ВКЛЮЧЕНО: ВСЁ КРОМЕ АВИАБИЛЕТОВ</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} className="space-y-6">
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <motion.div whileFocus={{ scale: 1.05 }}>
              <Input
                placeholder="ВАШЕ ИМЯ"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 uppercase tracking-wider font-light"
              />
            </motion.div>
            <motion.div whileFocus={{ scale: 1.05 }}>
              <Input
                placeholder="ВАШ EMAIL"
                type="email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 uppercase tracking-wider font-light"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={staggerItem} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-stone-600 hover:bg-stone-50 px-12 py-4 text-lg font-medium tracking-wider uppercase"
            >
              ЗАБРОНИРОВАТЬ МЕСТО
            </Button>
          </motion.div>

          <motion.div variants={staggerContainer} className="flex justify-center gap-6 mt-8 font-light">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center gap-2"
              >
                {contact.icon}
                <span>{contact.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
})

BookingSection.displayName = "BookingSection"

export default BookingSection
