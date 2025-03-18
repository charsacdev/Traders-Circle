import { Calendar, Download, LineChart, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Platform Analytics</h1>
        <p className="text-muted-foreground">Comprehensive analytics and insights for the platform</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Select defaultValue="30days">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Custom Range
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,240</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,215</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+8.3% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.8%</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+2.1% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Subscription Value</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$29.95</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+$1.25 from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <ScrollArea className="w-full" orientation="horizontal">
        <Tabs defaultValue="overview" className="min-w-max">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">User Analytics</TabsTrigger>
            <TabsTrigger value="trading">Trading Analytics</TabsTrigger>
            <TabsTrigger value="retention">Retention</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Platform Overview</CardTitle>
                <CardDescription>Key metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="h-[300px] w-full bg-muted rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-muted-foreground">Growth Chart Placeholder</div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">User Distribution</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Slave Accounts</span>
                          <span className="font-medium">14,995 (98.4%)</span>
                        </div>
                        <Progress value={98.4} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Master Accounts</span>
                          <span className="font-medium">245 (1.6%)</span>
                        </div>
                        <Progress value={1.6} className="h-2 bg-muted" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Subscription Tiers</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">$10-$20/month</span>
                          <span className="font-medium">1,265 (30%)</span>
                        </div>
                        <Progress value={30} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">$21-$30/month</span>
                          <span className="font-medium">2,320 (55%)</span>
                        </div>
                        <Progress value={55} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">$31-$50/month</span>
                          <span className="font-medium">630 (15%)</span>
                        </div>
                        <Progress value={15} className="h-2 bg-muted" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">User Growth Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+12.5%</div>
                        <p className="text-xs text-muted-foreground">Month over month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Avg. Session Duration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">18m 42s</div>
                        <p className="text-xs text-muted-foreground">+2m 15s from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Bounce Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24.8%</div>
                        <p className="text-xs text-muted-foreground">-2.1% from last month</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Analytics</CardTitle>
                <CardDescription>Detailed user statistics and demographics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="h-[300px] w-full bg-muted rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-muted-foreground">User Growth Chart Placeholder</div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Geographic Distribution</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">North America</span>
                          <span className="font-medium">6,850 (45%)</span>
                        </div>
                        <Progress value={45} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Europe</span>
                          <span className="font-medium">4,570 (30%)</span>
                        </div>
                        <Progress value={30} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Asia</span>
                          <span className="font-medium">2,290 (15%)</span>
                        </div>
                        <Progress value={15} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Other</span>
                          <span className="font-medium">1,530 (10%)</span>
                        </div>
                        <Progress value={10} className="h-2 bg-muted" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">User Acquisition</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Organic Search</span>
                          <span className="font-medium">5,334 (35%)</span>
                        </div>
                        <Progress value={35} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Direct</span>
                          <span className="font-medium">3,810 (25%)</span>
                        </div>
                        <Progress value={25} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Referral</span>
                          <span className="font-medium">3,048 (20%)</span>
                        </div>
                        <Progress value={20} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Social Media</span>
                          <span className="font-medium">1,524 (10%)</span>
                        </div>
                        <Progress value={10} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Paid Ads</span>
                          <span className="font-medium">1,524 (10%)</span>
                        </div>
                        <Progress value={10} className="h-2 bg-muted" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">New Users (30d)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1,845</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+15.2% from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Active Users (DAU)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">8,450</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+5.8% from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Avg. Devices per User</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1.8</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+0.2 from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trading" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Trading Analytics</CardTitle>
                <CardDescription>Platform-wide trading performance and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="h-[300px] w-full bg-muted rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-muted-foreground">Trading Volume Chart Placeholder</div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Trading Volume by Instrument</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Forex</span>
                          <span className="font-medium">$125M (50%)</span>
                        </div>
                        <Progress value={50} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Crypto</span>
                          <span className="font-medium">$75M (30%)</span>
                        </div>
                        <Progress value={30} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Stocks</span>
                          <span className="font-medium">$37.5M (15%)</span>
                        </div>
                        <Progress value={15} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Commodities</span>
                          <span className="font-medium">$12.5M (5%)</span>
                        </div>
                        <Progress value={5} className="h-2 bg-muted" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Win Rate Distribution</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">90-100%</span>
                          <span className="font-medium">42 Masters (17.1%)</span>
                        </div>
                        <Progress value={17.1} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">85-89%</span>
                          <span className="font-medium">98 Masters (40%)</span>
                        </div>
                        <Progress value={40} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">80-84%</span>
                          <span className="font-medium">105 Masters (42.9%)</span>
                        </div>
                        <Progress value={42.9} className="h-2 bg-muted" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Total Trades (30d)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1.2M</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+12.3% from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Platform Win Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">92.2%</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+1.4% from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Avg. Trade Size</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$1,250</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+$125 from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="retention" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Retention Analytics</CardTitle>
                <CardDescription>User retention and churn metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="h-[300px] w-full bg-muted rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-muted-foreground">Retention Cohort Chart Placeholder</div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Retention by Cohort</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">30-Day Retention</span>
                          <span className="font-medium">92.5%</span>
                        </div>
                        <Progress value={92.5} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">60-Day Retention</span>
                          <span className="font-medium">88.3%</span>
                        </div>
                        <Progress value={88.3} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">90-Day Retention</span>
                          <span className="font-medium">84.7%</span>
                        </div>
                        <Progress value={84.7} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">180-Day Retention</span>
                          <span className="font-medium">76.2%</span>
                        </div>
                        <Progress value={76.2} className="h-2 bg-muted" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Churn Analysis</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Monthly Churn Rate</span>
                          <span className="font-medium">2.8%</span>
                        </div>
                        <Progress value={2.8} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-4 pt-4">
                        <h4 className="text-sm font-medium">Churn Reasons</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Poor Performance</span>
                            <span className="font-medium">42%</span>
                          </div>
                          <Progress value={42} className="h-2 bg-muted" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Cost</span>
                            <span className="font-medium">28%</span>
                          </div>
                          <Progress value={28} className="h-2 bg-muted" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Platform Issues</span>
                            <span className="font-medium">18%</span>
                          </div>
                          <Progress value={18} className="h-2 bg-muted" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Other</span>
                            <span className="font-medium">12%</span>
                          </div>
                          <Progress value={12} className="h-2 bg-muted" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Lifetime Value (LTV)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$285</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+$15 from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Avg. Subscription Length</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">9.5 months</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+0.8 months from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Reactivation Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12.4%</div>
                        <div className="flex items-center text-xs text-green-500 mt-1">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          <span>+1.2% from previous period</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
}

