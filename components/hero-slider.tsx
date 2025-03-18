"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Copy the Trades of Expert Traders",
    description:
      "Join Traders Circle and automatically mirror the strategies of top-performing traders with proven success rates.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Verified 90%+ Win Rates",
    description:
      "Our master traders are rigorously vetted to ensure only the best strategies are available to our members.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Start Trading in Minutes",
    description: "Connect your MT5 account and start copying trades from expert traders immediately.",
    image: "/placeholder.svg?height=600&width=1200",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl bg-muted shadow-xl w-full max-w-xl aspect-video">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
              <div className="p-4 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg w-4/5">
                <h3 className="font-semibold text-lg mb-2">{slide.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{slide.description}</p>
                <div className="h-32 w-full bg-muted/50 rounded-md relative overflow-hidden">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

