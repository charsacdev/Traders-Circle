"use client"

import { useEffect, useRef, useState } from "react"

interface StatsCounterProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
}

export default function StatsCounter({ value, label, prefix = "", suffix = "", duration = 2000 }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = countRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrameId: number

    const startAnimation = (timestamp: number) => {
      startTime = timestamp
      animateCount(timestamp)
    }

    const animateCount = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * value)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount)
      } else {
        setCount(value)
      }
    }

    animationFrameId = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible, value, duration])

  return (
    <div className="text-center" ref={countRef}>
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground mt-2">{label}</div>
    </div>
  )
}
