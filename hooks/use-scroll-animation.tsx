"use client"

import { useEffect, useRef } from "react"
import { useAnimation, useInView } from "framer-motion"

export const useScrollAnimation = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return { ref, controls }
}
