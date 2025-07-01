"use client"

import { TrendingUp, TrendingDown, DollarSign, Target, BarChart3, Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TraderProfileModalProps {
  trader: {
    id: string
    name: string
    specialty: string
    winRate: number
    followers: number
    trades: number
    monthlyFee: number
    avatarUrl: string
    location: string
    experience: string
    joinDate: string
    rating: number
  }
  onClose: () => void
}

export default function TraderProfileModal({ trader, onClose }: TraderProfileModalProps) {
  const recentTrades = [
    { pair: "EUR/USD", type: "BUY", profit: "+$245.50", date: "2024-01-15", status: "win" },
    { pair: "GBP/JPY", type: "SELL", profit: "+$189.20", date: "2024-01-15", status: "win" },
    { pair: "USD/CAD", type: "BUY", profit: "-$67.80", date: "2024-01-14", status: "loss" },
    { pair: "AUD/USD", type: "SELL", profit: "+$312.40", date: "2024-01-14", status: "win" },
    { pair: "EUR/GBP", type: "BUY", profit: "+$156.90", date: "2024-01-13", status: "win" },
  ]

  const tradingPairs = ["EUR/USD", "GBP/JPY", "USD/CAD", "AUD/USD", "EUR/GBP", "USD/JPY"]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={trader.avatarUrl || "/placeholder.svg"} alt={trader.name} />
              <AvatarFallback>{trader.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{trader.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline">{trader.specialty}</Badge>
                <Badge variant="secondary">{trader.experience}</Badge>
                <span className="text-sm text-muted-foreground">{trader.location}</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-muted-foreground">{trader.followers} followers</span>
                <span className="text-sm text-muted-foreground">₦{trader.monthlyFee}k/month</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{trader.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(trader.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trades">Recent Trades</TabsTrigger>
            <TabsTrigger value="pairs">Trading Pairs</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{trader.winRate}%</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{trader.trades.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">All time</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Profit</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">+$12,450</div>
                  <p className="text-xs text-muted-foreground">January 2024</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Max Drawdown</div>
                    <div className="text-lg font-semibold text-red-600">-5.2%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Profit Factor</div>
                    <div className="text-lg font-semibold">2.8</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Risk Score</div>
                    <div className="text-lg font-semibold text-yellow-600">Medium</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                    <div className="text-lg font-semibold">5+ Years</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Trading History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-full ${trade.status === "win" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                        >
                          {trade.status === "win" ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{trade.pair}</div>
                          <div className="text-sm text-muted-foreground">{trade.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${trade.status === "win" ? "text-green-600" : "text-red-600"}`}>
                          {trade.profit}
                        </div>
                        <div className="text-sm text-muted-foreground">{trade.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pairs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Preferred Trading Pairs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {tradingPairs.map((pair, index) => (
                    <div key={index} className="p-3 border rounded-lg text-center">
                      <div className="font-medium">{pair}</div>
                      <div className="text-sm text-muted-foreground">{Math.floor(Math.random() * 50) + 50} trades</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>About {trader.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Professional {trader.specialty} trader with over 5 years of experience in financial markets.
                  Specializes in technical analysis and risk management strategies. Known for consistent performance and
                  disciplined trading approach.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Trading Strategy</h4>
                  <p className="text-sm text-muted-foreground">
                    Combines technical analysis with fundamental insights to identify high-probability trading
                    opportunities. Focuses on major currency pairs with strict risk management rules.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Achievements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Consistent profitable trading for 3+ years</li>
                    <li>• Top 5% performer in {trader.specialty} category</li>
                    <li>• Over {trader.followers} satisfied followers</li>
                    <li>• Featured trader of the month (Dec 2023)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-primary hover:bg-primary/90">Copy Trader - ₦{trader.monthlyFee}k/month</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
