import { ArrowDown, ArrowUp, Calendar, Download, TrendingDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ChartComponent from "@/components/chart"

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Performance Analytics</h1>
        <p className="text-muted-foreground">Detailed analysis of your trading performance</p>
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
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+1.8% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,580</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+12.3% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profit Factor</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUp className="mr-1 h-3 w-3" />
              <span>+0.3 from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
            <TrendingDown className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2%</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowDown className="mr-1 h-3 w-3" />
              <span>-0.8% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Performance Chart</CardTitle>
          <CardDescription>Your trading performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartComponent
            type="line"
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                {
                  label: "Win Rate",
                  data: [92, 92.5, 93, 93.2, 93.5, 93.8, 94, 94, 94.2, 94.3, 94.5, 94.8],
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
              scales: {
                y: {
                  min: 80,
                  max: 100,
                },
              },
            }}
            height={300}
          />
        </CardContent>
      </Card>

      <Tabs defaultValue="trades" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trades">Trade Analysis</TabsTrigger>
          <TabsTrigger value="instruments">Instruments</TabsTrigger>
          <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="trades">
          <Card>
            <CardHeader>
              <CardTitle>Trade Analysis</CardTitle>
              <CardDescription>Detailed breakdown of your trading activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Total Trades</div>
                  <div className="text-2xl font-bold">3,450</div>
                  <div className="flex items-center text-xs text-green-500">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    <span>+245 from last month</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Winning Trades</div>
                  <div className="text-2xl font-bold">3,250</div>
                  <div className="flex items-center text-xs text-green-500">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    <span>+235 from last month</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Losing Trades</div>
                  <div className="text-2xl font-bold">200</div>
                  <div className="flex items-center text-xs text-red-500">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    <span>+10 from last month</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Win/Loss Ratio</span>
                  <span className="font-medium">16.25:1</span>
                </div>
                <div className="flex h-4 items-center">
                  <div className="bg-primary h-full rounded-l-full" style={{ width: "94.2%" }}></div>
                  <div className="bg-destructive h-full rounded-r-full" style={{ width: "5.8%" }}></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Winning: 94.2%</span>
                  <span>Losing: 5.8%</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Average Trade Duration</span>
                  <span className="font-medium">4h 35m</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Average Profit per Trade</span>
                  <span className="font-medium text-green-500">+$12.34</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Average Loss per Trade</span>
                  <span className="font-medium text-red-500">-$3.92</span>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Entry Price</TableHead>
                    <TableHead>Exit Price</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>P/L</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>EUR/USD</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                    </TableCell>
                    <TableCell>1.0845</TableCell>
                    <TableCell>1.0892</TableCell>
                    <TableCell>0.5 lot</TableCell>
                    <TableCell className="font-medium text-green-600">+$235.00</TableCell>
                    <TableCell className="text-muted-foreground">Today, 10:45 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BTC/USD</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                    </TableCell>
                    <TableCell>42,350.00</TableCell>
                    <TableCell>43,120.00</TableCell>
                    <TableCell>0.02 BTC</TableCell>
                    <TableCell className="font-medium text-green-600">+$1,540.00</TableCell>
                    <TableCell className="text-muted-foreground">Today, 9:32 AM</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gold</TableCell>
                    <TableCell>
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Sell</Badge>
                    </TableCell>
                    <TableCell>2,345.50</TableCell>
                    <TableCell>2,320.75</TableCell>
                    <TableCell>0.1 lot</TableCell>
                    <TableCell className="font-medium text-red-600">-$247.50</TableCell>
                    <TableCell className="text-muted-foreground">Yesterday, 3:15 PM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Trades
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="instruments">
          <Card>
            <CardHeader>
              <CardTitle>Instrument Performance</CardTitle>
              <CardDescription>Performance breakdown by trading instrument</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="font-medium">EUR/USD</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">1,245 trades</span>
                    <span className="text-sm font-medium text-green-600">+$18,450</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">96.2% Win</Badge>
                  </div>
                </div>
                <Progress value={96.2} className="h-2 bg-muted" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="font-medium">BTC/USD</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">850 trades</span>
                    <span className="text-sm font-medium text-green-600">+$12,350</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">93.5% Win</Badge>
                  </div>
                </div>
                <Progress value={93.5} className="h-2 bg-muted" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="font-medium">Gold</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">620 trades</span>
                    <span className="text-sm font-medium text-green-600">+$8,750</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">91.8% Win</Badge>
                  </div>
                </div>
                <Progress value={91.8} className="h-2 bg-muted" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="font-medium">USD/JPY</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">435 trades</span>
                    <span className="text-sm font-medium text-green-600">+$5,280</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">94.7% Win</Badge>
                  </div>
                </div>
                <Progress value={94.7} className="h-2 bg-muted" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="font-medium">Other Instruments</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">300 trades</span>
                    <span className="text-sm font-medium text-red-600">-$2,250</span>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">82.3% Win</Badge>
                  </div>
                </div>
                <Progress value={82.3} className="h-2 bg-muted" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Metrics</CardTitle>
              <CardDescription>Detailed trading performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Risk Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sharpe Ratio</span>
                      <span className="font-medium">3.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sortino Ratio</span>
                      <span className="font-medium">4.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Drawdown</span>
                      <span className="font-medium">4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg. Risk/Reward Ratio</span>
                      <span className="font-medium">1:3.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Value at Risk (VaR)</span>
                      <span className="font-medium">$1,250</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Performance Metrics</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Return</span>
                      <span className="font-medium text-green-600">+18.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annualized Return</span>
                      <span className="font-medium text-green-600">+124.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profit Factor</span>
                      <span className="font-medium">4.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expectancy</span>
                      <span className="font-medium">$11.25 per trade</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Recovery Factor</span>
                      <span className="font-medium">12.4</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 md:col-span-2">
                  <h3 className="text-lg font-medium">Trading Patterns</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="text-sm text-muted-foreground">Best Trading Day</div>
                      <div className="font-medium">Monday</div>
                      <div className="text-xs text-green-600">+$8,450 total</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="text-sm text-muted-foreground">Best Trading Time</div>
                      <div className="font-medium">9:00 AM - 11:00 AM</div>
                      <div className="text-xs text-green-600">97.2% win rate</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <div className="text-sm text-muted-foreground">Avg. Holding Time</div>
                      <div className="font-medium">4h 35m</div>
                      <div className="text-xs text-muted-foreground">Profitable trades</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Export Metrics Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

