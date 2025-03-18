import * as React from "react"
import { PenLineIcon as Line } from "lucide-react"

export const LineChart = React.forwardRef<React.ElementRef<typeof Line>, React.ComponentPropsWithoutRef<typeof Line>>(
  ({ className, ...props }, ref) => <Line ref={ref} className={className} {...props} />,
)
LineChart.displayName = "LineChart"

