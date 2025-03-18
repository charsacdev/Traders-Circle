import { ArrowUpDown, Calendar, Download, DollarSign, TrendingUp, Users, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import ChartComponent from "@/components/chart"

export default function EarningsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Earnings</h1>
        <p className="text-muted-foreground">Track and manage your subscription revenue</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$26,040</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,235</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+85 from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <Wallet className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$37,200</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+$2,550 from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Subscriber Value</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$30.12</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>+$0.42 from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <ScrollArea className="w-full" orientation="horizontal">
        <Tabs defaultValue="earnings" className="min-w-max">
          <TabsList className="w-full justify-start overflow-auto">
            <TabsTrigger value="earnings">Earnings History</TabsTrigger>
            <TabsTrigger value="payouts">Payouts</TabsTrigger>
            <TabsTrigger value="analytics">Revenue Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="earnings" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Earnings History</CardTitle>
                  <CardDescription>Your subscription revenue over time</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="last3months">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last30days">Last 30 days</SelectItem>
                      <SelectItem value="last3months">Last 3 months</SelectItem>
                      <SelectItem value="last6months">Last 6 months</SelectItem>
                      <SelectItem value="lastyear">Last year</SelectItem>
                      <SelectItem value="alltime">All time</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ChartComponent
                  type="bar"
                  data={{
                    labels: ["Oct 2022", "Nov 2022", "Dec 2022", "Jan 2023", "Feb 2023", "Mar 2023"],
                    datasets: [
                      {
                        label: "Gross Revenue",
                        data: [25500, 27600, 29400, 32400, 34650, 37200],
                        backgroundColor: "hsl(var(--primary) / 0.7)",
                      },
                      {
                        label: "Net Earnings",
                        data: [17850, 19320, 20580, 22680, 24255, 26040],
                        backgroundColor: "hsl(var(--primary))",
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
                <ScrollArea className="w-full" orientation="horizontal">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          <div className="flex items-center cursor-pointer">
                            Month
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>
                          <div className="flex items-center cursor-pointer">
                            Subscribers
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>
                          <div className="flex items-center cursor-pointer">
                            Gross Revenue
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>
                          <div className="flex items-center cursor-pointer">
                            Platform Fee
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead className="text-right">
                          <div className="flex items-center justify-end cursor-pointer">
                            Net Earnings
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>March 2023</TableCell>
                        <TableCell>1,235</TableCell>
                        <TableCell>$37,200.00</TableCell>
                        <TableCell>$11,160.00</TableCell>
                        <TableCell className="text-right font-medium">$26,040.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>February 2023</TableCell>
                        <TableCell>1,150</TableCell>
                        <TableCell>$34,650.00</TableCell>
                        <TableCell>$10,395.00</TableCell>
                        <TableCell className="text-right font-medium">$24,255.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>January 2023</TableCell>
                        <TableCell>1,080</TableCell>
                        <TableCell>$32,400.00</TableCell>
                        <TableCell>$9,720.00</TableCell>
                        <TableCell className="text-right font-medium">$22,680.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>December 2022</TableCell>
                        <TableCell>980</TableCell>
                        <TableCell>$29,400.00</TableCell>
                        <TableCell>$8,820.00</TableCell>
                        <TableCell className="text-right font-medium">$20,580.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>November 2022</TableCell>
                        <TableCell>920</TableCell>
                        <TableCell>$27,600.00</TableCell>
                        <TableCell>$8,280.00</TableCell>
                        <TableCell className="text-right font-medium">$19,320.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>October 2022</TableCell>
                        <TableCell>850</TableCell>
                        <TableCell>$25,500.00</TableCell>
                        <TableCell>$7,650.00</TableCell>
                        <TableCell className="text-right font-medium">$17,850.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Custom Date Range
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="payouts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payout History</CardTitle>
                <CardDescription>Your earnings payouts</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full" orientation="horizontal">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Reference</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell className="font-medium">$24,255.00</TableCell>
                        <TableCell className="text-green-600">Completed</TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell className="text-right text-muted-foreground">REF-2023-03-15-001</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Feb 15, 2023</TableCell>
                        <TableCell className="font-medium">$22,680.00</TableCell>
                        <TableCell className="text-green-600">Completed</TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell className="text-right text-muted-foreground">REF-2023-02-15-001</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jan 15, 2023</TableCell>
                        <TableCell className="font-medium">$20,580.00</TableCell>
                        <TableCell className="text-green-600">Completed</TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell className="text-right text-muted-foreground">REF-2023-01-15-001</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dec 15, 2022</TableCell>
                        <TableCell className="font-medium">$19,320.00</TableCell>
                        <TableCell className="text-green-600">Completed</TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell className="text-right text-muted-foreground">REF-2022-12-15-001</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nov 15, 2022</TableCell>
                        <TableCell className="font-medium">$17,850.00</TableCell>
                        <TableCell className="text-green-600">Completed</TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell className="text-right text-muted-foreground">REF-2022-11-15-001</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download All Statements
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Insights into your earnings and subscriber growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <ChartComponent
                  type="line"
                  data={{
                    labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
                    datasets: [
                      {
                        label: "Subscribers",
                        data: [850, 920, 980, 1080, 1150, 1235],
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
                  height={200}
                />
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">New Subscribers (30 days)</span>
                    <span className="font-medium">85</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Growth Rate</span>
                    <span className="font-medium text-green-600">+7.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Churn Rate</span>
                    <span className="font-medium text-green-600">1.8%</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Revenue Breakdown</h3>
                  <ChartComponent
                    type="doughnut"
                    data={{
                      labels: ["Subscription Revenue", "Platform Fee"],
                      datasets: [
                        {
                          data: [26040, 11160],
                          backgroundColor: ["hsl(var(--primary))", "hsl(var(--muted))"],
                          borderColor: ["hsl(var(--primary))", "hsl(var(--muted))"],
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
                    height={200}
                  />
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Revenue Per User</span>
                      <span className="font-medium">$30.12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lifetime Value</span>
                      <span className="font-medium">$255.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Projected Annual Revenue</span>
                      <span className="font-medium">$446,400.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Analytics Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
}

