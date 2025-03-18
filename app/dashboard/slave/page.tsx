import { ArrowUpRight, CreditCard, DollarSign, LineChart, TrendingDown, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import ChartComponent from "@/components/chart"

export default function SlaveAccountDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, John! Here's an overview of your trading activity.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,546.80</div>
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
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-muted-foreground mt-1">
              <span>$85/month total</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+18.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.2%</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+2.4% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trades">
        <TabsList>
          <TabsTrigger value="trades">Recent Trades</TabsTrigger>
          <TabsTrigger value="masters">My Masters</TabsTrigger>
        </TabsList>
        <TabsContent value="trades" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
              <CardDescription>Your last 5 trades across all connected master accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full pr-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-[25px_1fr_120px_120px] items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">EUR/USD</span>
                      <span className="text-xs text-muted-foreground">Via Alex Morgan</span>
                    </div>
                    <div className="flex items-center justify-end font-medium text-green-500">+$124.30</div>
                    <div className="flex items-center justify-end text-xs text-muted-foreground">Today, 10:45 AM</div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr_120px_120px] items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">BTC/USD</span>
                      <span className="text-xs text-muted-foreground">Via Sarah Chen</span>
                    </div>
                    <div className="flex items-center justify-end font-medium text-green-500">+$350.00</div>
                    <div className="flex items-center justify-end text-xs text-muted-foreground">Today, 9:32 AM</div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr_120px_120px] items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Gold</span>
                      <span className="text-xs text-muted-foreground">Via Michael Rodriguez</span>
                    </div>
                    <div className="flex items-center justify-end font-medium text-red-500">-$78.50</div>
                    <div className="flex items-center justify-end text-xs text-muted-foreground">
                      Yesterday, 3:15 PM
                    </div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr_120px_120px] items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">USD/JPY</span>
                      <span className="text-xs text-muted-foreground">Via Alex Morgan</span>
                    </div>
                    <div className="flex items-center justify-end font-medium text-green-500">+$92.75</div>
                    <div className="flex items-center justify-end text-xs text-muted-foreground">
                      Yesterday, 1:20 PM
                    </div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr_120px_120px] items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">ETH/USD</span>
                      <span className="text-xs text-muted-foreground">Via Sarah Chen</span>
                    </div>
                    <div className="flex items-center justify-end font-medium text-green-500">+$215.40</div>
                    <div className="flex items-center justify-end text-xs text-muted-foreground">
                      Yesterday, 11:05 AM
                    </div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr_120px_120px] items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">GBP/USD</span>
                      <span className="text-xs text-muted-foreground">Via Alex Morgan</span>
                    </div>
                    <div className="flex items-center justify-end font-medium text-green-500">+$124.30</div>
                    <div className="flex items-center justify-end text-xs text-muted-foreground">2 days ago</div>
                  </div>
                  <div className="grid grid-cols-[25px_1fr_120px_120px] items-center gap-4 rounded-lg border p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">AUD/USD</span>
                      <span className="text-xs text-muted-foreground">Via Alex Morgan</span>
                    </div>
                    <div className="flex items-center justify-end font-medium text-green-500">+$87.20</div>
                    <div className="flex items-center justify-end text-xs text-muted-foreground">2 days ago</div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Trades
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="masters" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Master Accounts</CardTitle>
              <CardDescription>Your currently active subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Alex Morgan</p>
                      <p className="text-sm text-muted-foreground">Forex Specialist</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">94% Win Rate</Badge>
                    <Button variant="outline" size="sm">
                      View
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Monthly Performance</span>
                    <span className="font-medium">+18.5%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-muted" />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subscription</span>
                  <span className="font-medium">$30/month</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">Sarah Chen</p>
                        <p className="text-sm text-muted-foreground">Crypto Trader</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">91% Win Rate</Badge>
                      <Button variant="outline" size="sm">
                        View
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Monthly Performance</span>
                      <span className="font-medium">+22.3%</span>
                    </div>
                    <Progress value={92} className="h-2 bg-muted" />
                  </div>
                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-muted-foreground">Subscription</span>
                    <span className="font-medium">$25/month</span>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">Michael Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Commodities Expert</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">89% Win Rate</Badge>
                      <Button variant="outline" size="sm">
                        View
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Monthly Performance</span>
                      <span className="font-medium">+15.8%</span>
                    </div>
                    <Progress value={78} className="h-2 bg-muted" />
                  </div>
                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-muted-foreground">Subscription</span>
                    <span className="font-medium">$30/month</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Find More Masters</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Your account performance over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartComponent
              type="line"
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                  {
                    label: "Account Balance",
                    data: [10000, 10450, 10980, 11340, 11780, 12100, 12340, 12580, 12780, 12980, 13240, 13546],
                    borderColor: "hsl(var(--primary))",
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    tension: 0.3,
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                  },
                },
              }}
              height={300}
            />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Connected Accounts</CardTitle>
            <CardDescription>Your MT5 accounts linked to the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-4 rounded-lg border p-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Primary MT5 Account</p>
                    <p className="text-xs text-muted-foreground">ID: 12345678</p>
                  </div>
                </div>
                <Badge>Active</Badge>
              </div>
              <div className="flex items-center justify-between space-x-4 rounded-lg border p-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Secondary MT5 Account</p>
                    <p className="text-xs text-muted-foreground">ID: 87654321</p>
                  </div>
                </div>
                <Badge variant="outline">Inactive</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Connect New Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

