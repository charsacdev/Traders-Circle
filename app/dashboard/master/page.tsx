import { DollarSign, LineChart, TrendingDown, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MasterAccountDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Master Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Alex! Here's an overview of your master account performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+15.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$26,350</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+18.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+1.8% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,450</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+12.3% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trades">
        <TabsList>
          <TabsTrigger value="trades">Recent Trades</TabsTrigger>
          <TabsTrigger value="followers">New Followers</TabsTrigger>
        </TabsList>
        <TabsContent value="trades" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
              <CardDescription>Your last 5 trades that were copied by your followers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-[25px_1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">EUR/USD</span>
                    <span className="text-xs text-muted-foreground">Buy @ 1.0845</span>
                  </div>
                  <div className="flex items-center justify-end font-medium text-green-500">+$1,245.30</div>
                  <div className="flex items-center justify-end text-xs text-muted-foreground">Today, 10:45 AM</div>
                </div>
                <div className="grid grid-cols-[25px_1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">BTC/USD</span>
                    <span className="text-xs text-muted-foreground">Buy @ 42,350</span>
                  </div>
                  <div className="flex items-center justify-end font-medium text-green-500">+$3,500.00</div>
                  <div className="flex items-center justify-end text-xs text-muted-foreground">Today, 9:32 AM</div>
                  <div className="flex items-center justify-end">
                    <Badge>1,120 copies</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Gold</span>
                    <span className="text-xs text-muted-foreground">Sell @ 2,345.50</span>
                  </div>
                  <div className="flex items-center justify-end font-medium text-red-500">-$785.00</div>
                  <div className="flex items-center justify-end text-xs text-muted-foreground">Yesterday, 3:15 PM</div>
                  <div className="flex items-center justify-end">
                    <Badge>980 copies</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">USD/JPY</span>
                    <span className="text-xs text-muted-foreground">Buy @ 148.75</span>
                  </div>
                  <div className="flex items-center justify-end font-medium text-green-500">+$927.50</div>
                  <div className="flex items-center justify-end text-xs text-muted-foreground">Yesterday, 1:20 PM</div>
                  <div className="flex items-center justify-end">
                    <Badge>1,050 copies</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">ETH/USD</span>
                    <span className="text-xs text-muted-foreground">Buy @ 2,450.40</span>
                  </div>
                  <div className="flex items-center justify-end font-medium text-green-500">+$2,154.00</div>
                  <div className="flex items-center justify-end text-xs text-muted-foreground">Yesterday, 11:05 AM</div>
                  <div className="flex items-center justify-end">
                    <Badge>1,230 copies</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Trades
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="followers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New Followers</CardTitle>
              <CardDescription>Traders who recently subscribed to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-sm text-muted-foreground">Joined today</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">$30/month</Badge>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>EM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">Emma Miller</p>
                        <p className="text-sm text-muted-foreground">Joined yesterday</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">$30/month</Badge>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">Robert Johnson</p>
                        <p className="text-sm text-muted-foreground">Joined 2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">$30/month</Badge>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>LW</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">Lisa Wong</p>
                        <p className="text-sm text-muted-foreground">Joined 3 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">$30/month</Badge>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>DT</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">David Thompson</p>
                        <p className="text-sm text-muted-foreground">Joined 4 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">$30/month</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Followers
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Your trading performance over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-muted rounded-md relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <LineChart className="h-32 w-32 text-primary/40" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Earnings Breakdown</CardTitle>
            <CardDescription>Your earnings from subscriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Total Subscription Revenue</span>
                  <span className="font-medium">$37,200</span>
                </div>
                <Progress value={100} className="h-2 bg-muted" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Platform Fee (30%)</span>
                  <span className="font-medium">-$11,160</span>
                </div>
                <Progress value={30} className="h-2 bg-muted" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Your Earnings</span>
                  <span className="font-medium">$26,040</span>
                </div>
                <Progress value={70} className="h-2 bg-muted" />
              </div>
              <div className="pt-4 mt-4 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Next Payout</div>
                    <div className="text-sm text-muted-foreground">March 31, 2023</div>
                  </div>
                  <Button>Request Withdrawal</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

