"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, DollarSign, Activity, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function MasterFollowersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("joinDate")
  const [filterStatus, setFilterStatus] = useState("all")

  const followersPerPage = 10

  // Mock follower data
  const followers = [
    {
      id: 1,
      name: "Adebayo Johnson",
      email: "adebayo@email.com",
      joinDate: "2024-01-15",
      status: "Active",
      tradesCopied: 145,
      successRate: 78,
      totalEarnings: 2850,
      location: "Lagos, Nigeria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Fatima Abdullahi",
      email: "fatima@email.com",
      joinDate: "2024-02-03",
      status: "Active",
      tradesCopied: 89,
      successRate: 82,
      totalEarnings: 1920,
      location: "Abuja, Nigeria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Chinedu Okafor",
      email: "chinedu@email.com",
      joinDate: "2024-01-28",
      status: "Inactive",
      tradesCopied: 67,
      successRate: 65,
      totalEarnings: 1340,
      location: "Port Harcourt, Nigeria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Aisha Mohammed",
      email: "aisha@email.com",
      joinDate: "2024-03-10",
      status: "Active",
      tradesCopied: 123,
      successRate: 85,
      totalEarnings: 2450,
      location: "Kano, Nigeria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Emeka Nwankwo",
      email: "emeka@email.com",
      joinDate: "2024-02-20",
      status: "Active",
      tradesCopied: 98,
      successRate: 73,
      totalEarnings: 1875,
      location: "Enugu, Nigeria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Kemi Adebisi",
      email: "kemi@email.com",
      joinDate: "2024-03-05",
      status: "Active",
      tradesCopied: 156,
      successRate: 88,
      totalEarnings: 3120,
      location: "Ibadan, Nigeria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Ibrahim Musa",
      email: "ibrahim@email.com",
      joinDate: "2024-01-20",
      status: "Inactive",
      tradesCopied: 45,
      successRate: 62,
      totalEarnings: 890,
      location: "Kaduna, Nigeria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      name: "Grace Okoro",
      email: "grace@email.com",
      joinDate: "2024-02-14",
      status: "Active",
      tradesCopied: 112,
      successRate: 79,
      totalEarnings: 2240,
      location: "Owerri, Nigeria",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Filter and search logic
  const filteredFollowers = followers.filter((follower) => {
    const matchesSearch =
      follower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      follower.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || follower.status.toLowerCase() === filterStatus.toLowerCase()
    return matchesSearch && matchesFilter
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredFollowers.length / followersPerPage)
  const startIndex = (currentPage - 1) * followersPerPage
  const paginatedFollowers = filteredFollowers.slice(startIndex, startIndex + followersPerPage)

  // Calculate totals
  const totalFollowers = followers.length
  const activeFollowers = followers.filter((f) => f.status === "Active").length
  const totalEarnings = followers.reduce((sum, f) => sum + f.totalEarnings, 0)
  const avgSuccessRate = Math.round(followers.reduce((sum, f) => sum + f.successRate, 0) / followers.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          My Followers
        </h1>
        <p className="text-gray-600">Manage and track your follower statistics and performance</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Total Followers</CardTitle>
            <Users className="h-4 w-4 opacity-90" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFollowers}</div>
            <p className="text-xs opacity-90">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Active Followers</CardTitle>
            <Activity className="h-4 w-4 opacity-90" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeFollowers}</div>
            <p className="text-xs opacity-90">{Math.round((activeFollowers / totalFollowers) * 100)}% active rate</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 opacity-90" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
            <p className="text-xs opacity-90">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Avg Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 opacity-90" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgSuccessRate}%</div>
            <p className="text-xs opacity-90">+3% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Followers Management */}
      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-xl font-semibold">Follower Management</CardTitle>

            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search followers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Followers Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Follower</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Trades Copied</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Success Rate</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Earnings</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Join Date</th>
                </tr>
              </thead>
              <tbody>
                {paginatedFollowers.map((follower) => (
                  <tr key={follower.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={follower.avatar || "/placeholder.svg"}
                          alt={follower.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{follower.name}</div>
                          <div className="text-sm text-gray-500">{follower.email}</div>
                          <div className="text-xs text-gray-400">{follower.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={follower.status === "Active" ? "default" : "secondary"}
                        className={
                          follower.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }
                      >
                        {follower.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">{follower.tradesCopied}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`font-medium ${follower.successRate >= 80 ? "text-green-600" : follower.successRate >= 70 ? "text-yellow-600" : "text-red-600"}`}
                      >
                        {follower.successRate}%
                      </span>
                    </td>
                    <td className="py-4 px-4 font-medium text-green-600">${follower.totalEarnings}</td>
                    <td className="py-4 px-4 text-gray-600">{new Date(follower.joinDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(startIndex + followersPerPage, filteredFollowers.length)} of{" "}
              {filteredFollowers.length} followers
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center space-x-1"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>

              <div className="flex space-x-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
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
                className="flex items-center space-x-1"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
