import { ArrowUpRight, CreditCard, DollarSign, LineChart, TrendingDown, TrendingUp, Users, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SlaveAccountDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Enhanced Header Section */}
      <div className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-white p-4 md:p-8 rounded-b-3xl shadow-2xl mb-4 md:mb-8">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">Welcome Back, John! 👋</h1>
          <p className="text-blue-100 text-sm md:text-lg">Here's your trading performance overview</p>
        </div>
      </div>

      <div className="px-4 md:px-8 space-y-6 md:space-y-8">
        {/* Enhanced Stats Cards */}
        <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-medium text-green-800">Account Balance</CardTitle>
              <div className="p-1 md:p-2 bg-green-500 rounded-full">
                <DollarSign className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-3xl font-bold text-green-900">$12,546.80</div>
              <div className="flex items-center text-xs text-green-600 mt-1 md:mt-2">
                <TrendingUp className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                <span className="font-semibold">+12.5%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-medium text-blue-800">Active Subscriptions</CardTitle>
              <div className="p-1 md:p-2 bg-blue-500 rounded-full">
                <Users className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-3xl font-bold text-blue-900">3</div>
              <div className="text-xs text-blue-600 mt-1 md:mt-2 font-semibold">
                <span>$85/month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-medium text-purple-800">Total Trades</CardTitle>
              <div className="p-1 md:p-2 bg-purple-500 rounded-full">
                <LineChart className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-3xl font-bold text-purple-900">245</div>
              <div className="flex items-center text-xs text-purple-600 mt-1 md:mt-2">
                <TrendingUp className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                <span className="font-semibold">+18.2%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-medium text-orange-800">Win Rate</CardTitle>
              <div className="p-1 md:p-2 bg-orange-500 rounded-full">
                <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-3xl font-bold text-orange-900">87.2%</div>
              <div className="flex items-center text-xs text-orange-600 mt-1 md:mt-2">
                <TrendingUp className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                <span className="font-semibold">+2.4%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tabs Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
          <Tabs defaultValue="trades" className="p-4 md:p-6">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-xl">
              <TabsTrigger
                value="trades"
                className="rounded-lg font-semibold data-[state=active]:bg-white data-[state=active]:shadow-md text-xs md:text-sm"
              >
                Recent Trades
              </TabsTrigger>
              <TabsTrigger
                value="masters"
                className="rounded-lg font-semibold data-[state=active]:bg-white data-[state=active]:shadow-md text-xs md:text-sm"
              >
                My Masters
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trades" className="space-y-4 md:space-y-6 mt-4 md:mt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Recent Trades</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Your last 5 trades across all connected master accounts
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-purple-600 shadow-lg w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>

              <div className="space-y-3 md:space-y-4">
                {/* Enhanced Trade Items - Mobile Optimized */}
                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border border-green-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg">
                        <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-base md:text-lg font-bold text-gray-900">EUR/USD</div>
                        <div className="text-xs md:text-sm text-gray-600">Via Alex Morgan</div>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-xl md:text-2xl font-bold text-green-600">+$124.30</div>
                      <div className="text-xs md:text-sm text-gray-500">Today, 10:45 AM</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border border-green-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg">
                        <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-base md:text-lg font-bold text-gray-900">BTC/USD</div>
                        <div className="text-xs md:text-sm text-gray-600">Via Sarah Chen</div>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-xl md:text-2xl font-bold text-green-600">+$350.00</div>
                      <div className="text-xs md:text-sm text-gray-500">Today, 9:32 AM</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 via-rose-50 to-red-50 border border-red-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-rose-500 shadow-lg">
                        <TrendingDown className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-base md:text-lg font-bold text-gray-900">Gold</div>
                        <div className="text-xs md:text-sm text-gray-600">Via Michael Rodriguez</div>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-xl md:text-2xl font-bold text-red-600">-$78.50</div>
                      <div className="text-xs md:text-sm text-gray-500">Yesterday, 3:15 PM</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border border-green-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg">
                        <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-base md:text-lg font-bold text-gray-900">USD/JPY</div>
                        <div className="text-xs md:text-sm text-gray-600">Via Alex Morgan</div>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-xl md:text-2xl font-bold text-green-600">+$92.75</div>
                      <div className="text-xs md:text-sm text-gray-500">Yesterday, 1:20 PM</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border border-green-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg">
                        <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-base md:text-lg font-bold text-gray-900">ETH/USD</div>
                        <div className="text-xs md:text-sm text-gray-600">Via Sarah Chen</div>
                      </div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-xl md:text-2xl font-bold text-green-600">+$215.40</div>
                      <div className="text-xs md:text-sm text-gray-500">Yesterday, 11:05 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
                <div className="text-xs md:text-sm text-gray-600 text-center sm:text-left">
                  Showing 1-5 of 245 trades
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled className="text-xs md:text-sm">
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    <Button variant="default" size="sm" className="w-8 h-8 p-0 text-xs">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-xs">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-xs">
                      3
                    </Button>
                    <span className="px-1 md:px-2 text-gray-400 text-xs">...</span>
                    <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-xs">
                      49
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs md:text-sm">
                    Next
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="masters" className="space-y-4 md:space-y-6 mt-4 md:mt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">My Master Accounts</h3>
                  <p className="text-sm md:text-base text-gray-600">Your currently active subscriptions</p>
                </div>
                <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-purple-600 shadow-lg w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Find More Masters
                </Button>
              </div>

              <div className="space-y-4 md:space-y-6">
                {/* Enhanced Master Cards - Mobile Optimized */}
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <Avatar className="h-12 w-12 md:h-16 md:w-16 border-4 border-white shadow-lg">
                        <AvatarImage src="/placeholder.svg?height=64&width=64" />
                        <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-lg md:text-xl font-bold">
                          AM
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-lg md:text-xl font-bold text-gray-900">Alex Morgan</p>
                        <p className="text-sm md:text-base text-gray-600">Forex Specialist</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 text-xs md:text-sm font-semibold">
                        94% Win Rate
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-2 border-blue-300 hover:bg-blue-50 w-full sm:w-auto"
                      >
                        View Profile
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Monthly Performance</span>
                      <span className="font-bold text-green-600">+18.5%</span>
                    </div>
                    <Progress value={85} className="h-2 md:h-3 bg-gray-200" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Subscription</span>
                      <span className="font-bold text-gray-900">$30/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="grid gap-4 md:gap-6 lg:grid-cols-7">
          <Card className="lg:col-span-4 bg-gradient-to-br from-purple-50 to-indigo-100 border-purple-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl font-bold text-purple-900">Performance Overview</CardTitle>
              <CardDescription className="text-sm md:text-base text-purple-700">
                Your account performance over the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] md:h-[300px] w-full bg-gradient-to-br from-purple-100 to-indigo-200 rounded-xl md:rounded-2xl relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LineChart className="h-16 w-16 md:h-32 md:w-32 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg md:text-2xl font-bold text-blue-900">Connected Accounts</CardTitle>
              <CardDescription className="text-sm md:text-base text-blue-700">
                Your MT5 accounts linked to the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl md:rounded-2xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-3 md:p-4 shadow-lg">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="p-2 md:p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg">
                      <CreditCard className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-bold text-gray-900">Primary MT5 Account</p>
                      <p className="text-xs md:text-sm text-gray-600">ID: 12345678</p>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 text-xs font-semibold w-fit">
                    Active
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl md:rounded-2xl border-2 border-gray-200 bg-gradient-to-r from-gray-50 to-slate-50 p-3 md:p-4 shadow-lg">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="p-2 md:p-3 bg-gradient-to-r from-gray-400 to-slate-500 rounded-full shadow-lg">
                      <CreditCard className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-bold text-gray-900">Secondary MT5 Account</p>
                      <p className="text-xs md:text-sm text-gray-600">ID: 87654321</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-gray-400 text-gray-600 text-xs font-semibold w-fit">
                    Inactive
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-2 border-blue-300 hover:bg-blue-50 font-semibold text-sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                Connect New Account
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
