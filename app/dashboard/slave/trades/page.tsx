import { ArrowUpDown, Download, Filter, Search, TrendingDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function MyTradesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Trades</h1>
        <p className="text-muted-foreground">View and analyze all your trades copied from master accounts</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search trades..." className="pl-8" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Trades</SelectItem>
              <SelectItem value="profitable">Profitable</SelectItem>
              <SelectItem value="loss">Loss</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <ScrollArea className="w-full" orientation="horizontal">
        <Tabs defaultValue="all" className="min-w-max">
          <TabsList className="w-full justify-start overflow-auto">
            <TabsTrigger value="all">All Trades</TabsTrigger>
            <TabsTrigger value="forex">Forex</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
            <TabsTrigger value="commodities">Commodities</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Trade History</CardTitle>
                <CardDescription>A complete record of all your trades</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full pr-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Entry Price</TableHead>
                        <TableHead>Exit Price</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Master</TableHead>
                        <TableHead className="text-right">
                          <div className="flex items-center justify-end">
                            P/L
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead className="text-right">Date</TableHead>
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
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$235.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">Today, 10:45 AM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>BTC/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>42,350.00</TableCell>
                        <TableCell>43,120.00</TableCell>
                        <TableCell>0.02 BTC</TableCell>
                        <TableCell>Sarah Chen</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$154.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">Today, 9:32 AM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Gold</TableCell>
                        <TableCell>
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Sell</Badge>
                        </TableCell>
                        <TableCell>2,345.50</TableCell>
                        <TableCell>2,320.75</TableCell>
                        <TableCell>0.1 lot</TableCell>
                        <TableCell>Michael Rodriguez</TableCell>
                        <TableCell className="text-right font-medium text-red-600">-$78.50</TableCell>
                        <TableCell className="text-right text-muted-foreground">Yesterday, 3:15 PM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>USD/JPY</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>148.75</TableCell>
                        <TableCell>149.20</TableCell>
                        <TableCell>0.3 lot</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$92.75</TableCell>
                        <TableCell className="text-right text-muted-foreground">Yesterday, 1:20 PM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ETH/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>2,450.40</TableCell>
                        <TableCell>2,520.80</TableCell>
                        <TableCell>0.1 ETH</TableCell>
                        <TableCell>Sarah Chen</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$70.40</TableCell>
                        <TableCell className="text-right text-muted-foreground">Yesterday, 11:05 AM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>AAPL</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>182.45</TableCell>
                        <TableCell>185.20</TableCell>
                        <TableCell>5 shares</TableCell>
                        <TableCell>Emma Wilson</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$13.75</TableCell>
                        <TableCell className="text-right text-muted-foreground">2 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>GBP/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Sell</Badge>
                        </TableCell>
                        <TableCell>1.2650</TableCell>
                        <TableCell>1.2680</TableCell>
                        <TableCell>0.2 lot</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-red-600">-$60.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">2 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>TSLA</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>245.30</TableCell>
                        <TableCell>252.80</TableCell>
                        <TableCell>2 shares</TableCell>
                        <TableCell>Emma Wilson</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$15.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">3 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>AUD/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>0.6750</TableCell>
                        <TableCell>0.6780</TableCell>
                        <TableCell>0.3 lot</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$90.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">3 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>NZD/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>0.6150</TableCell>
                        <TableCell>0.6180</TableCell>
                        <TableCell>0.2 lot</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$60.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">4 days ago</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
                <div className="flex items-center justify-center space-x-2 py-4">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tabs would have similar content but filtered */}
          <TabsContent value="forex" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Forex Trades</CardTitle>
                <CardDescription>Your forex trading history</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Entry Price</TableHead>
                        <TableHead>Exit Price</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Master</TableHead>
                        <TableHead className="text-right">P/L</TableHead>
                        <TableHead className="text-right">Date</TableHead>
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
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$235.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">Today, 10:45 AM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>USD/JPY</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>148.75</TableCell>
                        <TableCell>149.20</TableCell>
                        <TableCell>0.3 lot</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$92.75</TableCell>
                        <TableCell className="text-right text-muted-foreground">Yesterday, 1:20 PM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>GBP/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Sell</Badge>
                        </TableCell>
                        <TableCell>1.2650</TableCell>
                        <TableCell>1.2680</TableCell>
                        <TableCell>0.2 lot</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-red-600">-$60.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">2 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>AUD/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>0.6750</TableCell>
                        <TableCell>0.6780</TableCell>
                        <TableCell>0.3 lot</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$90.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">3 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>NZD/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>0.6150</TableCell>
                        <TableCell>0.6180</TableCell>
                        <TableCell>0.2 lot</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$60.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">4 days ago</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crypto" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Crypto Trades</CardTitle>
                <CardDescription>Your cryptocurrency trading history</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Entry Price</TableHead>
                        <TableHead>Exit Price</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Master</TableHead>
                        <TableHead className="text-right">P/L</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>BTC/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>42,350.00</TableCell>
                        <TableCell>43,120.00</TableCell>
                        <TableCell>0.02 BTC</TableCell>
                        <TableCell>Sarah Chen</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$154.00</TableCell>
                        <TableCell className="text-right text-muted-foreground">Today, 9:32 AM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>ETH/USD</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Buy</Badge>
                        </TableCell>
                        <TableCell>2,450.40</TableCell>
                        <TableCell>2,520.80</TableCell>
                        <TableCell>0.1 ETH</TableCell>
                        <TableCell>Sarah Chen</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+$70.40</TableCell>
                        <TableCell className="text-right text-muted-foreground">Yesterday, 11:05 AM</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ScrollArea>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Trading Performance</CardTitle>
            <CardDescription>Overall statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs text-muted-foreground">Total Trades</div>
                  <div className="font-semibold">245</div>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs text-muted-foreground">Win Rate</div>
                  <div className="font-semibold">87.2%</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs text-muted-foreground">Profit Factor</div>
                  <div className="font-semibold">3.2</div>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <div className="text-xs text-muted-foreground">Avg. Holding Time</div>
                  <div className="font-semibold">4h 12m</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <div className="text-xs text-green-800">Total Profit</div>
                  <div className="font-semibold text-green-800">+$3,245.80</div>
                </div>
                <div className="bg-red-100 rounded-lg p-3">
                  <div className="text-xs text-red-800">Total Loss</div>
                  <div className="font-semibold text-red-800">-$420.50</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance by Master</CardTitle>
            <CardDescription>Profit/loss by master account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Alex Morgan</span>
                </div>
                <span className="text-sm font-medium text-green-600">+$1,245.30</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Sarah Chen</span>
                </div>
                <span className="text-sm font-medium text-green-600">+$950.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Emma Wilson</span>
                </div>
                <span className="text-sm font-medium text-green-600">+$630.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span className="text-sm">Michael Rodriguez</span>
                </div>
                <span className="text-sm font-medium text-red-600">-$78.50</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Others</span>
                </div>
                <span className="text-sm font-medium text-green-600">+$78.50</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest trades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">EUR/USD Buy</p>
                  <p className="text-xs text-muted-foreground">Via Alex Morgan • +$235.00</p>
                </div>
                <p className="text-xs text-muted-foreground">10:45 AM</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">BTC/USD Buy</p>
                  <p className="text-xs text-muted-foreground">Via Sarah Chen • +$154.00</p>
                </div>
                <p className="text-xs text-muted-foreground">9:32 AM</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Gold Sell</p>
                  <p className="text-xs text-muted-foreground">Via Michael Rodriguez • -$78.50</p>
                </div>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">USD/JPY Buy</p>
                  <p className="text-xs text-muted-foreground">Via Alex Morgan • +$92.75</p>
                </div>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

