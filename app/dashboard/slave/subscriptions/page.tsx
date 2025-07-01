"use client"

import { useState } from "react"
import { ArrowUpRight, X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Mock data for connected masters only
const connectedMasters = [
  {
    id: 1,
    name: "Alex Morgan",
    specialty: "Forex Specialist",
    winRate: 94,
    followers: 1240,
    monthlyPerformance: 18.5,
    avatar: "/placeholder.svg?height=56&width=56",
    category: "Forex",
    isConnected: true,
    connectionDate: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Sarah Chen",
    specialty: "Crypto Trader",
    winRate: 91,
    followers: 980,
    monthlyPerformance: 22.3,
    avatar: "/placeholder.svg?height=56&width=56",
    category: "Crypto",
    isConnected: true,
    connectionDate: "Feb 22, 2024",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    specialty: "Commodities Expert",
    winRate: 89,
    followers: 1560,
    monthlyPerformance: 15.8,
    avatar: "/placeholder.svg?height=56&width=56",
    category: "Commodities",
    isConnected: true,
    connectionDate: "Mar 10, 2024",
  },
]

export default function SubscriptionsPage() {
  const [masters, setMasters] = useState(connectedMasters)
  const [showCancelDialog, setShowCancelDialog] = useState(false)
  const [selectedMaster, setSelectedMaster] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCancelClick = (master: any) => {
    setSelectedMaster(master)
    setShowCancelDialog(true)
  }

  const handleConfirmCancel = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Remove master from list
    setMasters((prev) => prev.filter((m) => m.id !== selectedMaster.id))

    setIsLoading(false)
    setShowCancelDialog(false)
    setSelectedMaster(null)
  }

  const totalMonthlyCost = masters.length * 25 // Assuming average cost

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="space-y-8 p-6">
        <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-xl p-6">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Connected Masters
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your connected master traders and monitor their performance
          </p>
        </div>

        {/* Connected Masters Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {masters.map((master) => (
            <Card
              key={master.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{master.name}</CardTitle>
                    <CardDescription className="text-sm">{master.specialty}</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    Connected
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14 ring-2 ring-primary/20">
                    <AvatarImage src={master.avatar || "/placeholder.svg"} alt={master.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white">
                      {master.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        {master.winRate}% Win Rate
                      </Badge>
                      <Badge variant="outline">{master.category}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{master.followers.toLocaleString()} followers</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Monthly Performance</span>
                      <span className="font-medium text-green-600">+{master.monthlyPerformance}%</span>
                    </div>
                    <Progress value={master.monthlyPerformance * 4} className="h-2 bg-muted" />
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">Connected Since</div>
                    <div className="font-semibold">{master.connectionDate}</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between pt-4 border-t">
                <Button variant="outline" size="sm" className="hover:bg-primary/5">
                  View Profile
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleCancelClick(master)}
                  className="hover:bg-red-600"
                >
                  <X className="mr-1 h-3 w-3" />
                  Cancel Connection
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Monthly Cost Summary */}
        <Card className="bg-gradient-to-r from-primary/5 to-purple-100/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl">Monthly Cost Summary</CardTitle>
            <CardDescription>Your total monthly cost for connected masters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                <div className="text-sm text-muted-foreground">Connected Masters</div>
                <div className="text-2xl font-bold text-primary">{masters.length}</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                <div className="text-sm text-muted-foreground">Total Monthly Cost</div>
                <div className="text-2xl font-bold text-green-600">${totalMonthlyCost}</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                <div className="text-sm text-muted-foreground">Average Win Rate</div>
                <div className="text-2xl font-bold text-blue-600">
                  {masters.length > 0 ? Math.round(masters.reduce((acc, m) => acc + m.winRate, 0) / masters.length) : 0}
                  %
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50">
                <div className="text-sm text-muted-foreground">Avg. Performance</div>
                <div className="text-2xl font-bold text-purple-600">
                  +
                  {masters.length > 0
                    ? (masters.reduce((acc, m) => acc + m.monthlyPerformance, 0) / masters.length).toFixed(1)
                    : 0}
                  %
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
              Find More Masters
            </Button>
          </CardFooter>
        </Card>

        {/* Cancel Confirmation Dialog */}
        <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-full">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <DialogTitle>Cancel Connection?</DialogTitle>
                  <DialogDescription className="mt-1">
                    Are you sure you want to cancel your connection with {selectedMaster?.name}?
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
              <p className="text-sm text-red-800">
                <strong>Warning:</strong> This will stop copying all trades from this master trader. You can reconnect
                later, but you'll miss any trades made during the disconnection period.
              </p>
            </div>

            <DialogFooter className="flex gap-2">
              <Button variant="outline" onClick={() => setShowCancelDialog(false)} disabled={isLoading}>
                Keep Connection
              </Button>
              <Button variant="destructive" onClick={handleConfirmCancel} disabled={isLoading}>
                {isLoading ? "Canceling..." : "Yes, Cancel Connection"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
