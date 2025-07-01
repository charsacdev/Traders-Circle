"use client"

import { useState } from "react"
import { ArrowUpRight, TrendingUp, Users, Target, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function MasterPerformancePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("6months")

  // Sample performance data
  const performanceData = {
    totalProfit: 45250.75,
    profitChange: 18.5,
    winRate: 94.2,
    totalTrades: 3450,
    activeFollowers: 1240,
    followerGrowth: 15.2,
    maxDrawdown: 8.5,
    sharpeRatio: 2.34,
    avgTradeDuration: "2.5 hours",
    bestMonth: "December 2023",
    worstMonth: "August 2023",
  }

  const monthlyData = [
    { month: "Jul", profit: 3200, trades: 45, winRate: 91.1 },
    { month: "Aug", profit: -850, trades: 38, winRate: 86.8 },
    { month: "Sep", profit: 4100, trades: 52, winRate: 94.2 },
    { month: "Oct", profit: 5200, trades: 48, winRate: 95.8 },
    { month: "Nov", profit: 3800, trades: 41, winRate: 92.7 },
    { month: "Dec", profit: 6500, trades: 55, winRate: 96.4 },
  ]

  const tradingPairs = [
    { pair: "EUR/USD", trades: 450, profit: 12500, winRate: 95.6 },
    { pair: "GBP/USD", trades: 380, profit: 8900, winRate: 92.1 },
    { pair: "USD/JPY", trades: 320, profit: 7200, winRate: 90.6 },
    { pair: "BTC/USD", trades: 280, profit: 15600, winRate: 89.3 },
    { pair: "Gold", trades: 250, profit: 5800, winRate: 88.8 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="space-y-8 p-6">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Performance Analytics</h1>
          <p className="text-blue-100 text-lg">
            Comprehensive overview of your trading performance and follower analytics
          </p>
        </div>

        {/* Performance Overview Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Total Profit</CardTitle>
              <div className="p-2 bg-green-200 rounded-full">
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-900">${performanceData.totalProfit.toLocaleString()}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+{performanceData.profitChange}% this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">Win Rate</CardTitle>
              <div className="p-2 bg-blue-200 rounded-full">
                <Target className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900">{performanceData.winRate}%</div>
              <Progress value={performanceData.winRate} className="mt-2 h-2" />
              <p className="text-xs text-blue-600 mt-1">Excellent performance</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">Total Trades</CardTitle>
              <div className="p-2 bg-purple-200 rounded-full">
                <BarChart3 className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-900">{performanceData.totalTrades.toLocaleString()}</div>
              <p className="text-xs text-purple-600 mt-1">Across all markets</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-800">Active Followers</CardTitle>
              <div className="p-2 bg-orange-200 rounded-full">
                <Users className="h-4 w-4 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-900">
                {performanceData.activeFollowers.toLocaleString()}
              </div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+{performanceData.followerGrowth}% growth</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
            <CardTitle className="text-2xl font-bold text-gray-800">Monthly Performance</CardTitle>
            <CardDescription className="text-gray-600">Profit/Loss breakdown over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {monthlyData.map((month, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 text-center font-semibold text-gray-700">{month.month}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Profit/Loss</span>
                        <span className={`font-bold ${month.profit >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {month.profit >= 0 ? "+" : ""}${month.profit.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${month.profit >= 0 ? "bg-green-500" : "bg-red-500"}`}
                          style={{ width: `${Math.abs(month.profit) / 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-sm text-gray-600">{month.trades} trades</div>
                    <div className="text-sm font-medium text-gray-800">{month.winRate}% win rate</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trading Pairs Performance & Risk Metrics */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
              <CardTitle className="text-2xl font-bold text-gray-800">Top Trading Pairs</CardTitle>
              <CardDescription className="text-gray-600">Performance breakdown by trading instruments</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {tradingPairs.map((pair, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 text-center">
                        <Badge variant="outline" className="font-semibold">
                          {pair.pair}
                        </Badge>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">${pair.profit.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">{pair.trades} trades</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-600">{pair.winRate}%</div>
                      <div className="text-sm text-gray-600">win rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
              <CardTitle className="text-2xl font-bold text-gray-800">Risk Metrics</CardTitle>
              <CardDescription className="text-gray-600">Risk assessment and performance indicators</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-100">
                  <div>
                    <div className="font-semibold text-gray-900">Maximum Drawdown</div>
                    <div className="text-sm text-gray-600">Largest peak-to-trough decline</div>
                  </div>
                  <div className="text-2xl font-bold text-red-600">{performanceData.maxDrawdown}%</div>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100">
                  <div>
                    <div className="font-semibold text-gray-900">Sharpe Ratio</div>
                    <div className="text-sm text-gray-600">Risk-adjusted return measure</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{performanceData.sharpeRatio}</div>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100">
                  <div>
                    <div className="font-semibold text-gray-900">Avg Trade Duration</div>
                    <div className="text-sm text-gray-600">Average time per trade</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{performanceData.avgTradeDuration}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 text-center">
                    <div className="font-semibold text-gray-900">Best Month</div>
                    <div className="text-sm text-green-600 mt-1">{performanceData.bestMonth}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-100 text-center">
                    <div className="font-semibold text-gray-900">Worst Month</div>
                    <div className="text-sm text-red-600 mt-1">{performanceData.worstMonth}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Follower Analytics */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-xl">
            <CardTitle className="text-2xl font-bold text-gray-800">Follower Analytics</CardTitle>
            <CardDescription className="text-gray-600">
              Insights about your followers and their copying behavior
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">87%</div>
                <div className="text-sm font-medium text-blue-800">Copy Success Rate</div>
                <div className="text-xs text-blue-600 mt-1">Followers profiting from copies</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 text-center">
                <div className="text-3xl font-bold text-green-900 mb-2">$2.4M</div>
                <div className="text-sm font-medium text-green-800">Total Assets Copied</div>
                <div className="text-xs text-green-600 mt-1">Combined follower capital</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 text-center">
                <div className="text-3xl font-bold text-purple-900 mb-2">4.8</div>
                <div className="text-sm font-medium text-purple-800">Average Rating</div>
                <div className="text-xs text-purple-600 mt-1">From 342 reviews</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
