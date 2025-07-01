"use client"

import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MasterAccountCard from "@/components/master-account-card"
import TraderProfileModal from "@/components/trader-profile-modal"
import { useState, useMemo } from "react"

const allTraders = [
  {
    name: "Alex Morgan",
    specialty: "Forex",
    winRate: 94,
    followers: 1240,
    trades: 3450,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Chen",
    specialty: "Crypto",
    winRate: 91,
    followers: 980,
    trades: 2780,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Rodriguez",
    specialty: "Commodities",
    winRate: 89,
    followers: 1560,
    trades: 4120,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "David Kim",
    specialty: "Forex",
    winRate: 88,
    followers: 720,
    trades: 1890,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emma Wilson",
    specialty: "Stocks",
    winRate: 87,
    followers: 950,
    trades: 2340,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "James Taylor",
    specialty: "Crypto",
    winRate: 86,
    followers: 830,
    trades: 1750,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Olivia Martinez",
    specialty: "Forex",
    winRate: 85,
    followers: 680,
    trades: 1520,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Robert Johnson",
    specialty: "Commodities",
    winRate: 84,
    followers: 590,
    trades: 1320,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sophia Lee",
    specialty: "Stocks",
    winRate: 83,
    followers: 520,
    trades: 1180,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Daniel Brown",
    specialty: "Forex",
    winRate: 82,
    followers: 450,
    trades: 980,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Lisa Wang",
    specialty: "Crypto",
    winRate: 81,
    followers: 380,
    trades: 850,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Carlos Silva",
    specialty: "Commodities",
    winRate: 80,
    followers: 320,
    trades: 720,
    avatarUrl: "/placeholder.svg?height=100&width=100",
  },
]

export default function MastersPage() {
  const [selectedTrader, setSelectedTrader] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("winRate")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const [activeTab, setActiveTab] = useState("all")

  // Filter traders by specialty
  const filteredByTab = useMemo(() => {
    if (activeTab === "all") return allTraders
    return allTraders.filter((trader) => trader.specialty.toLowerCase() === activeTab)
  }, [activeTab])

  // Filter by search term
  const searchFiltered = useMemo(() => {
    if (!searchTerm) return filteredByTab
    return filteredByTab.filter(
      (trader) =>
        trader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trader.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [filteredByTab, searchTerm])

  // Sort traders
  const sortedTraders = useMemo(() => {
    return [...searchFiltered].sort((a, b) => {
      switch (sortBy) {
        case "winRate":
          return b.winRate - a.winRate
        case "followers":
          return b.followers - a.followers
        case "trades":
          return b.trades - a.trades
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })
  }, [searchFiltered, sortBy])

  // Pagination
  const totalPages = Math.ceil(sortedTraders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTraders = sortedTraders.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const renderPaginationNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages)
      }
    }

    return pages
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Master Accounts</h1>
        <p className="text-muted-foreground">Browse and subscribe to top-performing traders</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search master accounts..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="winRate">Win Rate</SelectItem>
              <SelectItem value="followers">Followers</SelectItem>
              <SelectItem value="trades">Number of Trades</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
          <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6 per page</SelectItem>
              <SelectItem value="9">9 per page</SelectItem>
              <SelectItem value="12">12 per page</SelectItem>
              <SelectItem value="18">18 per page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="commodities">Commodities</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-6">
          {paginatedTraders.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedTraders.map((trader, index) => (
                  <MasterAccountCard
                    key={`${trader.name}-${index}`}
                    name={trader.name}
                    specialty={trader.specialty}
                    winRate={trader.winRate}
                    followers={trader.followers}
                    trades={trader.trades}
                    avatarUrl={trader.avatarUrl}
                    onViewProfile={() => setSelectedTrader(trader)}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedTraders.length)} of{" "}
                  {sortedTraders.length} traders
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-1">
                    {renderPaginationNumbers().map((page, index) => (
                      <Button
                        key={index}
                        variant={page === currentPage ? "default" : "outline"}
                        size="sm"
                        onClick={() => typeof page === "number" && handlePageChange(page)}
                        disabled={page === "..."}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No traders found matching your criteria.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {selectedTrader && <TraderProfileModal trader={selectedTrader} onClose={() => setSelectedTrader(null)} />}
    </div>
  )
}
