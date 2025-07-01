"use client"

import { useState, useEffect } from "react"
import {
  CheckCircle,
  LineChart,
  TrendingUp,
  Users,
  XCircle,
  Search,
  Eye,
  Shield,
  ShieldOff,
  Calendar,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  CreditCard,
  TrendingDown,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

// Mock user data with more realistic dates and revenue data
const mockUsers = [
  {
    id: 1,
    name: "James Davis",
    email: "james.davis@email.com",
    phone: "+234 801 234 5678",
    accountType: "Master",
    status: "Pending",
    joinDate: "2024-01-15",
    winRate: 85,
    totalTrades: 124,
    followers: 45,
    monthlyRevenue: 25000,
    totalPayout: 17500,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Sarah Miller",
    email: "sarah.miller@email.com",
    phone: "+234 802 345 6789",
    accountType: "Slave",
    status: "Active",
    joinDate: "2024-01-10",
    winRate: null,
    totalTrades: 0,
    followers: 0,
    monthlyRevenue: 5000,
    totalPayout: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Karen Lee",
    email: "karen.lee@email.com",
    phone: "+234 803 456 7890",
    accountType: "Master",
    status: "Active",
    joinDate: "2024-01-08",
    winRate: 82,
    totalTrades: 98,
    followers: 32,
    monthlyRevenue: 18000,
    totalPayout: 12600,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Thomas Johnson",
    email: "thomas.j@email.com",
    phone: "+234 804 567 8901",
    accountType: "Master",
    status: "Blocked",
    joinDate: "2023-12-05",
    winRate: 65,
    totalTrades: 156,
    followers: 12,
    monthlyRevenue: 8000,
    totalPayout: 5600,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Amanda Wilson",
    email: "amanda.w@email.com",
    phone: "+234 805 678 9012",
    accountType: "Slave",
    status: "Pending",
    joinDate: "2024-01-12",
    winRate: null,
    totalTrades: 0,
    followers: 0,
    monthlyRevenue: 3000,
    totalPayout: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Ryan Patel",
    email: "ryan.patel@email.com",
    phone: "+234 806 789 0123",
    accountType: "Master",
    status: "Pending",
    joinDate: "2024-01-18",
    winRate: 78,
    totalTrades: 89,
    followers: 28,
    monthlyRevenue: 15000,
    totalPayout: 10500,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    name: "Michael Brown",
    email: "michael.b@email.com",
    phone: "+234 807 890 1234",
    accountType: "Master",
    status: "Active",
    joinDate: "2023-11-20",
    winRate: 88,
    totalTrades: 245,
    followers: 67,
    monthlyRevenue: 35000,
    totalPayout: 24500,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    name: "Lisa Chen",
    email: "lisa.chen@email.com",
    phone: "+234 808 901 2345",
    accountType: "Slave",
    status: "Active",
    joinDate: "2023-12-15",
    winRate: null,
    totalTrades: 0,
    followers: 0,
    monthlyRevenue: 7500,
    totalPayout: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function AdminDashboard() {
  const [users, setUsers] = useState(mockUsers)
  const [filteredUsers, setFilteredUsers] = useState(mockUsers)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [accountTypeFilter, setAccountTypeFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")
  const [sortField, setSortField] = useState("joinDate")
  const [sortDirection, setSortDirection] = useState("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const [actionType, setActionType] = useState("")
  const [actionReason, setActionReason] = useState("")
  const { toast } = useToast()

  const itemsPerPage = 5

  // Calculate stats based on date filter
  const getFilteredStats = () => {
    let filteredForStats = [...users]

    if (dateFilter !== "all") {
      const now = new Date()
      const filterDate = new Date()

      switch (dateFilter) {
        case "week":
          filterDate.setDate(now.getDate() - 7)
          break
        case "month":
          filterDate.setMonth(now.getMonth() - 1)
          break
        case "3months":
          filterDate.setMonth(now.getMonth() - 3)
          break
      }

      filteredForStats = filteredForStats.filter((user) => new Date(user.joinDate) >= filterDate)
    }

    const totalUsers = filteredForStats.length
    const activeUsers = filteredForStats.filter((u) => u.status === "Active").length
    const pendingUsers = filteredForStats.filter((u) => u.status === "Pending").length
    const masterUsers = filteredForStats.filter((u) => u.accountType === "Master").length
    const totalRevenue = filteredForStats.reduce((sum, user) => sum + user.monthlyRevenue, 0)
    const totalPayouts = filteredForStats.reduce((sum, user) => sum + user.totalPayout, 0)

    return {
      totalUsers,
      activeUsers,
      pendingUsers,
      masterUsers,
      totalRevenue,
      totalPayouts,
    }
  }

  // Filter and sort users
  const applyFilters = () => {
    let filtered = [...users]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((user) => user.status.toLowerCase() === statusFilter)
    }

    // Account type filter
    if (accountTypeFilter !== "all") {
      filtered = filtered.filter((user) => user.accountType.toLowerCase() === accountTypeFilter)
    }

    // Date filter for table (separate from stats)
    if (dateFilter !== "all") {
      const now = new Date()
      const filterDate = new Date()

      switch (dateFilter) {
        case "week":
          filterDate.setDate(now.getDate() - 7)
          break
        case "month":
          filterDate.setMonth(now.getMonth() - 1)
          break
        case "3months":
          filterDate.setMonth(now.getMonth() - 3)
          break
      }

      filtered = filtered.filter((user) => new Date(user.joinDate) >= filterDate)
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue = a[sortField]
      let bValue = b[sortField]

      if (sortField === "joinDate") {
        aValue = new Date(aValue)
        bValue = new Date(bValue)
      }

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    setFilteredUsers(filtered)
    setCurrentPage(1)
  }

  // Apply filters whenever dependencies change
  useEffect(() => {
    applyFilters()
  }, [searchTerm, statusFilter, accountTypeFilter, dateFilter, sortField, sortDirection, users])

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const openActionModal = (user, action) => {
    setSelectedUser(user)
    setActionType(action)
    setIsModalOpen(true)
    setActionReason("")
  }

  const handleUserAction = () => {
    if (!selectedUser || !actionType) return

    const updatedUsers = users.map((user) => {
      if (user.id === selectedUser.id) {
        switch (actionType) {
          case "approve":
            return { ...user, status: "Active" }
          case "reject":
            return { ...user, status: "Rejected" }
          case "block":
            return { ...user, status: "Blocked" }
          case "unblock":
            return { ...user, status: "Active" }
          default:
            return user
        }
      }
      return user
    })

    setUsers(updatedUsers)
    setIsModalOpen(false)

    toast({
      title: "Action Completed",
      description: `User ${selectedUser.name} has been ${actionType}d successfully.`,
    })
  }

  const getStatusBadge = (status) => {
    const variants = {
      Active: "bg-green-100 text-green-800 hover:bg-green-100",
      Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      Blocked: "bg-red-100 text-red-800 hover:bg-red-100",
      Rejected: "bg-gray-100 text-gray-800 hover:bg-gray-100",
    }
    return <Badge className={variants[status] || "bg-gray-100 text-gray-800"}>{status}</Badge>
  }

  const getAccountTypeBadge = (type) => {
    return <Badge variant={type === "Master" ? "default" : "secondary"}>{type}</Badge>
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const stats = getFilteredStats()

  return (
    <div className="space-y-8 p-4 md:p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-lg">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage users, approve accounts, and monitor platform activity</p>
      </div>

      {/* Date Filter - Above Stats */}
      <Card className="bg-gradient-to-r from-primary/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Filter by Registration Date
          </CardTitle>
          <CardDescription>Select a time period to filter all data below</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="week">Last 7 Days</SelectItem>
              <SelectItem value="month">Last 30 Days</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Stats Cards - Now Dynamic Based on Date Filter */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{stats.totalUsers}</div>
            <div className="flex items-center text-xs text-blue-600 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>Registered</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{stats.activeUsers}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>Verified</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Calendar className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">{stats.pendingUsers}</div>
            <div className="flex items-center text-xs text-yellow-600 mt-1">
              <span>Need Review</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Masters</CardTitle>
            <LineChart className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{stats.masterUsers}</div>
            <div className="flex items-center text-xs text-purple-600 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>Traders</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-emerald-900">{formatCurrency(stats.totalRevenue)}</div>
            <div className="flex items-center text-xs text-emerald-600 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>Total Income</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payouts</CardTitle>
            <CreditCard className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-orange-900">{formatCurrency(stats.totalPayouts)}</div>
            <div className="flex items-center text-xs text-orange-600 mt-1">
              <TrendingDown className="mr-1 h-3 w-3" />
              <span>Paid Out</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management Section */}
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Management
          </CardTitle>
          <CardDescription>
            View, filter, and manage all platform users
            {dateFilter !== "all" && (
              <span className="ml-2 text-primary font-medium">
                (Filtered by{" "}
                {dateFilter === "week" ? "Last 7 Days" : dateFilter === "month" ? "Last 30 Days" : "Last 3 Months"})
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* Additional Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select value={accountTypeFilter} onValueChange={setAccountTypeFilter}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Account Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="master">Master</SelectItem>
                <SelectItem value="slave">Slave</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Summary */}
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {filteredUsers.length} of {users.length} users
            {searchTerm && ` matching "${searchTerm}"`}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("name")}
                      className="h-auto p-0 font-medium hover:bg-transparent"
                    >
                      User
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-4 font-medium hidden md:table-cell">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("accountType")}
                      className="h-auto p-0 font-medium hover:bg-transparent"
                    >
                      Type
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-4 font-medium">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("status")}
                      className="h-auto p-0 font-medium hover:bg-transparent"
                    >
                      Status
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-4 font-medium hidden lg:table-cell">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("joinDate")}
                      className="h-auto p-0 font-medium hover:bg-transparent"
                    >
                      Join Date
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-4 font-medium hidden lg:table-cell">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("monthlyRevenue")}
                      className="h-auto p-0 font-medium hover:bg-transparent"
                    >
                      Revenue
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-center p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground hidden sm:block">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">{getAccountTypeBadge(user.accountType)}</td>
                    <td className="p-4">{getStatusBadge(user.status)}</td>
                    <td className="p-4 hidden lg:table-cell">
                      <span className="text-sm">{new Date(user.joinDate).toLocaleDateString()}</span>
                    </td>
                    <td className="p-4 hidden lg:table-cell">
                      <div className="text-sm">
                        <div className="font-medium">{formatCurrency(user.monthlyRevenue)}</div>
                        {user.accountType === "Master" && (
                          <div className="text-muted-foreground">Win: {user.winRate}%</div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <Button size="sm" variant="outline" onClick={() => openActionModal(user, "view")}>
                          <Eye className="h-4 w-4" />
                        </Button>

                        {user.status === "Pending" && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openActionModal(user, "approve")}
                              className="text-green-600 hover:text-green-700"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openActionModal(user, "reject")}
                              className="text-red-600 hover:text-red-700"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}

                        {user.status === "Active" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => openActionModal(user, "block")}
                            className="text-red-600 hover:text-red-700"
                          >
                            <ShieldOff className="h-4 w-4" />
                          </Button>
                        )}

                        {user.status === "Blocked" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => openActionModal(user, "unblock")}
                            className="text-green-600 hover:text-green-700"
                          >
                            <Shield className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Enhanced Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <div className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{" "}
                {filteredUsers.length} users
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                  First
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <span className="text-sm px-4">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  Last
                </Button>
              </div>
            </div>
          )}

          {/* No Results Message */}
          {filteredUsers.length === 0 && (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-muted-foreground mb-2">No users found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {actionType === "view" && "User Details"}
              {actionType === "approve" && "Approve Account"}
              {actionType === "reject" && "Reject Account"}
              {actionType === "block" && "Block User"}
              {actionType === "unblock" && "Unblock User"}
            </DialogTitle>
            <DialogDescription>
              {selectedUser && (
                <>
                  {actionType === "view" && `View details for ${selectedUser.name}`}
                  {actionType === "approve" && `Approve ${selectedUser.name}'s account`}
                  {actionType === "reject" && `Reject ${selectedUser.name}'s account`}
                  {actionType === "block" && `Block ${selectedUser.name}'s account`}
                  {actionType === "unblock" && `Unblock ${selectedUser.name}'s account`}
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {selectedUser && (
            <div className="space-y-4">
              {/* User Info */}
              <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedUser.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-lg">
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{selectedUser.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
                  <p className="text-sm text-muted-foreground">{selectedUser.phone}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {getAccountTypeBadge(selectedUser.accountType)}
                    {getStatusBadge(selectedUser.status)}
                  </div>
                </div>
              </div>

              {/* Performance & Revenue Info */}
              <div className="grid grid-cols-2 gap-4">
                {selectedUser.accountType === "Master" ? (
                  <>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-900">{selectedUser.winRate}%</div>
                      <div className="text-sm text-blue-600">Win Rate</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-900">{selectedUser.totalTrades}</div>
                      <div className="text-sm text-green-600">Total Trades</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-900">Follower</div>
                      <div className="text-sm text-purple-600">Account Type</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">N/A</div>
                      <div className="text-sm text-gray-600">Trading Stats</div>
                    </div>
                  </>
                )}
              </div>

              {/* Revenue Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <div className="text-lg font-bold text-emerald-900">
                    {formatCurrency(selectedUser.monthlyRevenue)}
                  </div>
                  <div className="text-sm text-emerald-600">Monthly Revenue</div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-lg font-bold text-orange-900">{formatCurrency(selectedUser.totalPayout)}</div>
                  <div className="text-sm text-orange-600">Total Payouts</div>
                </div>
              </div>

              {/* Action Reason */}
              {actionType !== "view" && (
                <div className="space-y-2">
                  <Label htmlFor="reason">
                    {actionType === "approve" ? "Approval Notes (Optional)" : "Reason for Action"}
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder={`Enter reason for ${actionType}ing this account...`}
                    value={actionReason}
                    onChange={(e) => setActionReason(e.target.value)}
                    rows={3}
                  />
                </div>
              )}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            {actionType !== "view" && (
              <Button
                onClick={handleUserAction}
                variant={actionType === "approve" || actionType === "unblock" ? "default" : "destructive"}
              >
                {actionType === "approve" && "Approve Account"}
                {actionType === "reject" && "Reject Account"}
                {actionType === "block" && "Block User"}
                {actionType === "unblock" && "Unblock User"}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
