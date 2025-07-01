"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import {
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Pause,
  Play,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

// Mock data for masters
const mockMasters = [
  {
    id: 1,
    name: "Adebayo Johnson",
    email: "adebayo@email.com",
    phone: "+234 801 234 5678",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    followers: 245,
    winRate: 78.5,
    totalTrades: 1250,
    monthlyProfit: 850000,
    assetsUnderManagement: 12500000,
    joinDate: "2024-01-15",
    specialty: "Forex",
    verified: true,
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    name: "Fatima Abdullahi",
    email: "fatima@email.com",
    phone: "+234 802 345 6789",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "pending",
    followers: 0,
    winRate: 0,
    totalTrades: 0,
    monthlyProfit: 0,
    assetsUnderManagement: 0,
    joinDate: "2024-01-20",
    specialty: "Crypto",
    verified: false,
    location: "Abuja, Nigeria",
  },
  {
    id: 3,
    name: "Chinedu Okafor",
    email: "chinedu@email.com",
    phone: "+234 803 456 7890",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    followers: 189,
    winRate: 82.3,
    totalTrades: 980,
    monthlyProfit: 720000,
    assetsUnderManagement: 9800000,
    joinDate: "2024-01-10",
    specialty: "Stocks",
    verified: true,
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    email: "aisha@email.com",
    phone: "+234 804 567 8901",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "suspended",
    followers: 67,
    winRate: 65.2,
    totalTrades: 450,
    monthlyProfit: 0,
    assetsUnderManagement: 3200000,
    joinDate: "2024-01-05",
    specialty: "Commodities",
    verified: true,
    location: "Kano, Nigeria",
  },
  {
    id: 5,
    name: "Emeka Nwankwo",
    email: "emeka@email.com",
    phone: "+234 805 678 9012",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    followers: 312,
    winRate: 75.8,
    totalTrades: 1580,
    monthlyProfit: 950000,
    assetsUnderManagement: 15600000,
    joinDate: "2023-12-20",
    specialty: "Forex",
    verified: true,
    location: "Ibadan, Nigeria",
  },
  {
    id: 6,
    name: "Kemi Adeyemi",
    email: "kemi@email.com",
    phone: "+234 806 789 0123",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "pending",
    followers: 0,
    winRate: 0,
    totalTrades: 0,
    monthlyProfit: 0,
    assetsUnderManagement: 0,
    joinDate: "2024-01-22",
    specialty: "Crypto",
    verified: false,
    location: "Enugu, Nigeria",
  },
]

export default function AdminMastersPage() {
  const [masters, setMasters] = useState(mockMasters)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [selectedMaster, setSelectedMaster] = useState<any>(null)
  const { toast } = useToast()

  // Calculate statistics
  const totalMasters = masters.length
  const activeMasters = masters.filter((m) => m.status === "active").length
  const totalAssets = masters.reduce((sum, m) => sum + m.assetsUnderManagement, 0)
  const totalPayouts = masters.reduce((sum, m) => sum + m.monthlyProfit, 0)
  const platformRevenue = totalPayouts * 0.2 // 20% commission
  const totalFollowers = masters.reduce((sum, m) => sum + m.followers, 0)

  // Filter and sort masters
  const filteredMasters = masters
    .filter((master) => {
      const matchesSearch =
        master.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        master.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || master.status === statusFilter
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      let aValue = a[sortBy as keyof typeof a]
      let bValue = b[sortBy as keyof typeof b]

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase()
        bValue = (bValue as string).toLowerCase()
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

  // Pagination
  const totalPages = Math.ceil(filteredMasters.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedMasters = filteredMasters.slice(startIndex, startIndex + itemsPerPage)

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  const handleMasterAction = (masterId: number, action: string, reason?: string) => {
    setMasters((prev) =>
      prev.map((master) => {
        if (master.id === masterId) {
          let newStatus = master.status
          switch (action) {
            case "approve":
              newStatus = "active"
              break
            case "decline":
              newStatus = "declined"
              break
            case "suspend":
              newStatus = "suspended"
              break
            case "unsuspend":
              newStatus = "active"
              break
          }
          return { ...master, status: newStatus }
        }
        return master
      }),
    )

    toast({
      title: "Action Completed",
      description: `Master account has been ${action}d successfully.`,
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "Active", className: "bg-green-100 text-green-800" },
      pending: { label: "Pending", className: "bg-yellow-100 text-yellow-800" },
      suspended: { label: "Suspended", className: "bg-red-100 text-red-800" },
      declined: { label: "Declined", className: "bg-gray-100 text-gray-800" },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Master Traders Management</h1>
            <p className="text-gray-600 mt-1">Manage and monitor all master traders on the platform</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Total Masters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMasters}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Active Masters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeMasters}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Total Assets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalAssets)}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Total Payouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalPayouts)}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Platform Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(platformRevenue)}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Total Followers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalFollowers}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search masters by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                    <SelectItem value="declined">Declined</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Masters Table */}
        <Card>
          <CardHeader>
            <CardTitle>Master Traders ({filteredMasters.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">
                      <Button variant="ghost" onClick={() => handleSort("name")} className="font-semibold">
                        Master <ArrowUpDown className="ml-1 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">
                      <Button variant="ghost" onClick={() => handleSort("followers")} className="font-semibold">
                        Followers <ArrowUpDown className="ml-1 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left p-4">
                      <Button variant="ghost" onClick={() => handleSort("winRate")} className="font-semibold">
                        Win Rate <ArrowUpDown className="ml-1 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left p-4">
                      <Button variant="ghost" onClick={() => handleSort("monthlyProfit")} className="font-semibold">
                        Monthly Profit <ArrowUpDown className="ml-1 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left p-4">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort("assetsUnderManagement")}
                        className="font-semibold"
                      >
                        Assets <ArrowUpDown className="ml-1 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedMasters.map((master) => (
                    <tr key={master.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={master.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {master.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{master.name}</div>
                            <div className="text-sm text-gray-500">{master.specialty}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">{getStatusBadge(master.status)}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          {master.followers}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${master.winRate >= 75 ? "bg-green-500" : master.winRate >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                          ></div>
                          {master.winRate}%
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-green-600">{formatCurrency(master.monthlyProfit)}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">{formatCurrency(master.assetsUnderManagement)}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedMaster(master)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Master Trader Details</DialogTitle>
                              </DialogHeader>
                              {selectedMaster && (
                                <Tabs defaultValue="profile" className="w-full">
                                  <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="profile">Profile</TabsTrigger>
                                    <TabsTrigger value="performance">Performance</TabsTrigger>
                                    <TabsTrigger value="followers">Followers</TabsTrigger>
                                    <TabsTrigger value="financials">Financials</TabsTrigger>
                                  </TabsList>

                                  <TabsContent value="profile" className="space-y-4">
                                    <div className="flex items-center gap-4">
                                      <Avatar className="h-20 w-20">
                                        <AvatarImage src={selectedMaster.avatar || "/placeholder.svg"} />
                                        <AvatarFallback className="text-lg">
                                          {selectedMaster.name
                                            .split(" ")
                                            .map((n: string) => n[0])
                                            .join("")}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <h3 className="text-xl font-bold">{selectedMaster.name}</h3>
                                        <p className="text-gray-600">{selectedMaster.specialty} Specialist</p>
                                        <p className="text-sm text-gray-500">{selectedMaster.location}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                          {getStatusBadge(selectedMaster.status)}
                                          {selectedMaster.verified && (
                                            <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Email</label>
                                        <p>{selectedMaster.email}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Phone</label>
                                        <p>{selectedMaster.phone}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Join Date</label>
                                        <p>{new Date(selectedMaster.joinDate).toLocaleDateString()}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Trading Specialty</label>
                                        <p>{selectedMaster.specialty}</p>
                                      </div>
                                    </div>
                                  </TabsContent>

                                  <TabsContent value="performance" className="space-y-4">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                      <Card>
                                        <CardContent className="p-4">
                                          <div className="text-2xl font-bold text-green-600">
                                            {selectedMaster.winRate}%
                                          </div>
                                          <div className="text-sm text-gray-500">Win Rate</div>
                                        </CardContent>
                                      </Card>
                                      <Card>
                                        <CardContent className="p-4">
                                          <div className="text-2xl font-bold">{selectedMaster.totalTrades}</div>
                                          <div className="text-sm text-gray-500">Total Trades</div>
                                        </CardContent>
                                      </Card>
                                      <Card>
                                        <CardContent className="p-4">
                                          <div className="text-2xl font-bold text-blue-600">
                                            {formatCurrency(selectedMaster.monthlyProfit)}
                                          </div>
                                          <div className="text-sm text-gray-500">Monthly Profit</div>
                                        </CardContent>
                                      </Card>
                                      <Card>
                                        <CardContent className="p-4">
                                          <div className="text-2xl font-bold">{selectedMaster.followers}</div>
                                          <div className="text-sm text-gray-500">Followers</div>
                                        </CardContent>
                                      </Card>
                                    </div>
                                  </TabsContent>

                                  <TabsContent value="followers" className="space-y-4">
                                    <div className="text-center py-8">
                                      <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                      <h3 className="text-lg font-medium">Follower Management</h3>
                                      <p className="text-gray-500">Detailed follower analytics and management tools</p>
                                    </div>
                                  </TabsContent>

                                  <TabsContent value="financials" className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <Card>
                                        <CardContent className="p-4">
                                          <div className="text-xl font-bold text-green-600">
                                            {formatCurrency(selectedMaster.assetsUnderManagement)}
                                          </div>
                                          <div className="text-sm text-gray-500">Assets Under Management</div>
                                        </CardContent>
                                      </Card>
                                      <Card>
                                        <CardContent className="p-4">
                                          <div className="text-xl font-bold text-blue-600">
                                            {formatCurrency(selectedMaster.monthlyProfit * 0.8)}
                                          </div>
                                          <div className="text-sm text-gray-500">Monthly Earnings (80%)</div>
                                        </CardContent>
                                      </Card>
                                    </div>
                                  </TabsContent>
                                </Tabs>
                              )}

                              {selectedMaster && (
                                <div className="flex gap-2 mt-6">
                                  {selectedMaster.status === "pending" && (
                                    <>
                                      <Button
                                        onClick={() => handleMasterAction(selectedMaster.id, "approve")}
                                        className="bg-green-600 hover:bg-green-700"
                                      >
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        Approve
                                      </Button>
                                      <Button
                                        variant="destructive"
                                        onClick={() => handleMasterAction(selectedMaster.id, "decline")}
                                      >
                                        <XCircle className="h-4 w-4 mr-2" />
                                        Decline
                                      </Button>
                                    </>
                                  )}
                                  {selectedMaster.status === "active" && (
                                    <Button
                                      variant="destructive"
                                      onClick={() => handleMasterAction(selectedMaster.id, "suspend")}
                                    >
                                      <Pause className="h-4 w-4 mr-2" />
                                      Suspend
                                    </Button>
                                  )}
                                  {selectedMaster.status === "suspended" && (
                                    <Button
                                      onClick={() => handleMasterAction(selectedMaster.id, "unsuspend")}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      <Play className="h-4 w-4 mr-2" />
                                      Unsuspend
                                    </Button>
                                  )}
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>

                          {master.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                onClick={() => handleMasterAction(master.id, "approve")}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleMasterAction(master.id, "decline")}
                              >
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}

                          {master.status === "active" && (
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleMasterAction(master.id, "suspend")}
                            >
                              <Pause className="h-4 w-4" />
                            </Button>
                          )}

                          {master.status === "suspended" && (
                            <Button
                              size="sm"
                              onClick={() => handleMasterAction(master.id, "unsuspend")}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Show</span>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number(value))
                      setCurrentPage(1)
                    }}
                  >
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-gray-600">entries</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }

                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className="w-8 h-8"
                        >
                          {pageNum}
                        </Button>
                      )
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredMasters.length)} of{" "}
                  {filteredMasters.length} entries
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
