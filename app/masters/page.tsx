"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  TrendingUp,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  TrendingDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import MasterAccountCard from "@/components/master-account-card"
import TraderProfileModal from "@/components/trader-profile-modal"

// Mock data for traders
const allTraders = [
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    specialty: "Forex",
    winRate: 94,
    followers: 1240,
    trades: 3450,
    monthlyFee: 30,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Lagos, Nigeria",
    experience: "Expert",
    joinDate: "2022-01-15",
    rating: 4.9,
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    specialty: "Crypto",
    winRate: 91,
    followers: 980,
    trades: 2780,
    monthlyFee: 25,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Abuja, Nigeria",
    experience: "Expert",
    joinDate: "2022-03-20",
    rating: 4.8,
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    specialty: "Commodities",
    winRate: 89,
    followers: 1560,
    trades: 4120,
    monthlyFee: 35,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Port Harcourt, Nigeria",
    experience: "Expert",
    joinDate: "2021-11-10",
    rating: 4.7,
  },
  {
    id: "david-kim",
    name: "David Kim",
    specialty: "Forex",
    winRate: 88,
    followers: 720,
    trades: 1890,
    monthlyFee: 20,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Kano, Nigeria",
    experience: "Advanced",
    joinDate: "2022-06-05",
    rating: 4.6,
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    specialty: "Stocks",
    winRate: 87,
    followers: 950,
    trades: 2340,
    monthlyFee: 30,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Ibadan, Nigeria",
    experience: "Expert",
    joinDate: "2022-02-28",
    rating: 4.5,
  },
  {
    id: "james-taylor",
    name: "James Taylor",
    specialty: "Crypto",
    winRate: 86,
    followers: 830,
    trades: 1750,
    monthlyFee: 25,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Enugu, Nigeria",
    experience: "Advanced",
    joinDate: "2022-04-12",
    rating: 4.4,
  },
  {
    id: "olivia-martinez",
    name: "Olivia Martinez",
    specialty: "Forex",
    winRate: 85,
    followers: 680,
    trades: 1520,
    monthlyFee: 20,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Kaduna, Nigeria",
    experience: "Advanced",
    joinDate: "2022-07-18",
    rating: 4.3,
  },
  {
    id: "robert-johnson",
    name: "Robert Johnson",
    specialty: "Commodities",
    winRate: 84,
    followers: 590,
    trades: 1320,
    monthlyFee: 15,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Jos, Nigeria",
    experience: "Intermediate",
    joinDate: "2022-08-25",
    rating: 4.2,
  },
  {
    id: "sophia-lee",
    name: "Sophia Lee",
    specialty: "Stocks",
    winRate: 83,
    followers: 520,
    trades: 1180,
    monthlyFee: 15,
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: "Calabar, Nigeria",
    experience: "Intermediate",
    joinDate: "2022-09-30",
    rating: 4.1,
  },
  // Add more traders for pagination demo
  ...Array.from({ length: 27 }, (_, i) => ({
    id: `trader-${i + 10}`,
    name: `Trader ${i + 10}`,
    specialty: ["Forex", "Crypto", "Stocks", "Commodities"][i % 4],
    winRate: Math.floor(Math.random() * 20) + 70,
    followers: Math.floor(Math.random() * 1000) + 100,
    trades: Math.floor(Math.random() * 2000) + 500,
    monthlyFee: [15, 20, 25, 30, 35][Math.floor(Math.random() * 5)],
    avatarUrl: "/placeholder.svg?height=100&width=100",
    location: ["Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan"][Math.floor(Math.random() * 5)] + ", Nigeria",
    experience: ["Intermediate", "Advanced", "Expert"][Math.floor(Math.random() * 3)],
    joinDate: `2022-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
    rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
  })),
]

export default function TopTradersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [sortBy, setSortBy] = useState("winRate")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const [showFilters, setShowFilters] = useState(false)

  const [selectedTrader, setSelectedTrader] = useState<any>(null)
  const [showTraderModal, setShowTraderModal] = useState(false)

  // Filter states
  const [winRateRange, setWinRateRange] = useState([70, 100])
  const [feeRange, setFeeRange] = useState([10, 40])
  const [minFollowers, setMinFollowers] = useState(0)
  const [experienceLevel, setExperienceLevel] = useState("all")

  // Filter and sort traders
  const filteredAndSortedTraders = useMemo(() => {
    const filtered = allTraders.filter((trader) => {
      const matchesSearch =
        trader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trader.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trader.location.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesSpecialty =
        selectedSpecialty === "all" || trader.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
      const matchesWinRate = trader.winRate >= winRateRange[0] && trader.winRate <= winRateRange[1]
      const matchesFee = trader.monthlyFee >= feeRange[0] && trader.monthlyFee <= feeRange[1]
      const matchesFollowers = trader.followers >= minFollowers
      const matchesExperience =
        experienceLevel === "all" || trader.experience.toLowerCase() === experienceLevel.toLowerCase()

      return matchesSearch && matchesSpecialty && matchesWinRate && matchesFee && matchesFollowers && matchesExperience
    })

    // Sort traders
    filtered.sort((a, b) => {
      let aValue, bValue

      switch (sortBy) {
        case "winRate":
          aValue = a.winRate
          bValue = b.winRate
          break
        case "followers":
          aValue = a.followers
          bValue = b.followers
          break
        case "trades":
          aValue = a.trades
          bValue = b.trades
          break
        case "monthlyFee":
          aValue = a.monthlyFee
          bValue = b.monthlyFee
          break
        case "rating":
          aValue = a.rating
          bValue = b.rating
          break
        case "joinDate":
          aValue = new Date(a.joinDate).getTime()
          bValue = new Date(b.joinDate).getTime()
          break
        default:
          aValue = a.winRate
          bValue = b.winRate
      }

      if (sortOrder === "asc") {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    })

    return filtered
  }, [searchQuery, selectedSpecialty, sortBy, sortOrder, winRateRange, feeRange, minFollowers, experienceLevel])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedTraders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTraders = filteredAndSortedTraders.slice(startIndex, endIndex)

  // Reset page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1)
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedSpecialty("all")
    setWinRateRange([70, 100])
    setFeeRange([10, 40])
    setMinFollowers(0)
    setExperienceLevel("all")
    setCurrentPage(1)
  }

  // Get active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0
    if (searchQuery) count++
    if (selectedSpecialty !== "all") count++
    if (winRateRange[0] !== 70 || winRateRange[1] !== 100) count++
    if (feeRange[0] !== 10 || feeRange[1] !== 40) count++
    if (minFollowers > 0) count++
    if (experienceLevel !== "all") count++
    return count
  }, [searchQuery, selectedSpecialty, winRateRange, feeRange, minFollowers, experienceLevel])

  // Pagination component
  const renderPagination = () => {
    const pages = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    pages.push(
      <Button
        key="prev"
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Previous
      </Button>,
    )

    // First page
    if (startPage > 1) {
      pages.push(
        <Button key={1} variant={currentPage === 1 ? "default" : "outline"} size="sm" onClick={() => setCurrentPage(1)}>
          1
        </Button>,
      )
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-2">
            ...
          </span>,
        )
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button key={i} variant={currentPage === i ? "default" : "outline"} size="sm" onClick={() => setCurrentPage(i)}>
          {i}
        </Button>,
      )
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-2">
            ...
          </span>,
        )
      }
      pages.push(
        <Button
          key={totalPages}
          variant={currentPage === totalPages ? "default" : "outline"}
          size="sm"
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </Button>,
      )
    }

    // Next button
    pages.push(
      <Button
        key="next"
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>,
    )

    return pages
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Traders Circle</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link href="/masters" className="text-sm font-medium text-primary transition-colors hover:text-primary">
                Top Traders
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-muted-foreground">
                  {filteredAndSortedTraders.length} Verified Nigerian Traders
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Nigeria's Top Performing Traders
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with expert traders across Lagos, Abuja, and beyond. All traders are AI-vetted and verified for
                your safety.
              </p>
              <div className="flex items-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">94%</div>
                  <div className="text-sm text-muted-foreground">Avg Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">₦15-35k</div>
                  <div className="text-sm text-muted-foreground">Monthly Fee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b bg-background/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-4">
              {/* Search Bar */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, specialty, or location..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      handleFilterChange()
                    }}
                  />
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  {/* Quick Specialty Filter */}
                  <Select
                    value={selectedSpecialty}
                    onValueChange={(value) => {
                      setSelectedSpecialty(value)
                      handleFilterChange()
                    }}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Markets</SelectItem>
                      <SelectItem value="forex">Forex</SelectItem>
                      <SelectItem value="crypto">Crypto</SelectItem>
                      <SelectItem value="stocks">Stocks</SelectItem>
                      <SelectItem value="commodities">Commodities</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="winRate">Win Rate</SelectItem>
                      <SelectItem value="followers">Followers</SelectItem>
                      <SelectItem value="trades">Total Trades</SelectItem>
                      <SelectItem value="monthlyFee">Monthly Fee</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="joinDate">Join Date</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Sort Order */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    className="px-3"
                  >
                    {sortOrder === "desc" ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                  </Button>

                  {/* Advanced Filters */}
                  <Sheet open={showFilters} onOpenChange={setShowFilters}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                        {activeFilterCount > 0 && (
                          <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
                            {activeFilterCount}
                          </Badge>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Advanced Filters</SheetTitle>
                        <SheetDescription>Refine your search to find the perfect trader</SheetDescription>
                      </SheetHeader>

                      <div className="space-y-6 mt-6">
                        {/* Win Rate Range */}
                        <div className="space-y-2">
                          <Label>
                            Win Rate Range: {winRateRange[0]}% - {winRateRange[1]}%
                          </Label>
                          <Slider
                            value={winRateRange}
                            onValueChange={(value) => {
                              setWinRateRange(value)
                              handleFilterChange()
                            }}
                            max={100}
                            min={50}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        {/* Monthly Fee Range */}
                        <div className="space-y-2">
                          <Label>
                            Monthly Fee Range: ₦{feeRange[0]}k - ₦{feeRange[1]}k
                          </Label>
                          <Slider
                            value={feeRange}
                            onValueChange={(value) => {
                              setFeeRange(value)
                              handleFilterChange()
                            }}
                            max={50}
                            min={5}
                            step={5}
                            className="w-full"
                          />
                        </div>

                        {/* Minimum Followers */}
                        <div className="space-y-2">
                          <Label>Minimum Followers: {minFollowers}</Label>
                          <Slider
                            value={[minFollowers]}
                            onValueChange={(value) => {
                              setMinFollowers(value[0])
                              handleFilterChange()
                            }}
                            max={2000}
                            min={0}
                            step={100}
                            className="w-full"
                          />
                        </div>

                        {/* Experience Level */}
                        <div className="space-y-2">
                          <Label>Experience Level</Label>
                          <Select
                            value={experienceLevel}
                            onValueChange={(value) => {
                              setExperienceLevel(value)
                              handleFilterChange()
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Levels</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="expert">Expert</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Separator />

                        {/* Clear Filters */}
                        <Button
                          variant="outline"
                          onClick={clearAllFilters}
                          className="w-full"
                          disabled={activeFilterCount === 0}
                        >
                          Clear All Filters
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {searchQuery && (
                    <Badge variant="secondary" className="gap-1">
                      Search: {searchQuery}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => {
                          setSearchQuery("")
                          handleFilterChange()
                        }}
                      />
                    </Badge>
                  )}
                  {selectedSpecialty !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      {selectedSpecialty}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => {
                          setSelectedSpecialty("all")
                          handleFilterChange()
                        }}
                      />
                    </Badge>
                  )}
                  {experienceLevel !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      {experienceLevel}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => {
                          setExperienceLevel("all")
                          handleFilterChange()
                        }}
                      />
                    </Badge>
                  )}
                  <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-6 px-2 text-xs">
                    Clear all
                  </Button>
                </div>
              )}

              {/* Results Summary */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="text-sm text-muted-foreground">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedTraders.length)} of{" "}
                  {filteredAndSortedTraders.length} traders
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Show:</span>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number.parseInt(value))
                      setCurrentPage(1)
                    }}
                  >
                    <SelectTrigger className="w-20 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="18">18</SelectItem>
                      <SelectItem value="36">36</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traders Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            {currentTraders.length > 0 ? (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {currentTraders.map((trader) => (
                    <div
                      key={trader.id}
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedTrader(trader)
                        setShowTraderModal(true)
                      }}
                    >
                      <MasterAccountCard
                        name={trader.name}
                        specialty={trader.specialty}
                        winRate={trader.winRate}
                        followers={trader.followers}
                        trades={trader.trades}
                        monthlyFee={trader.monthlyFee}
                        avatarUrl={trader.avatarUrl}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col items-center gap-4 mt-12">
                    <div className="flex flex-wrap items-center justify-center gap-2">{renderPagination()}</div>
                    <div className="text-sm text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <TrendingDown className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No traders found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-2xl bg-primary p-8 md:p-12 shadow-lg">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                    Ready to Start Copy Trading?
                  </h2>
                  <p className="mt-4 text-lg text-primary-foreground/90">
                    Join thousands of Nigerians already copy trading with verified experts. Start with as little as
                    ₦10,000.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-primary-foreground/80" />
                      <span className="text-sm text-primary-foreground/80">5,000+ Active Users</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-primary-foreground/80">4.8/5 Rating</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trader Profile Modal */}
        {showTraderModal && selectedTrader && (
          <TraderProfileModal
            trader={selectedTrader}
            onClose={() => {
              setShowTraderModal(false)
              setSelectedTrader(null)
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Traders Circle</span>
              </div>
              <p className="text-muted-foreground">
                Nigeria's premier platform for copy trading with verified expert traders.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/masters" className="text-muted-foreground hover:text-primary">
                    Top Traders
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/risk" className="text-muted-foreground hover:text-primary">
                    Risk Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-muted-foreground hover:text-primary">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">support@traderscircle.ng</li>
                <li className="text-muted-foreground">+234 (0) 123-456-7890</li>
                <li className="text-muted-foreground">Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Traders Circle Nigeria. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
