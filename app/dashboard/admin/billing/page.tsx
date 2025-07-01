"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Eye,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Clock,
  Users,
  CreditCard,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react"

// Mock data for billing
const mockUsers = [
  {
    id: 1,
    name: "Adebayo Johnson",
    email: "adebayo@email.com",
    type: "Master",
    totalPaid: 850000,
    totalReceived: 680000,
    status: "Active",
    lastPayment: "2024-01-15",
    transactions: [
      {
        id: 1,
        date: "2024-01-15",
        type: "Payout",
        amount: 85000,
        status: "Completed",
        method: "Bank Transfer",
        reference: "TXN001",
      },
      {
        id: 2,
        date: "2024-01-10",
        type: "Commission",
        amount: 17000,
        status: "Completed",
        method: "Platform",
        reference: "TXN002",
      },
      {
        id: 3,
        date: "2024-01-05",
        type: "Payout",
        amount: 92000,
        status: "Pending",
        method: "Bank Transfer",
        reference: "TXN003",
      },
    ],
  },
  {
    id: 2,
    name: "Fatima Abdullahi",
    email: "fatima@email.com",
    type: "Slave",
    totalPaid: 45000,
    totalReceived: 0,
    status: "Active",
    lastPayment: "2024-01-12",
    transactions: [
      {
        id: 4,
        date: "2024-01-12",
        type: "Subscription",
        amount: 15000,
        status: "Completed",
        method: "Card",
        reference: "TXN004",
      },
      {
        id: 5,
        date: "2023-12-12",
        type: "Subscription",
        amount: 15000,
        status: "Completed",
        method: "Bank Transfer",
        reference: "TXN005",
      },
      {
        id: 6,
        date: "2023-11-12",
        type: "Subscription",
        amount: 15000,
        status: "Failed",
        method: "Card",
        reference: "TXN006",
      },
    ],
  },
  {
    id: 3,
    name: "Chinedu Okafor",
    email: "chinedu@email.com",
    type: "Master",
    totalPaid: 1200000,
    totalReceived: 960000,
    status: "Active",
    lastPayment: "2024-01-14",
    transactions: [
      {
        id: 7,
        date: "2024-01-14",
        type: "Payout",
        amount: 120000,
        status: "Completed",
        method: "Bank Transfer",
        reference: "TXN007",
      },
      {
        id: 8,
        date: "2024-01-07",
        type: "Commission",
        amount: 24000,
        status: "Completed",
        method: "Platform",
        reference: "TXN008",
      },
    ],
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    email: "aisha@email.com",
    type: "Slave",
    totalPaid: 30000,
    totalReceived: 0,
    status: "Pending",
    lastPayment: "2024-01-10",
    transactions: [
      {
        id: 9,
        date: "2024-01-10",
        type: "Subscription",
        amount: 15000,
        status: "Pending",
        method: "Bank Transfer",
        reference: "TXN009",
      },
      {
        id: 10,
        date: "2023-12-10",
        type: "Subscription",
        amount: 15000,
        status: "Completed",
        method: "Card",
        reference: "TXN010",
      },
    ],
  },
  {
    id: 5,
    name: "Emeka Nwankwo",
    email: "emeka@email.com",
    type: "Master",
    totalPaid: 650000,
    totalReceived: 520000,
    status: "Active",
    lastPayment: "2024-01-13",
    transactions: [
      {
        id: 11,
        date: "2024-01-13",
        type: "Payout",
        amount: 65000,
        status: "Completed",
        method: "Bank Transfer",
        reference: "TXN011",
      },
      {
        id: 12,
        date: "2024-01-06",
        type: "Commission",
        amount: 13000,
        status: "Completed",
        method: "Platform",
        reference: "TXN012",
      },
    ],
  },
]

export default function AdminBillingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [transactionSearch, setTransactionSearch] = useState("")
  const [transactionTypeFilter, setTransactionTypeFilter] = useState("all")
  const [transactionStatusFilter, setTransactionStatusFilter] = useState("all")

  // Calculate totals
  const totalInflow = mockUsers.filter((user) => user.type === "Slave").reduce((sum, user) => sum + user.totalPaid, 0)

  const totalOutflow = mockUsers
    .filter((user) => user.type === "Master")
    .reduce((sum, user) => sum + user.totalReceived, 0)

  const netRevenue = totalInflow - totalOutflow
  const pendingPayments = mockUsers.reduce((sum, user) => {
    return sum + user.transactions.filter((t) => t.status === "Pending").length
  }, 0)

  const totalTransactions = mockUsers.reduce((sum, user) => sum + user.transactions.length, 0)
  const activeSubscriptions = mockUsers.filter((user) => user.status === "Active").length

  // Filter and sort users
  const filteredUsers = mockUsers
    .filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter
      const matchesType = typeFilter === "all" || user.type.toLowerCase() === typeFilter
      return matchesSearch && matchesStatus && matchesType
    })
    .sort((a, b) => {
      let aValue, bValue
      switch (sortBy) {
        case "name":
          aValue = a.name
          bValue = b.name
          break
        case "totalPaid":
          aValue = a.totalPaid
          bValue = b.totalPaid
          break
        case "lastPayment":
          aValue = new Date(a.lastPayment)
          bValue = new Date(b.lastPayment)
          break
        default:
          aValue = a.name
          bValue = b.name
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  const openUserModal = (user: any) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  // Filter transactions in modal
  const filteredTransactions =
    selectedUser?.transactions.filter((transaction: any) => {
      const matchesSearch =
        transaction.reference.toLowerCase().includes(transactionSearch.toLowerCase()) ||
        transaction.type.toLowerCase().includes(transactionSearch.toLowerCase())
      const matchesType =
        transactionTypeFilter === "all" || transaction.type.toLowerCase() === transactionTypeFilter.toLowerCase()
      const matchesStatus =
        transactionStatusFilter === "all" || transaction.status.toLowerCase() === transactionStatusFilter.toLowerCase()
      return matchesSearch && matchesType && matchesStatus
    }) || []

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      Active: "default",
      Pending: "secondary",
      Overdue: "destructive",
      Completed: "default",
      Failed: "destructive",
    }
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Billing Management</h1>
            <p className="text-gray-600 mt-1">Monitor platform finances and user payments</p>
          </div>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Cash Inflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalInflow)}</div>
              <p className="text-green-100 text-xs">From slave subscriptions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                Cash Outflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalOutflow)}</div>
              <p className="text-red-100 text-xs">Payouts to masters</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Net Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(netRevenue)}</div>
              <p className="text-blue-100 text-xs">Platform profit</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Pending Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingPayments}</div>
              <p className="text-yellow-100 text-xs">Awaiting processing</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTransactions}</div>
              <p className="text-purple-100 text-xs">All platform transactions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Active Subscriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeSubscriptions}</div>
              <p className="text-indigo-100 text-xs">Currently active</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              User Billing Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Account Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="master">Master</SelectItem>
                  <SelectItem value="slave">Slave</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">
                      <Button variant="ghost" onClick={() => handleSort("name")} className="font-semibold">
                        User
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left p-3">Type</th>
                    <th className="text-left p-3">
                      <Button variant="ghost" onClick={() => handleSort("totalPaid")} className="font-semibold">
                        Total Amount
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">
                      <Button variant="ghost" onClick={() => handleSort("lastPayment")} className="font-semibold">
                        Last Payment
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <Badge variant={user.type === "Master" ? "default" : "secondary"}>{user.type}</Badge>
                      </td>
                      <td className="p-3">
                        <div>
                          <div className="font-medium">
                            {user.type === "Master"
                              ? `${formatCurrency(user.totalReceived)} received`
                              : `${formatCurrency(user.totalPaid)} paid`}
                          </div>
                          {user.type === "Master" && (
                            <div className="text-sm text-gray-500">{formatCurrency(user.totalPaid)} earned</div>
                          )}
                        </div>
                      </td>
                      <td className="p-3">{getStatusBadge(user.status)}</td>
                      <td className="p-3 text-sm text-gray-500">{user.lastPayment}</td>
                      <td className="p-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openUserModal(user)}
                          className="flex items-center gap-2"
                        >
                          <Eye className="h-4 w-4" />
                          View Payments
                        </Button>
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
                    First
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
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
                    onClick={() => setCurrentPage(currentPage + 1)}
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
                    Last
                  </Button>
                </div>

                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{" "}
                  {filteredUsers.length} entries
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Payment History Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment History - {selectedUser?.name}
              </DialogTitle>
            </DialogHeader>

            {selectedUser && (
              <div className="space-y-4">
                {/* User Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Account Type</div>
                    <div className="font-medium">{selectedUser.type}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      {selectedUser.type === "Master" ? "Total Received" : "Total Paid"}
                    </div>
                    <div className="font-medium">
                      {formatCurrency(
                        selectedUser.type === "Master" ? selectedUser.totalReceived : selectedUser.totalPaid,
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Status</div>
                    <div>{getStatusBadge(selectedUser.status)}</div>
                  </div>
                </div>

                {/* Transaction Filters */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search transactions..."
                        value={transactionSearch}
                        onChange={(e) => setTransactionSearch(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={transactionTypeFilter} onValueChange={setTransactionTypeFilter}>
                    <SelectTrigger className="w-full md:w-40">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="subscription">Subscription</SelectItem>
                      <SelectItem value="payout">Payout</SelectItem>
                      <SelectItem value="commission">Commission</SelectItem>
                      <SelectItem value="deposit">Deposit</SelectItem>
                      <SelectItem value="withdrawal">Withdrawal</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={transactionStatusFilter} onValueChange={setTransactionStatusFilter}>
                    <SelectTrigger className="w-full md:w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="refunded">Refunded</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Transactions Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Date</th>
                        <th className="text-left p-3 font-semibold">Type</th>
                        <th className="text-left p-3 font-semibold">Amount</th>
                        <th className="text-left p-3 font-semibold">Status</th>
                        <th className="text-left p-3 font-semibold">Method</th>
                        <th className="text-left p-3 font-semibold">Reference</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.map((transaction: any) => (
                        <tr key={transaction.id} className="border-b hover:bg-gray-50">
                          <td className="p-3 text-sm">{transaction.date}</td>
                          <td className="p-3">
                            <Badge variant="outline">{transaction.type}</Badge>
                          </td>
                          <td className="p-3 font-medium">{formatCurrency(transaction.amount)}</td>
                          <td className="p-3">{getStatusBadge(transaction.status)}</td>
                          <td className="p-3 text-sm">{transaction.method}</td>
                          <td className="p-3 text-sm font-mono">{transaction.reference}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {filteredTransactions.length === 0 && (
                    <div className="text-center py-8 text-gray-500">No transactions found matching your criteria</div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
