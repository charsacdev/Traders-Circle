import { CheckCircle, DollarSign, LineChart, ShieldAlert, TrendingUp, Users, XCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Admin! Here's an overview of the platform.</p>
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
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$126,350</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+18.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Master Accounts</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+8.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.2%</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+1.4% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="approvals">
        <TabsList>
          <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
          <TabsTrigger value="kyc">KYC Verifications</TabsTrigger>
        </TabsList>
        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Master Account Approvals</CardTitle>
              <CardDescription>Accounts pending approval based on performance evaluation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-[1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">James Davis</p>
                      <p className="text-xs text-muted-foreground">Applied 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">85% Win Rate</Badge>
                  </div>
                  <div className="flex items-center justify-end text-sm">
                    <span>124 Trades</span>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>KL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Karen Lee</p>
                      <p className="text-xs text-muted-foreground">Applied 3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">82% Win Rate</Badge>
                  </div>
                  <div className="flex items-center justify-end text-sm">
                    <span>98 Trades</span>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>RP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Ryan Patel</p>
                      <p className="text-xs text-muted-foreground">Applied 4 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">78% Win Rate</Badge>
                  </div>
                  <div className="flex items-center justify-end text-sm">
                    <span>156 Trades</span>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Pending Approvals
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="kyc" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>KYC Verifications</CardTitle>
              <CardDescription>Users waiting for KYC verification approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-[1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sarah Miller</p>
                      <p className="text-xs text-muted-foreground">Submitted today</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <Badge>Slave Account</Badge>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button size="sm" variant="outline">
                      View Documents
                    </Button>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>TJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Thomas Johnson</p>
                      <p className="text-xs text-muted-foreground">Submitted yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <Badge>Master Account</Badge>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button size="sm" variant="outline">
                      View Documents
                    </Button>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_120px_120px_100px] items-center gap-4 rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>AW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Amanda Wilson</p>
                      <p className="text-xs text-muted-foreground">Submitted 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <Badge>Slave Account</Badge>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button size="sm" variant="outline">
                      View Documents
                    </Button>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All KYC Requests
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>Overall trading performance across all master accounts</CardDescription>
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
            <CardTitle>Revenue Breakdown</CardTitle>
            <CardDescription>Platform revenue from subscriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Total Subscription Revenue</span>
                  <span className="font-medium">$126,350</span>
                </div>
                <Progress value={100} className="h-2 bg-muted" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Platform Commission (30%)</span>
                  <span className="font-medium">$37,905</span>
                </div>
                <Progress value={30} className="h-2 bg-muted" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Master Earnings</span>
                  <span className="font-medium">$88,445</span>
                </div>
                <Progress value={70} className="h-2 bg-muted" />
              </div>
              <div className="pt-4 mt-4 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">System Status</div>
                    <div className="flex items-center text-sm text-green-500 mt-1">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      <span>All systems operational</span>
                    </div>
                  </div>
                  <Button variant="outline">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    Security Report
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

