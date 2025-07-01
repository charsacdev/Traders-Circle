"use client"

import { useState, useMemo } from "react"
import { DollarSign, LineChart, TrendingDown, TrendingUp, Users, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample trades data
const allTrades = [
  {
    id: 1,
    symbol: "EUR/USD",
    type: "Buy",
    entryPrice: 1.0845,
    pl: 1245.3,
    date: "2024-01-15T10:45:00",
    copies: 1120,
  },
  {
    id: 2,
    symbol: "BTC/USD",
    type: "Buy",
    entryPrice: 42350,
    pl: 3500.0,
    date: "2024-01-15T09:32:00",
    copies: 1120,
  },
  {
    id: 3,
    symbol: "Gold",
    type: "Sell",
    entryPrice: 2345.5,
    pl: -785.0,
    date: "2024-01-14T15:15:00",
    copies: 980,
  },
  {
    id: 4,
    symbol: "USD/JPY",
    type: "Buy",
    entryPrice: 148.75,
    pl: 927.5,
    date: "2024-01-14T13:20:00",
    copies: 1050,
  },
  {
    id: 5,
    symbol: "ETH/USD",
    type: "Buy",
    entryPrice: 2450.4,
    pl: 2154.0,
    date: "2024-01-14T11:05:00",
    copies: 1230,
  },
  {
    id: 6,
    symbol: "AAPL",
    type: "Buy",
    entryPrice: 182.45,
    pl: 567.8,
    date: "2024-01-13T14:30:00",
    copies: 890,
  },
  {
    id: 7,
    symbol: "GBP/USD",
    type: "Sell",
    entryPrice: 1.265,
    pl: -234.5,
    date: "2024-01-13T11:45:00",
    copies: 750,
  },
  {
    id: 8,
    symbol: "TSLA",
    type: "Buy",
    entryPrice: 245.3,
    pl: 890.25,
    date: "2024-01-12T16:20:00",
    copies: 1100,
  },
  {
    id: 9,
    symbol: "AUD/USD",
    type: "Buy",
    entryPrice: 0.675,
    pl: 445.6,
    date: "2024-01-12T10:15:00",
    copies: 670,
  },
  {
    id: 10,
    symbol: "Silver",
    type: "Sell",
    entryPrice: 24.5,
    pl: -156.3,
    date: "2024-01-11T14:30:00",
    copies: 540,
  },
]

type SortField = "symbol" | "type" | "entryPrice" | "pl" | "date" | "copies"
type SortDirection = "asc" | "desc"

export default function MasterAccountDashboard() {
  const [sortField, setSortField] = useState<SortField>("date")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Sort trades
  const sortedTrades = useMemo(() => {
    const sorted = [...allTrades].sort((a, b) => {
      let aValue: any = a[sortField]
      let bValue: any = b[sortField]

      if (sortField === "date") {
        aValue = new Date(aValue).getTime()
        bValue = new Date(bValue).getTime()
      } else if (typeof aValue === "string") {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })
    return sorted
  }, [sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(sortedTrades.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTrades = sortedTrades.slice(startIndex, endIndex)

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "Today, " + date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    if (diffDays === 2) return "Yesterday, " + date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    if (diffDays <= 7) return `${diffDays - 1} days ago`
    return date.toLocaleDateString()
  }

  const generatePageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i)
        pages.push("...")
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push("...")
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push("...")
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
        pages.push("...")
        pages.push(totalPages)
      }
    }
    return pages
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="space-y-8 p-6">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Master Dashboard</h1>
          <p className="text-blue-100 text-lg">
            Welcome back, Alex! Here's an overview of your master account performance.
          </p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">Total Followers</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900">1,240</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>+15.2% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Monthly Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-900">$26,350</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>+18.5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">Win Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-900">94.2%</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>+1.8% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">Total Trades</CardTitle>
              <LineChart className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-900">3,450</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>+12.3% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="trades" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="trades">Recent Trades</TabsTrigger>
            <TabsTrigger value="followers">New Followers</TabsTrigger>
          </TabsList>

          <TabsContent value="trades" className="space-y-4">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800">Recent Trades</CardTitle>
                    <CardDescription className="text-gray-600">
                      Showing {startIndex + 1}-{Math.min(endIndex, sortedTrades.length)} of {sortedTrades.length} trades
                    </CardDescription>
                  </div>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number(value))
                      setCurrentPage(1)
                    }}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 per page</SelectItem>
                      <SelectItem value="10">10 per page</SelectItem>
                      <SelectItem value="20">20 per page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <div className="min-w-full">
                    {/* Table Header */}
                    <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 bg-gray-50 font-semibold text-gray-700">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("symbol")}
                        className="justify-start h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Symbol
                        {sortField === "symbol" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("type")}
                        className="justify-start h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Type
                        {sortField === "type" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("entryPrice")}
                        className="justify-start h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Entry Price
                        {sortField === "entryPrice" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("pl")}
                        className="justify-start h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        P/L
                        {sortField === "pl" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("copies")}
                        className="justify-start h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Copies
                        {sortField === "copies" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("date")}
                        className="justify-start h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Date
                        {sortField === "date" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                    </div>
                    {/* Table Body */}
                    <div className="space-y-2 p-4">
                      {currentTrades.map((trade) => (
                        <div
                          key={trade.id}
                          className="grid grid-cols-6 gap-4 items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                trade.pl >= 0 ? "bg-green-100" : "bg-red-100"
                              }`}
                            >
                              {trade.pl >= 0 ? (
                                <TrendingUp className="h-4 w-4 text-green-600" />
                              ) : (
                                <TrendingDown className="h-4 w-4 text-red-600" />
                              )}
                            </div>
                            <span className="font-medium text-gray-900">{trade.symbol}</span>
                          </div>
                          <Badge
                            className={
                              trade.type === "Buy"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {trade.type}
                          </Badge>
                          <span className="text-gray-700">{trade.entryPrice.toLocaleString()}</span>
                          <span className={`font-semibold ${trade.pl >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {trade.pl >= 0 ? "+" : ""}${trade.pl.toFixed(2)}
                          </span>
                          <Badge variant="outline">{trade.copies} copies</Badge>
                          <span className="text-gray-500 text-sm">{formatDate(trade.date)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4 p-4">
                  {currentTrades.map((trade) => (
                    <div
                      key={trade.id}
                      className={`p-4 rounded-xl border-l-4 ${
                        trade.pl >= 0 ? "border-l-green-500 bg-green-50" : "border-l-red-500 bg-red-50"
                      } hover:shadow-md transition-shadow`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              trade.pl >= 0 ? "bg-green-100" : "bg-red-100"
                            }`}
                          >
                            {trade.pl >= 0 ? (
                              <TrendingUp className="h-5 w-5 text-green-600" />
                            ) : (
                              <TrendingDown className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">{trade.symbol}</h3>
                            <Badge
                              className={
                                trade.type === "Buy"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-red-100 text-red-800 hover:bg-red-100"
                              }
                            >
                              {trade.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold text-xl ${trade.pl >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {trade.pl >= 0 ? "+" : ""}${trade.pl.toFixed(2)}
                          </p>
                          <Badge variant="outline" className="mt-1">
                            {trade.copies} copies
                          </Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">
                            Entry Price:{" "}
                            <span className="text-gray-900 font-medium">{trade.entryPrice.toLocaleString()}</span>
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">{formatDate(trade.date)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t border-gray-200 bg-gray-50">
                  <div className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {Math.min(endIndex, sortedTrades.length)} of {sortedTrades.length}{" "}
                    results
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="h-9"
                    >
                      Previous
                    </Button>

                    <div className="flex items-center gap-1">
                      {generatePageNumbers().map((page, index) => (
                        <div key={index}>
                          {page === "..." ? (
                            <span className="px-3 py-2 text-gray-400">...</span>
                          ) : (
                            <Button
                              variant={currentPage === page ? "default" : "outline"}
                              size="sm"
                              onClick={() => setCurrentPage(page as number)}
                              className="h-9 w-9"
                            >
                              {page}
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="h-9"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="followers" className="space-y-4">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
                <CardTitle className="text-2xl font-bold text-gray-800">New Followers</CardTitle>
                <CardDescription className="text-gray-600">
                  Traders who recently subscribed to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {[
                    { name: "John Doe", joined: "today", fee: "$30/month", initials: "JD" },
                    { name: "Emma Miller", joined: "yesterday", fee: "$30/month", initials: "EM" },
                    { name: "Robert Johnson", joined: "2 days ago", fee: "$30/month", initials: "RJ" },
                    { name: "Lisa Wong", joined: "3 days ago", fee: "$30/month", initials: "LW" },
                    { name: "David Thompson", joined: "4 days ago", fee: "$30/month", initials: "DT" },
                  ].map((follower, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/placeholder.svg?height=48&width=48" />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                            {follower.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-lg font-semibold leading-none text-gray-900">{follower.name}</p>
                          <p className="text-sm text-gray-600 mt-1">Joined {follower.joined}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
                          {follower.fee}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full h-12 text-lg">
                  View All Followers
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Enhanced Performance Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
              <CardTitle className="text-2xl font-bold text-gray-800">Performance Overview</CardTitle>
              <CardDescription className="text-gray-600">
                Your trading performance over the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-md relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LineChart className="h-32 w-32 text-blue-400/60" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
              <CardTitle className="text-2xl font-bold text-gray-800">Earnings Breakdown</CardTitle>
              <CardDescription className="text-gray-600">Your earnings from subscriptions</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Total Subscription Revenue</span>
                    <span className="font-semibold text-gray-900">$37,200</span>
                  </div>
                  <Progress value={100} className="h-3 bg-gray-200" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Platform Fee (30%)</span>
                    <span className="font-semibold text-red-600">-$11,160</span>
                  </div>
                  <Progress value={30} className="h-3 bg-gray-200" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Your Earnings</span>
                    <span className="font-semibold text-green-600">$26,040</span>
                  </div>
                  <Progress value={70} className="h-3 bg-gray-200" />
                </div>
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">Next Payout</div>
                      <div className="text-sm text-gray-600">March 31, 2023</div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                      Request Withdrawal
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
