"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  TrendingUp,
  DollarSign,
  Wallet,
  ArrowDownToLine,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Smartphone,
  Mail,
  Shield,
  CreditCard,
} from "lucide-react"

// Mock earnings data
const earningsData = [
  {
    id: 1,
    date: "2024-01-15",
    type: "Earnings",
    source: "Follower Fees",
    amount: 450.0,
    status: "Completed",
    followers: 25,
  },
  {
    id: 2,
    date: "2024-01-10",
    type: "Withdrawal",
    source: "Bank Transfer",
    amount: -1200.0,
    status: "Completed",
    followers: null,
  },
  {
    id: 3,
    date: "2024-01-08",
    type: "Earnings",
    source: "Performance Bonus",
    amount: 320.0,
    status: "Completed",
    followers: 18,
  },
  {
    id: 4,
    date: "2024-01-05",
    type: "Earnings",
    source: "Follower Fees",
    amount: 380.0,
    status: "Completed",
    followers: 22,
  },
  {
    id: 5,
    date: "2024-01-03",
    type: "Withdrawal",
    source: "Bank Transfer",
    amount: -800.0,
    status: "Pending",
    followers: null,
  },
  {
    id: 6,
    date: "2023-12-28",
    type: "Earnings",
    source: "Follower Fees",
    amount: 520.0,
    status: "Completed",
    followers: 28,
  },
  {
    id: 7,
    date: "2023-12-25",
    type: "Earnings",
    source: "Performance Bonus",
    amount: 280.0,
    status: "Completed",
    followers: 15,
  },
  {
    id: 8,
    date: "2023-12-20",
    type: "Earnings",
    source: "Follower Fees",
    amount: 410.0,
    status: "Completed",
    followers: 24,
  },
]

export default function EarningsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Withdrawal modal states
  const [showWithdrawModal, setShowWithdrawModal] = useState(false)
  const [withdrawStep, setWithdrawStep] = useState(1)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [selectedBank, setSelectedBank] = useState("")
  const [authMethod, setAuthMethod] = useState("")
  const [authCode, setAuthCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)
  const [transactionId, setTransactionId] = useState("")

  // Filter and search logic
  const filteredData = useMemo(() => {
    return earningsData.filter((item) => {
      const matchesSearch =
        item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = filterType === "All" || item.type === filterType
      return matchesSearch && matchesFilter
    })
  }, [searchTerm, filterType])

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  // Calculate totals
  const totalEarnings = earningsData
    .filter((item) => item.type === "Earnings")
    .reduce((sum, item) => sum + item.amount, 0)

  const totalWithdrawn = Math.abs(
    earningsData
      .filter((item) => item.type === "Withdrawal" && item.status === "Completed")
      .reduce((sum, item) => sum + item.amount, 0),
  )

  const thisMonthEarnings = earningsData
    .filter((item) => item.type === "Earnings" && item.date.startsWith("2024-01"))
    .reduce((sum, item) => sum + item.amount, 0)

  const availableBalance = totalEarnings - totalWithdrawn

  // Mock bank accounts
  const bankAccounts = [
    { id: "1", name: "GTBank - ****1234", bank: "Guaranty Trust Bank" },
    { id: "2", name: "Access Bank - ****5678", bank: "Access Bank" },
    { id: "3", name: "First Bank - ****9012", bank: "First Bank of Nigeria" },
  ]

  // Withdrawal functions
  const handleWithdrawClick = () => {
    setShowWithdrawModal(true)
    setWithdrawStep(1)
    setWithdrawAmount("")
    setSelectedBank("")
    setAuthMethod("")
    setAuthCode("")
    setTransactionId("")
  }

  const handleWithdrawSubmit = async () => {
    if (!withdrawAmount || !selectedBank) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setWithdrawStep(2)
  }

  const handleSendAuthCode = async () => {
    if (!authMethod) return

    setIsLoading(true)
    // Simulate sending auth code
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    // Start cooldown
    setResendCooldown(60)
    const interval = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleVerifyCode = async () => {
    if (authCode.length !== 6) return

    setIsLoading(true)
    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    // Generate transaction ID
    setTransactionId(`TXN${Date.now()}`)
    setWithdrawStep(3)
  }

  const closeModal = () => {
    setShowWithdrawModal(false)
    setWithdrawStep(1)
    setWithdrawAmount("")
    setSelectedBank("")
    setAuthMethod("")
    setAuthCode("")
    setTransactionId("")
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "Failed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Failed</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    return type === "Earnings" ? (
      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Earnings</Badge>
    ) : (
      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Withdrawal</Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header - Left Aligned */}
        <div className="text-left space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Earnings Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">Track your earnings, withdrawals, and financial performance</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-green-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-green-200 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${thisMonthEarnings.toLocaleString()}</div>
              <p className="text-xs text-blue-200">+8% from last month</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Available Balance</CardTitle>
              <Wallet className="h-4 w-4 text-purple-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${availableBalance.toLocaleString()}</div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-purple-200">Ready for withdrawal</p>
                {availableBalance > 0 && (
                  <Button
                    size="sm"
                    onClick={handleWithdrawClick}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs px-3 py-1"
                  >
                    Withdraw
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-100">Total Withdrawn</CardTitle>
              <ArrowDownToLine className="h-4 w-4 text-orange-200" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalWithdrawn.toLocaleString()}</div>
              <p className="text-xs text-orange-200">Lifetime withdrawals</p>
            </CardContent>
          </Card>
        </div>

        {/* Earnings History */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Earnings History
              </CardTitle>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Earnings">Earnings</SelectItem>
                    <SelectItem value="Withdrawal">Withdrawals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Source</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Followers</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-gray-900">{new Date(item.date).toLocaleDateString()}</td>
                      <td className="py-3 px-4">{getTypeBadge(item.type)}</td>
                      <td className="py-3 px-4 text-gray-700">{item.source}</td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold ${item.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                          {item.amount > 0 ? "+" : ""}${Math.abs(item.amount).toLocaleString()}
                        </span>
                      </td>
                      <td className="py-3 px-4">{getStatusBadge(item.status)}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {item.followers ? `${item.followers} followers` : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Show</span>
                <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-700">entries</span>
              </div>

              <div className="text-sm text-gray-700">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
                {filteredData.length} results
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1
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
                  {totalPages > 5 && (
                    <>
                      <span className="px-2 py-1 text-gray-500">...</span>
                      <Button
                        variant={currentPage === totalPages ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(totalPages)}
                        className="w-8 h-8 p-0"
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Withdrawal Modal */}
      <Dialog open={showWithdrawModal} onOpenChange={setShowWithdrawModal}>
        <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <DialogHeader className="relative">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Withdraw Funds
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={closeModal} className="absolute right-0 top-0 h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    withdrawStep >= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {withdrawStep > step ? <Check className="h-4 w-4" /> : step}
                </div>
                {step < 3 && <div className={`w-12 h-0.5 ${withdrawStep > step ? "bg-blue-600" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Withdrawal Details */}
          {withdrawStep === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="amount" className="text-sm font-medium">
                  Withdrawal Amount
                </Label>
                <div className="relative mt-1">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="pl-10"
                    max={availableBalance}
                    min="10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Available: ${availableBalance.toLocaleString()} • Minimum: $10
                </p>
              </div>

              <div>
                <Label htmlFor="bank" className="text-sm font-medium">
                  Bank Account
                </Label>
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select bank account" />
                  </SelectTrigger>
                  <SelectContent>
                    {bankAccounts.map((account) => (
                      <SelectItem key={account.id} value={account.id}>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          {account.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleWithdrawSubmit}
                disabled={!withdrawAmount || !selectedBank || isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isLoading ? "Processing..." : "Continue"}
              </Button>
            </div>
          )}

          {/* Step 2: Authentication */}
          {withdrawStep === 2 && (
            <div className="space-y-4">
              <div className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold">Security Verification</h3>
                <p className="text-sm text-gray-600">Choose how you'd like to receive your verification code</p>
              </div>

              <div className="space-y-3">
                <div
                  onClick={() => setAuthMethod("sms")}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    authMethod === "sms" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">SMS Verification</p>
                      <p className="text-sm text-gray-600">Send code to +234 *** *** **89</p>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setAuthMethod("email")}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    authMethod === "email" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email Verification</p>
                      <p className="text-sm text-gray-600">Send code to j***@example.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {authMethod && (
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="code" className="text-sm font-medium">
                      Enter 6-digit code
                    </Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="000000"
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      className="text-center text-lg tracking-widest mt-1"
                      maxLength={6}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handleSendAuthCode}
                      disabled={isLoading || resendCooldown > 0}
                      className="flex-1"
                    >
                      {isLoading ? "Sending..." : resendCooldown > 0 ? `Resend (${resendCooldown}s)` : "Send Code"}
                    </Button>
                    <Button
                      onClick={handleVerifyCode}
                      disabled={authCode.length !== 6 || isLoading}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isLoading ? "Verifying..." : "Verify"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Success */}
          {withdrawStep === 3 && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600">Withdrawal Successful!</h3>
                <p className="text-gray-600 mt-2">Your withdrawal request has been processed successfully.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold">${Number.parseFloat(withdrawAmount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bank Account:</span>
                  <span className="font-semibold">{bankAccounts.find((b) => b.id === selectedBank)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-semibold text-blue-600">{transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Time:</span>
                  <span className="font-semibold">1-3 business days</span>
                </div>
              </div>

              <Button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Done
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
