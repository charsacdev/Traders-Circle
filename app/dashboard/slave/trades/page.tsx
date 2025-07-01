"use client"

import { useState, useMemo } from "react"
import { ChevronDown, ChevronUp, Download, Search, TrendingDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample trade data
const allTrades = [
  {
    id: 1,
    symbol: "EUR/USD",
    type: "Buy",
    entryPrice: 1.0845,
    exitPrice: 1.0892,
    size: "0.5 lot",
    master: "Alex Morgan",
    pl: 235.0,
    date: "2024-01-15T10:45:00",
    category: "forex",
  },
  {
    id: 2,
    symbol: "BTC/USD",
    type: "Buy",
    entryPrice: 42350.0,
    exitPrice: 43120.0,
    size: "0.02 BTC",
    master: "Sarah Chen",
    pl: 154.0,
    date: "2024-01-15T09:32:00",
    category: "crypto",
  },
  {
    id: 3,
    symbol: "Gold",
    type: "Sell",
    entryPrice: 2345.5,
    exitPrice: 2320.75,
    size: "0.1 lot",
    master: "Michael Rodriguez",
    pl: -78.5,
    date: "2024-01-14T15:15:00",
    category: "commodities",
  },
  {
    id: 4,
    symbol: "USD/JPY",
    type: "Buy",
    entryPrice: 148.75,
    exitPrice: 149.2,
    size: "0.3 lot",
    master: "Alex Morgan",
    pl: 92.75,
    date: "2024-01-14T13:20:00",
    category: "forex",
  },
  {
    id: 5,
    symbol: "ETH/USD",
    type: "Buy",
    entryPrice: 2450.4,
    exitPrice: 2520.8,
    size: "0.1 ETH",
    master: "Sarah Chen",
    pl: 70.4,
    date: "2024-01-14T11:05:00",
    category: "crypto",
  },
  {
    id: 6,
    symbol: "AAPL",
    type: "Buy",
    entryPrice: 182.45,
    exitPrice: 185.2,
    size: "5 shares",
    master: "Emma Wilson",
    pl: 13.75,
    date: "2024-01-13T14:30:00",
    category: "stocks",
  },
  {
    id: 7,
    symbol: "GBP/USD",
    type: "Sell",
    entryPrice: 1.265,
    exitPrice: 1.268,
    size: "0.2 lot",
    master: "Alex Morgan",
    pl: -60.0,
    date: "2024-01-13T11:45:00",
    category: "forex",
  },
  {
    id: 8,
    symbol: "TSLA",
    type: "Buy",
    entryPrice: 245.3,
    exitPrice: 252.8,
    size: "2 shares",
    master: "Emma Wilson",
    pl: 15.0,
    date: "2024-01-12T16:20:00",
    category: "stocks",
  },
  {
    id: 9,
    symbol: "AUD/USD",
    type: "Buy",
    entryPrice: 0.675,
    exitPrice: 0.682,
    size: "0.4 lot",
    master: "Alex Morgan",
    pl: 112.0,
    date: "2024-01-12T10:15:00",
    category: "forex",
  },
  {
    id: 10,
    symbol: "Silver",
    type: "Sell",
    entryPrice: 24.5,
    exitPrice: 24.2,
    size: "0.2 lot",
    master: "Michael Rodriguez",
    pl: -45.0,
    date: "2024-01-11T14:30:00",
    category: "commodities",
  },
  {
    id: 11,
    symbol: "GOOGL",
    type: "Buy",
    entryPrice: 142.3,
    exitPrice: 145.8,
    size: "3 shares",
    master: "Emma Wilson",
    pl: 10.5,
    date: "2024-01-11T12:45:00",
    category: "stocks",
  },
  {
    id: 12,
    symbol: "LTC/USD",
    type: "Buy",
    entryPrice: 72.4,
    exitPrice: 75.2,
    size: "0.5 LTC",
    master: "Sarah Chen",
    pl: 1.4,
    date: "2024-01-10T09:30:00",
    category: "crypto",
  },
  {
    id: 13,
    symbol: "CAD/JPY",
    type: "Sell",
    entryPrice: 110.25,
    exitPrice: 109.8,
    size: "0.3 lot",
    master: "Alex Morgan",
    pl: 67.5,
    date: "2024-01-10T16:15:00",
    category: "forex",
  },
  {
    id: 14,
    symbol: "MSFT",
    type: "Buy",
    entryPrice: 378.5,
    exitPrice: 385.2,
    size: "1 share",
    master: "Emma Wilson",
    pl: 6.7,
    date: "2024-01-09T11:20:00",
    category: "stocks",
  },
  {
    id: 15,
    symbol: "Oil",
    type: "Buy",
    entryPrice: 73.2,
    exitPrice: 75.8,
    size: "0.1 lot",
    master: "Michael Rodriguez",
    pl: 26.0,
    date: "2024-01-09T13:45:00",
    category: "commodities",
  },
]

type SortField = "symbol" | "type" | "entryPrice" | "exitPrice" | "size" | "master" | "pl" | "date"
type SortDirection = "asc" | "desc"

export default function MyTradesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [sortField, setSortField] = useState<SortField>("date")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Filter and sort trades
  const filteredAndSortedTrades = useMemo(() => {
    const filtered = allTrades.filter((trade) => {
      const matchesSearch =
        trade.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trade.master.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trade.type.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesFilter =
        filterType === "all" || (filterType === "profitable" && trade.pl > 0) || (filterType === "loss" && trade.pl < 0)

      return matchesSearch && matchesFilter
    })

    // Sort trades
    filtered.sort((a, b) => {
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

    return filtered
  }, [searchTerm, filterType, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedTrades.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTrades = filteredAndSortedTrades.slice(startIndex, endIndex)

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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-4xl font-bold tracking-tight mb-2">My Trades</h1>
          <p className="text-blue-100 text-lg">View and analyze all your trades copied from master accounts</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-white rounded-xl p-6 shadow-sm border">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by symbol, master, or type..."
              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[180px] h-12">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Trades</SelectItem>
                <SelectItem value="profitable">Profitable Only</SelectItem>
                <SelectItem value="loss">Loss Only</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => {
                setItemsPerPage(Number(value))
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full sm:w-[140px] h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 per page</SelectItem>
                <SelectItem value="20">20 per page</SelectItem>
                <SelectItem value="50">50 per page</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="h-12 flex items-center gap-2 border-gray-200 hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Trades Table */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
            <CardTitle className="text-2xl font-bold text-gray-800">Trade History</CardTitle>
            <CardDescription className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedTrades.length)} of{" "}
              {filteredAndSortedTrades.length} trades
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="font-semibold text-gray-700">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("symbol")}
                        className="h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Symbol
                        {sortField === "symbol" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("type")}
                        className="h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Type
                        {sortField === "type" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("entryPrice")}
                        className="h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Entry Price
                        {sortField === "entryPrice" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("exitPrice")}
                        className="h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Exit Price
                        {sortField === "exitPrice" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">Size</TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("master")}
                        className="h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Master
                        {sortField === "master" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                    </TableHead>
                    <TableHead className="text-right font-semibold text-gray-700">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("pl")}
                        className="h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        P/L
                        {sortField === "pl" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                    </TableHead>
                    <TableHead className="text-right font-semibold text-gray-700">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("date")}
                        className="h-auto p-0 font-semibold hover:bg-transparent"
                      >
                        Date
                        {sortField === "date" &&
                          (sortDirection === "asc" ? (
                            <ChevronUp className="ml-2 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-2 h-4 w-4" />
                          ))}
                      </Button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentTrades.map((trade) => (
                    <TableRow key={trade.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                      <TableCell className="font-medium text-gray-900">{trade.symbol}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            trade.type === "Buy"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {trade.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-700">{trade.entryPrice.toLocaleString()}</TableCell>
                      <TableCell className="text-gray-700">{trade.exitPrice.toLocaleString()}</TableCell>
                      <TableCell className="text-gray-700">{trade.size}</TableCell>
                      <TableCell className="text-gray-700">{trade.master}</TableCell>
                      <TableCell
                        className={`text-right font-semibold ${trade.pl >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {trade.pl >= 0 ? "+" : ""}${trade.pl.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right text-gray-500">{formatDate(trade.date)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4 p-4">
              {currentTrades.map((trade) => (
                <div
                  key={trade.id}
                  className={`p-4 rounded-xl border-l-4 ${trade.pl >= 0 ? "border-l-green-500 bg-green-50" : "border-l-red-500 bg-red-50"} hover:shadow-md transition-shadow`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{trade.symbol}</h3>
                      <p className="text-sm text-gray-600">via {trade.master}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={
                          trade.type === "Buy"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                        }
                      >
                        {trade.type}
                      </Badge>
                      <p className={`font-bold text-lg mt-1 ${trade.pl >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {trade.pl >= 0 ? "+" : ""}${trade.pl.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">
                        Entry: <span className="text-gray-900 font-medium">{trade.entryPrice.toLocaleString()}</span>
                      </p>
                      <p className="text-gray-500">
                        Exit: <span className="text-gray-900 font-medium">{trade.exitPrice.toLocaleString()}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">
                        Size: <span className="text-gray-900 font-medium">{trade.size}</span>
                      </p>
                      <p className="text-gray-500">{formatDate(trade.date)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-sm text-gray-600">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedTrades.length)} of{" "}
                {filteredAndSortedTrades.length} results
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

        {/* Performance Summary Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-green-800">Trading Performance</CardTitle>
              <CardDescription className="text-green-600">Overall statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-lg p-3">
                    <div className="text-xs text-green-700">Total Trades</div>
                    <div className="font-bold text-lg text-green-800">{filteredAndSortedTrades.length}</div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <div className="text-xs text-green-700">Win Rate</div>
                    <div className="font-bold text-lg text-green-800">
                      {(
                        (filteredAndSortedTrades.filter((t) => t.pl > 0).length / filteredAndSortedTrades.length) *
                        100
                      ).toFixed(1)}
                      %
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <div className="text-xs text-green-800">Total Profit</div>
                    <div className="font-bold text-lg text-green-800">
                      +$
                      {filteredAndSortedTrades
                        .filter((t) => t.pl > 0)
                        .reduce((sum, t) => sum + t.pl, 0)
                        .toFixed(2)}
                    </div>
                  </div>
                  <div className="bg-red-100 rounded-lg p-3">
                    <div className="text-xs text-red-800">Total Loss</div>
                    <div className="font-bold text-lg text-red-800">
                      $
                      {filteredAndSortedTrades
                        .filter((t) => t.pl < 0)
                        .reduce((sum, t) => sum + t.pl, 0)
                        .toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-800">Performance by Master</CardTitle>
              <CardDescription className="text-blue-600">Top performing masters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(
                  filteredAndSortedTrades.reduce(
                    (acc, trade) => {
                      acc[trade.master] = (acc[trade.master] || 0) + trade.pl
                      return acc
                    },
                    {} as Record<string, number>,
                  ),
                )
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 4)
                  .map(([master, pl]) => (
                    <div key={master} className="flex items-center justify-between bg-white/60 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${pl >= 0 ? "bg-green-500" : "bg-red-500"}`}></div>
                        <span className="text-sm font-medium text-blue-900">{master}</span>
                      </div>
                      <span className={`text-sm font-bold ${pl >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {pl >= 0 ? "+" : ""}${pl.toFixed(2)}
                      </span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800">Recent Activity</CardTitle>
              <CardDescription className="text-purple-600">Latest trades</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredAndSortedTrades.slice(0, 4).map((trade) => (
                  <div key={trade.id} className="flex items-center gap-4 bg-white/60 rounded-lg p-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${trade.pl >= 0 ? "bg-green-100" : "bg-red-100"}`}
                    >
                      {trade.pl >= 0 ? (
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none text-purple-900">
                        {trade.symbol} {trade.type}
                      </p>
                      <p className="text-xs text-purple-600">
                        Via {trade.master} • {trade.pl >= 0 ? "+" : ""}${trade.pl.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-xs text-purple-500">{formatDate(trade.date)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
