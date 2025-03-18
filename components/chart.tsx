"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

interface ChartProps {
  type: "line" | "bar" | "pie" | "doughnut" | "radar" | "polarArea"
  data: any
  options?: any
  height?: number
  width?: number
  className?: string
}

export default function ChartComponent({
  type,
  data,
  options = {},
  height = 300,
  width = 100,
  className = "",
}: ChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      // Create new chart
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type,
          data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            ...options,
          },
        })
      }
    }

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [type, data, options])

  return (
    <div className={`h-[${height}px] w-full ${className}`}>
      <canvas ref={chartRef} />
    </div>
  )
}

