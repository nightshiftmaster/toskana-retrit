"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  fonts: string
}

export default function LoadingScreen({ fonts }: LoadingScreenProps) {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    return () => clearInterval(dotTimer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-stone-100 flex items-center justify-center z-50 ${fonts}`}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-serif text-stone-700 mb-4"
        >
          Загрузка{dots}
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-1 bg-stone-400 rounded-full mx-auto"
        />
      </div>
    </motion.div>
  )
}
