"use client"

import { useState, useEffect } from "react"
import {
  Users,
  Search,
  Eye,
  MapPin,
  Mail,
  Calendar,
  Activity,
  CreditCard,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Download,
  MoreHorizontal,
  Wallet,
  TrendingUp,
  TrendingDown,
  LineChart,
  UserCheck,
  UserX,
  Shield,
  ShieldOff,
  DollarSign,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast"

// Mock detailed user data with connection status
const mockUsers = [
  {
    id: 1,
    name: "James Davis",
    email: "james.davis@email.com",
    phone: "+234 801 234 5678",
    address: "15 Victoria Island, Lagos, Nigeria",
    accountType: "Master",
    status: "Active",
    isConnectedToMaster: false, // Masters are not connected to other masters
    connectedMaster: null,
    joinDate: "2024-01-15",
    lastLogin: "2024-01-20T10:30:00",
    accountBalance: 125000,
    totalEarnings: 450000,
    totalWithdrawals: 325000,
    monthlyRevenue: 85000, // Revenue generated for platform
    winRate: 85,
    totalTrades: 124,
    followers: 45,
    avatar: "/placeholder.svg?height=40&width=40",
    kycStatus: "Verified",
    bankAccount: "0123456789 - Access Bank",
    paymentHistory: [
      { id: 1, type: "Withdrawal", amount: -50000, date: "2024-01-18", status: "Completed" },
      { id: 2, type: "Earnings", amount: 25000, date: "2024-01-17", status: "Completed" },
      { id: 3, type: "Earnings", amount: 30000, date: "2024-01-15", status: "Completed" },
    ],
    activities: [
      { id: 1, action: "Login", details: "Logged in from Lagos, Nigeria", timestamp: "2024-01-20T10:30:00" },
      { id: 2, action: "Trade", details: "Opened EUR/USD position", timestamp: "2024-01-20T09:15:00" },
      { id: 3, action: "Withdrawal", details: "Requested ₦50,000 withdrawal", timestamp: "2024-01-18T14:20:00" },
    ],
  },
  {
    id: 2,
    name: "Sarah Miller",
    email: "sarah.miller@email.com",
    phone: "+234 802 345 6789",
    address: "22 Ikeja GRA, Lagos, Nigeria",
    accountType: "Slave",
    status: "Active",
    isConnectedToMaster: true,
    connectedMaster: "James Davis",
    joinDate: "2024-01-10",
    lastLogin: "2024-01-19T16:45:00",
    accountBalance: 75000,
    totalEarnings: 0,
    totalWithdrawals: 0,
    monthlyRevenue: 25000, // Subscription fees paid
    winRate: null,
    totalTrades: 0,
    followers: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    kycStatus: "Verified",
    bankAccount: "9876543210 - GTBank",
    paymentHistory: [
      { id: 1, type: "Deposit", amount: 50000, date: "2024-01-15", status: "Completed" },
      { id: 2, type: "Subscription", amount: -25000, date: "2024-01-12", status: "Completed" },
    ],
    activities: [
      { id: 1, action: "Login", details: "Logged in from Lagos, Nigeria", timestamp: "2024-01-19T16:45:00" },
      { id: 2, action: "Subscription", details: "Subscribed to James Davis", timestamp: "2024-01-12T11:30:00" },
      { id: 3, action: "Deposit", details: "Deposited ₦50,000", timestamp: "2024-01-15T09:20:00" },
    ],
  },
  {
    id: 3,
    name: "Karen Lee",
    email: "karen.lee@email.com",
    phone: "+234 803 456 7890",
    address: "8 Lekki Phase 1, Lagos, Nigeria",
    accountType: "Master",
    status: "Active",
    isConnectedToMaster: false,
    connectedMaster: null,
    joinDate: "2024-01-08",
    lastLogin: "2024-01-20T08:20:00",
    accountBalance: 200000,
    totalEarnings: 380000,
    totalWithdrawals: 180000,
    monthlyRevenue: 65000,
    winRate: 82,
    totalTrades: 98,
    followers: 32,
    avatar: "/placeholder.svg?height=40&width=40",
    kycStatus: "Verified",
    bankAccount: "5555666677 - Zenith Bank",
    paymentHistory: [
      { id: 1, type: "Earnings", amount: 40000, date: "2024-01-19", status: "Completed" },
      { id: 2, type: "Withdrawal", amount: -80000, date: "2024-01-16", status: "Completed" },
      { id: 3, type: "Earnings", amount: 35000, date: "2024-01-14", status: "Completed" },
    ],
    activities: [
      { id: 1, action: "Login", details: "Logged in from Lagos, Nigeria", timestamp: "2024-01-20T08:20:00" },
      { id: 2, action: "Trade", details: "Closed GBP/USD position (+₦15,000)", timestamp: "2024-01-19T15:30:00" },
      { id: 3, action: "Profile Update", details: "Updated trading strategy", timestamp: "2024-01-18T12:10:00" },
    ],
  },
  {
    id: 4,
    name: "Thomas Johnson",
    email: "thomas.j@email.com",
    phone: "+234 804 567 8901",
    address: "45 Abuja Central, FCT, Nigeria",
    accountType: "Master",
    status: "Blocked",
    isConnectedToMaster: false,
    connectedMaster: null,
    joinDate: "2023-12-05",
    lastLogin: "2024-01-10T14:15:00",
    accountBalance: 25000,
    totalEarnings: 150000,
    totalWithdrawals: 125000,
    monthlyRevenue: 15000,
    winRate: 65,
    totalTrades: 156,
    followers: 12,
    avatar: "/placeholder.svg?height=40&width=40",
    kycStatus: "Pending",
    bankAccount: "1111222233 - UBA",
    paymentHistory: [
      { id: 1, type: "Withdrawal", amount: -25000, date: "2024-01-08", status: "Failed" },
      { id: 2, type: "Earnings", amount: 10000, date: "2024-01-05", status: "Completed" },
    ],
    activities: [
      {
        id: 1,
        action: "Account Blocked",
        details: "Account blocked due to suspicious activity",
        timestamp: "2024-01-12T10:00:00",
      },
      { id: 2, action: "Login", details: "Logged in from Abuja, Nigeria", timestamp: "2024-01-10T14:15:00" },
      { id: 3, action: "Trade", details: "Multiple failed trades", timestamp: "2024-01-10T13:45:00" },
    ],
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+234 805 678 9012",
    address: "12 Port Harcourt, Rivers, Nigeria",
    accountType: "Slave",
    status: "Active",
    isConnectedToMaster: false, // Not connected to any master (inactive)
    connectedMaster: null,
    joinDate: "2024-01-12",
    lastLogin: "2024-01-18T12:30:00",
    accountBalance: 45000,
    totalEarnings: 0,
    totalWithdrawals: 0,
    monthlyRevenue: 0, // No revenue as not subscribed
    winRate: null,
    totalTrades: 0,
    followers: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    kycStatus: "Verified",
    bankAccount: "7777888899 - First Bank",
    paymentHistory: [{ id: 1, type: "Deposit", amount: 45000, date: "2024-01-12", status: "Completed" }],
    activities: [
      { id: 1, action: "Login", details: "Logged in from Port Harcourt, Nigeria", timestamp: "2024-01-18T12:30:00" },
      { id: 2, action: "Deposit", details: "Deposited ₦45,000", timestamp: "2024-01-12T10:15:00" },
    ],
  },
  {
    id: 6,
    name: "Lisa Wilson",
    email: "lisa.wilson@email.com",
    phone: "+234 806 789 0123",
    address: "25 Kano State, Nigeria",
    accountType: "Slave",
    status: "Active",
    isConnectedToMaster: true,
    connectedMaster: "Karen Lee",
    joinDate: "2024-01-14",
    lastLogin: "2024-01-20T14:20:00",
    accountBalance: 85000,
    totalEarnings: 0,
    totalWithdrawals: 0,
    monthlyRevenue: 30000,
    winRate: null,
    totalTrades: 0,
    followers: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    kycStatus: "Verified",
    bankAccount: "3333444455 - Zenith Bank",
    paymentHistory: [
      { id: 1, type: "Subscription", amount: -30000, date: "2024-01-14", status: "Completed" },
      { id: 2, type: "Deposit", amount: 85000, date: "2024-01-14", status: "Completed" },
    ],
    activities: [
      { id: 1, action: "Login", details: "Logged in from Kano, Nigeria", timestamp: "2024-01-20T14:20:00" },
      { id: 2, action: "Subscription", details: "Subscribed to Karen Lee", timestamp: "2024-01-14T16:45:00" },
    ],
  },
]

export default function AdminUsersPage() {
  const [users, setUsers] = useState(mockUsers)
  const [filteredUsers, setFilteredUsers] = useState(mockUsers)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [accountTypeFilter, setAccountTypeFilter] = useState("all")
  const [kycFilter, setKycFilter] = useState("all")
  const [sortField, setSortField] = useState("joinDate")
  const [sortDirection, setSortDirection] = useState("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const [blockDialogOpen, setBlockDialogOpen] = useState(false)
  const [userToBlock, setUserToBlock] = useState(null)
  const [actionType, setActionType] = useState("") // "block" or "unblock"
  const [itemsPerPage, setItemsPerPage] = useState(8)

  const { toast } = useToast()

  // Calculate statistics
  const totalUsers = users.length
  const activeUsers = users.filter((user) => user.isConnectedToMaster || user.accountType === "Master").length
  const inactiveUsers = users.filter((user) => !user.isConnectedToMaster && user.accountType === "Slave").length
  const totalRevenue = users.reduce((sum, user) => sum + user.monthlyRevenue, 0)
  const totalBalance = users.reduce((sum, user) => sum + user.accountBalance, 0)

  // Filter and sort users
  const applyFilters = () => {
    let filtered = [...users]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.phone.includes(searchTerm) ||
          user.address.toLowerCase().includes(searchTerm.toLowerCase()),
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

    // KYC filter
    if (kycFilter !== "all") {
      filtered = filtered.filter((user) => user.kycStatus.toLowerCase() === kycFilter)
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue = a[sortField]
      let bValue = b[sortField]

      if (sortField === "joinDate" || sortField === "lastLogin") {
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

  useEffect(() => {
    applyFilters()
  }, [searchTerm, statusFilter, accountTypeFilter, kycFilter, sortField, sortDirection, users])

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

  const openUserModal = (user) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const handleBlockUser = (user, action) => {
    setUserToBlock(user)
    setActionType(action)
    setBlockDialogOpen(true)
  }

  const confirmBlockAction = () => {
    if (userToBlock) {
      const updatedUsers = users.map((user) =>
        user.id === userToBlock.id
          ? {
              ...user,
              status: actionType === "block" ? "Blocked" : "Active",
              activities: [
                {
                  id: Date.now(),
                  action: actionType === "block" ? "Account Blocked" : "Account Unblocked",
                  details: `Account ${actionType === "block" ? "blocked" : "unblocked"} by admin`,
                  timestamp: new Date().toISOString(),
                },
                ...user.activities,
              ],
            }
          : user,
      )

      setUsers(updatedUsers)
      toast({
        title: actionType === "block" ? "User Blocked" : "User Unblocked",
        description: `${userToBlock.name} has been ${actionType === "block" ? "blocked" : "unblocked"} successfully.`,
      })
    }
    setBlockDialogOpen(false)
    setUserToBlock(null)
    setActionType("")
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString("en-NG", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusBadge = (status) => {
    const variants = {
      Active: "bg-green-100 text-green-800 hover:bg-green-100",
      Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      Blocked: "bg-red-100 text-red-800 hover:bg-red-100",
      Suspended: "bg-gray-100 text-gray-800 hover:bg-gray-100",
    }
    return <Badge className={variants[status] || "bg-gray-100 text-gray-800"}>{status}</Badge>
  }

  const getKycBadge = (status) => {
    const variants = {
      Verified: "bg-green-100 text-green-800 hover:bg-green-100",
      Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
      Rejected: "bg-red-100 text-red-800 hover:bg-red-100",
    }
    return <Badge className={variants[status] || "bg-gray-100 text-gray-800"}>{status}</Badge>
  }

  const getAccountTypeBadge = (type) => {
    return <Badge variant={type === "Master" ? "default" : "secondary"}>{type}</Badge>
  }

  const getConnectionStatus = (user) => {
    if (user.accountType === "Master") {
      return <Badge className="bg-blue-100 text-blue-800">Master Trader</Badge>
    }
    if (user.isConnectedToMaster) {
      return <Badge className="bg-green-100 text-green-800">Connected to {user.connectedMaster}</Badge>
    }
    return <Badge className="bg-gray-100 text-gray-800">Not Connected</Badge>
  }

  return (
    <div className="space-y-8 p-4 md:p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-lg">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive user details, activities, balances, and payment history
        </p>
      </div>

      {/* Enhanced Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{totalUsers}</div>
            <div className="flex items-center text-xs text-blue-600 mt-1">
              <span>All registered users</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{activeUsers}</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <span>Connected to masters</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inactive Users</CardTitle>
            <UserX className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">{inactiveUsers}</div>
            <div className="flex items-center text-xs text-orange-600 mt-1">
              <span>Not connected</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-purple-900">{formatCurrency(totalRevenue)}</div>
            <div className="flex items-center text-xs text-purple-600 mt-1">
              <span>Platform revenue</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <Wallet className="h-4 w-4 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-teal-900">{formatCurrency(totalBalance)}</div>
            <div className="flex items-center text-xs text-teal-600 mt-1">
              <span>All user balances</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management Table */}
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            All Users
          </CardTitle>
          <CardDescription>Detailed user information, activities, and financial data</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, phone, or address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>

              <Select value={accountTypeFilter} onValueChange={setAccountTypeFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Account Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="master">Master</SelectItem>
                  <SelectItem value="slave">Slave</SelectItem>
                </SelectContent>
              </Select>

              <Select value={kycFilter} onValueChange={setKycFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="KYC Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All KYC</SelectItem>
                  <SelectItem value="verified">Verified</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{" "}
            {filteredUsers.length} users
            {searchTerm && ` matching "${searchTerm}"`}
          </div>

          {/* Page Size Selector */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Show</span>
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
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground">entries per page</span>
            </div>

            <div className="text-sm text-muted-foreground">Total: {filteredUsers.length} users</div>
          </div>

          {/* Top Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="hidden sm:flex"
              >
                First
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline ml-1">Previous</span>
              </Button>

              {/* Page numbers */}
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
                      className="w-8 h-8 p-0"
                    >
                      {pageNum}
                    </Button>
                  )
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <span className="hidden sm:inline mr-1">Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="hidden sm:flex"
              >
                Last
              </Button>
            </div>
          )}

          {/* Enhanced Table */}
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
                      User Details
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-4 font-medium hidden md:table-cell">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("accountType")}
                      className="h-auto p-0 font-medium hover:bg-transparent"
                    >
                      Type & Status
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-4 font-medium hidden lg:table-cell">Connection Status</th>
                  <th className="text-left p-4 font-medium hidden lg:table-cell">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("accountBalance")}
                      className="h-auto p-0 font-medium hover:bg-transparent"
                    >
                      Balance & Revenue
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-4 font-medium hidden lg:table-cell">
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("lastLogin")}
                      className="h-auto p-0 font-medium hover:bg-transparent"
                    >
                      Last Activity
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-center p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-12 w-12">
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
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            <p className="text-xs text-muted-foreground hidden sm:block">{user.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <div className="space-y-1">
                          {getAccountTypeBadge(user.accountType)}
                          {getStatusBadge(user.status)}
                          {getKycBadge(user.kycStatus)}
                        </div>
                      </td>
                      <td className="p-4 hidden lg:table-cell">{getConnectionStatus(user)}</td>
                      <td className="p-4 hidden lg:table-cell">
                        <div className="text-sm">
                          <div className="font-medium">{formatCurrency(user.accountBalance)}</div>
                          <div className="text-muted-foreground">Revenue: {formatCurrency(user.monthlyRevenue)}</div>
                        </div>
                      </td>
                      <td className="p-4 hidden lg:table-cell">
                        <div className="text-sm">
                          <div>{formatDateTime(user.lastLogin)}</div>
                          <div className="text-muted-foreground">
                            Joined: {new Date(user.joinDate).toLocaleDateString()}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <Button size="sm" variant="outline" onClick={() => openUserModal(user)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          {user.status === "Active" ? (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleBlockUser(user, "block")}
                              className="text-red-600 hover:text-red-700"
                            >
                              <ShieldOff className="h-4 w-4" />
                            </Button>
                          ) : user.status === "Blocked" ? (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleBlockUser(user, "unblock")}
                              className="text-green-600 hover:text-green-700"
                            >
                              <Shield className="h-4 w-4" />
                            </Button>
                          ) : null}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => openUserModal(user)}>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>View Transactions</DropdownMenuItem>
                              <DropdownMenuItem>Send Message</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {user.status === "Active" ? (
                                <DropdownMenuItem
                                  className="text-red-600"
                                  onClick={() => handleBlockUser(user, "block")}
                                >
                                  Block User
                                </DropdownMenuItem>
                              ) : user.status === "Blocked" ? (
                                <DropdownMenuItem
                                  className="text-green-600"
                                  onClick={() => handleBlockUser(user, "unblock")}
                                >
                                  Unblock User
                                </DropdownMenuItem>
                              ) : null}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-muted-foreground">
                      No users found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {filteredUsers.length > itemsPerPage && (
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4 p-4 bg-muted/20 rounded-lg">
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

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum = i + 1
                    if (totalPages > 5) {
                      if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className="w-10 h-8"
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
                </div>

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
        </CardContent>
      </Card>

      {/* Block/Unblock Confirmation Dialog */}
      <AlertDialog open={blockDialogOpen} onOpenChange={setBlockDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{actionType === "block" ? "Block User" : "Unblock User"}</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {actionType} {userToBlock?.name}?
              {actionType === "block"
                ? " This will prevent them from accessing their account and trading."
                : " This will restore their access to the platform."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmBlockAction}
              className={actionType === "block" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
            >
              {actionType === "block" ? "Block User" : "Unblock User"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Detailed User Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>Complete user information, activities, and financial history</DialogDescription>
          </DialogHeader>

          {selectedUser && (
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-4">
                {/* User Profile Info */}
                <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={selectedUser.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-xl">
                      {selectedUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl">{selectedUser.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      {getAccountTypeBadge(selectedUser.accountType)}
                      {getStatusBadge(selectedUser.status)}
                      {getKycBadge(selectedUser.kycStatus)}
                      {getConnectionStatus(selectedUser)}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{selectedUser.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{selectedUser.phone}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Address & Banking
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium">{selectedUser.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Bank Account</p>
                        <p className="font-medium">{selectedUser.bankAccount}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Account Dates */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Account Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Join Date</p>
                        <p className="font-medium">{new Date(selectedUser.joinDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Login</p>
                        <p className="font-medium">{formatDateTime(selectedUser.lastLogin)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financial" className="space-y-4">
                {/* Financial Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-green-600" />
                        Current Balance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-900">
                        {formatCurrency(selectedUser.accountBalance)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        Total Earnings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-900">
                        {formatCurrency(selectedUser.totalEarnings)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-purple-600" />
                        Monthly Revenue
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-purple-900">
                        {formatCurrency(selectedUser.monthlyRevenue)}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Trading Performance (for Masters) */}
                {selectedUser.accountType === "Master" && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <LineChart className="h-4 w-4" />
                        Trading Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{selectedUser.winRate}%</div>
                          <div className="text-sm text-muted-foreground">Win Rate</div>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{selectedUser.totalTrades}</div>
                          <div className="text-sm text-muted-foreground">Total Trades</div>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{selectedUser.followers}</div>
                          <div className="text-sm text-muted-foreground">Followers</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="payments" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Payment History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedUser.paymentHistory.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-full ${
                                payment.amount > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                              }`}
                            >
                              {payment.amount > 0 ? (
                                <TrendingUp className="h-4 w-4" />
                              ) : (
                                <TrendingDown className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{payment.type}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(payment.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${payment.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                              {payment.amount > 0 ? "+" : ""}
                              {formatCurrency(Math.abs(payment.amount))}
                            </p>
                            <Badge
                              className={
                                payment.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : payment.status === "Failed"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {payment.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Activity className="h-4 w-4" />
                      Recent Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedUser.activities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="p-2 bg-primary/10 text-primary rounded-full">
                            <Activity className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.details}</p>
                            <p className="text-xs text-muted-foreground mt-1">{formatDateTime(activity.timestamp)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
