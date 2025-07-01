"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Target,
  Award,
  Search,
  ArrowUpRight,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

// Mock data for platform analytics
const platformStats = {
  totalUsers: 2847,
  activeMasters: 156,
  totalRevenue: 4250000,
  successRate: 78.5,
  totalTrades: 15420,
  avgMonthlyProfit: 125000,
  userGrowth: 12.5,
  revenueGrowth: 18.3,
  masterGrowth: 8.7,
  tradeGrowth: 22.1,
}

// Mock revenue trend data
const revenueData = [
  { month: "Jan", revenue: 2800000, users: 1850, trades: 8500 },
  { month: "Feb", revenue: 3200000, users: 2100, trades: 9800 },
  { month: "Mar", revenue: 3600000, users: 2350, trades: 11200 },
  { month: "Apr", revenue: 3900000, users: 2580, trades: 12800 },
  { month: "May", revenue: 4100000, users: 2720, trades: 14100 },
  { month: "Jun", revenue: 4250000, users: 2847, trades: 15420 },
]

// Mock master performance data
const masterPerformanceData = [
  {
    id: 1,
    name: "Adebayo Ogundimu",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Forex Trading",
    winRate: 89.2,
    totalTrades: 1247,
    monthlyProfit: 450000,
    followers: 234,
    riskScore: "Low",
    revenueContribution: 285000,
    joinDate: "2023-08-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Chioma Nwankwo",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Crypto Trading",
    winRate: 85.7,
    totalTrades: 892,
    monthlyProfit: 380000,
    followers: 189,
    riskScore: "Medium",
    revenueContribution: 245000,
    joinDate: "2023-09-22",
    status: "Active",
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Stock Trading",
    winRate: 82.4,
    totalTrades: 756,
    monthlyProfit: 320000,
    followers: 156,
    riskScore: "Low",
    revenueContribution: 198000,
    joinDate: "2023-07-10",
    status: "Active",
  },
  {
    id: 4,
    name: "Fatima Abdullahi",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Commodities",
    winRate: 79.8,
    totalTrades: 634,
    monthlyProfit: 275000,
    followers: 142,
    riskScore: "Medium",
    revenueContribution: 165000,
    joinDate: "2023-10-05",
    status: "Active",
  },
  {
    id: 5,
    name: "Emeka Okafor",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Forex Trading",
    winRate: 87.1,
    totalTrades: 923,
    monthlyProfit: 395000,
    followers: 201,
    riskScore: "Low",
    revenueContribution: 225000,
    joinDate: "2023-06-18",
    status: "Active",
  },
  {
    id: 6,
    name: "Aisha Garba",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Crypto Trading",
    winRate: 83.6,
    totalTrades: 567,
    monthlyProfit: 310000,
    followers: 178,
    riskScore: "Medium",
    revenueContribution: 185000,
    joinDate: "2023-11-12",
    status: "Active",
  },
  {
    id: 7,
    name: "Olumide Adeyemi",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Stock Trading",
    winRate: 81.2,
    totalTrades: 445,
    monthlyProfit: 265000,
    followers: 134,
    riskScore: "Low",
    revenueContribution: 155000,
    joinDate: "2023-12-03",
    status: "Active",
  },
  {
    id: 8,
    name: "Kemi Oladele",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Forex Trading",
    winRate: 86.4,
    totalTrades: 712,
    monthlyProfit: 340000,
    followers: 167,
    riskScore: "Low",
    revenueContribution: 195000,
    joinDate: "2023-05-28",
    status: "Active",
  },
]

// Mock individual master analytics data
const individualMasterData = {
  performanceHistory: [
    { month: "Jan", profit: 380000, winRate: 85, trades: 145 },
    { month: "Feb", profit: 420000, winRate: 87, trades: 162 },
    { month: "Mar", profit: 395000, winRate: 84, trades: 158 },
    { month: "Apr", profit: 445000, winRate: 89, trades: 171 },
    { month: "May", profit: 465000, winRate: 91, trades: 183 },
    { month: "Jun", profit: 450000, winRate: 89, trades: 178 },
  ],
  followerGrowth: [
    { month: "Jan", followers: 180 },
    { month: "Feb", followers: 195 },
    { month: "Mar", followers: 208 },
    { month: "Apr", followers: 220 },
    { month: "May", followers: 228 },
    { month: "Jun", followers: 234 },
  ],
  revenueBreakdown: [
    { source: "Subscription Fees", amount: 185000, percentage: 65 },
    { source: "Performance Bonus", amount: 75000, percentage: 26 },
    { source: "Referral Commission", amount: 25000, percentage: 9 },
  ],
}

const COLORS = ["#1544b9", "#3b82f6", "#60a5fa", "#93c5fd"]

export default function AdminAnalytics() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPeriod, setSelectedPeriod] = useState("6months")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [selectedMaster, setSelectedMaster] = useState(null)

  // Filter masters based on search
  const filteredMasters = masterPerformanceData.filter(
    (master) =>
      master.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      master.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Pagination logic
  const totalPages = Math.ceil(filteredMasters.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedMasters = filteredMasters.slice(startIndex, startIndex + itemsPerPage)

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-NG").format(num)
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getRiskColor = (risk) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "High":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Platform Analytics</h1>
            <p className="text-gray-600 mt-1">Monitor platform performance and master trader analytics</p>
          </div>

          <div className="flex items-center gap-4">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Platform Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(platformStats.totalUsers)}</div>
              <div className="flex items-center text-xs mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />+{platformStats.userGrowth}% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4" />
                Active Masters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(platformStats.activeMasters)}</div>
              <div className="flex items-center text-xs mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />+{platformStats.masterGrowth}% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(platformStats.totalRevenue)}</div>
              <div className="flex items-center text-xs mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />+{platformStats.revenueGrowth}% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4" />
                Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.successRate}%</div>
              <div className="flex items-center text-xs mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +2.3% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Total Trades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatNumber(platformStats.totalTrades)}</div>
              <div className="flex items-center text-xs mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />+{platformStats.tradeGrowth}% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Avg Monthly Profit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(platformStats.avgMonthlyProfit)}</div>
              <div className="flex items-center text-xs mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +15.2% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue growth over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`} />
                  <Tooltip formatter={(value) => [formatCurrency(value), "Revenue"]} />
                  <Line type="monotone" dataKey="revenue" stroke="#1544b9" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* User Growth */}
          <Card>
            <CardHeader>
              <CardTitle>User & Trading Growth</CardTitle>
              <CardDescription>User registrations and trading volume trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#3b82f6" name="New Users" />
                  <Bar dataKey="trades" fill="#60a5fa" name="Total Trades" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Master Performance Section */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Master Trader Performance</CardTitle>
                <CardDescription>Individual analytics and performance metrics for all masters</CardDescription>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search masters..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Masters Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Master</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Specialty</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Win Rate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Total Trades</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Monthly Profit</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Followers</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Risk</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Revenue</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedMasters.map((master) => (
                    <tr key={master.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={master.avatar || "/placeholder.svg"} alt={master.name} />
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {getInitials(master.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-gray-900">{master.name}</div>
                            <div className="text-sm text-gray-500">
                              Joined {new Date(master.joinDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {master.specialty}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="text-lg font-semibold text-green-600">{master.winRate}%</div>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium">{formatNumber(master.totalTrades)}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-green-600">{formatCurrency(master.monthlyProfit)}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">{formatNumber(master.followers)}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getRiskColor(master.riskScore)}>{master.riskScore}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium">{formatCurrency(master.revenueContribution)}</div>
                      </td>
                      <td className="py-4 px-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedMaster(master)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-3">
                                <Avatar className="h-12 w-12">
                                  <AvatarImage src={master.avatar || "/placeholder.svg"} alt={master.name} />
                                  <AvatarFallback className="bg-blue-100 text-blue-600">
                                    {getInitials(master.name)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="text-xl font-bold">{master.name}</div>
                                  <div className="text-sm text-gray-500">{master.specialty} Specialist</div>
                                </div>
                              </DialogTitle>
                              <DialogDescription>Detailed analytics and performance metrics</DialogDescription>
                            </DialogHeader>

                            <Tabs defaultValue="overview" className="mt-6">
                              <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="performance">Performance</TabsTrigger>
                                <TabsTrigger value="followers">Followers</TabsTrigger>
                                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                              </TabsList>

                              <TabsContent value="overview" className="space-y-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl font-bold text-green-600">{master.winRate}%</div>
                                      <div className="text-sm text-gray-600">Win Rate</div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl font-bold">{formatNumber(master.totalTrades)}</div>
                                      <div className="text-sm text-gray-600">Total Trades</div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl font-bold">{formatNumber(master.followers)}</div>
                                      <div className="text-sm text-gray-600">Followers</div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl font-bold text-green-600">
                                        {formatCurrency(master.monthlyProfit)}
                                      </div>
                                      <div className="text-sm text-gray-600">Monthly Profit</div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </TabsContent>

                              <TabsContent value="performance" className="space-y-6">
                                <Card>
                                  <CardHeader>
                                    <CardTitle>Performance History</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                      <LineChart data={individualMasterData.performanceHistory}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="profit" stroke="#1544b9" name="Profit (₦)" />
                                        <Line type="monotone" dataKey="winRate" stroke="#10b981" name="Win Rate (%)" />
                                      </LineChart>
                                    </ResponsiveContainer>
                                  </CardContent>
                                </Card>
                              </TabsContent>

                              <TabsContent value="followers" className="space-y-6">
                                <Card>
                                  <CardHeader>
                                    <CardTitle>Follower Growth</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                      <LineChart data={individualMasterData.followerGrowth}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="followers" stroke="#3b82f6" strokeWidth={3} />
                                      </LineChart>
                                    </ResponsiveContainer>
                                  </CardContent>
                                </Card>
                              </TabsContent>

                              <TabsContent value="revenue" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <Card>
                                    <CardHeader>
                                      <CardTitle>Revenue Breakdown</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <ResponsiveContainer width="100%" height={250}>
                                        <PieChart>
                                          <Pie
                                            data={individualMasterData.revenueBreakdown}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="amount"
                                            label={({ source, percentage }) => `${source}: ${percentage}%`}
                                          >
                                            {individualMasterData.revenueBreakdown.map((entry, index) => (
                                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                          </Pie>
                                          <Tooltip formatter={(value) => formatCurrency(value)} />
                                        </PieChart>
                                      </ResponsiveContainer>
                                    </CardContent>
                                  </Card>

                                  <Card>
                                    <CardHeader>
                                      <CardTitle>Revenue Details</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="space-y-4">
                                        {individualMasterData.revenueBreakdown.map((item, index) => (
                                          <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                          >
                                            <div className="flex items-center gap-3">
                                              <div
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                              />
                                              <span className="font-medium">{item.source}</span>
                                            </div>
                                            <div className="text-right">
                                              <div className="font-bold">{formatCurrency(item.amount)}</div>
                                              <div className="text-sm text-gray-500">{item.percentage}%</div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </TabsContent>
                            </Tabs>
                          </DialogContent>
                        </Dialog>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Show</span>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number.parseInt(value))
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
                  <span className="text-sm text-gray-600">entries</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                    <ChevronsLeft className="h-4 w-4" />
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
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredMasters.length)} of{" "}
                  {filteredMasters.length} masters
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
