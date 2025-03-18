import { Calendar, CreditCard, Download, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing Management</h1>
        <p className="text-muted-foreground">Manage platform revenue, payouts, and billing operations</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$126,350</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <span>+18.5% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Commission</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$37,905</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <span>30% of total revenue</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Master Payouts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$88,445</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <span>70% of total revenue</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,215</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <span>+245 from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <ScrollArea className="w-full" orientation="horizontal">
        <Tabs defaultValue="transactions" className="min-w-max">
          <TabsList>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="payouts">Master Payouts</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>All platform transactions</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <Calendar className="mr-2 h-4 w-4" />
                    Date Range
                  </Button>
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="subscription">Subscriptions</SelectItem>
                      <SelectItem value="payout">Payouts</SelectItem>
                      <SelectItem value="refund">Refunds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Transaction ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono text-xs">TXN-38291-ABCDE</TableCell>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>
                          <Badge variant="outline">Subscription</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">$30.00</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono text-xs">TXN-38290-FGHIJ</TableCell>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell>Emma Miller</TableCell>
                        <TableCell>
                          <Badge variant="outline">Subscription</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">$25.00</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono text-xs">TXN-38289-KLMNO</TableCell>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell>Alex Morgan</TableCell>
                        <TableCell>
                          <Badge variant="outline">Payout</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">-$8,450.00</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono text-xs">TXN-38288-PQRST</TableCell>
                        <TableCell>Mar 14, 2023</TableCell>
                        <TableCell>Robert Johnson</TableCell>
                        <TableCell>
                          <Badge variant="outline">Subscription</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">$30.00</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono text-xs">TXN-38287-UVWXY</TableCell>
                        <TableCell>Mar 14, 2023</TableCell>
                        <TableCell>Lisa Wong</TableCell>
                        <TableCell>
                          <Badge variant="outline">Refund</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">-$25.00</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
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

          <TabsContent value="payouts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Master Account Payouts</CardTitle>
                <CardDescription>Manage payouts to master account holders</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Master Account</TableHead>
                        <TableHead>Payout Method</TableHead>
                        <TableHead>Earnings Period</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-medium">Alex Morgan</div>
                              <div className="text-xs text-muted-foreground">alex.morgan@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell>Feb 1 - Feb 28, 2023</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">$8,450.00</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-medium">Sarah Chen</div>
                              <div className="text-xs text-muted-foreground">sarah.chen@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>PayPal</TableCell>
                        <TableCell>Feb 1 - Feb 28, 2023</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">$6,125.00</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-medium">Michael Rodriguez</div>
                              <div className="text-xs text-muted-foreground">michael.rodriguez@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Bank Transfer</TableCell>
                        <TableCell>Feb 1 - Feb 28, 2023</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">$7,350.00</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="font-medium">Emma Wilson</div>
                              <div className="text-xs text-muted-foreground">emma.wilson@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>PayPal</TableCell>
                        <TableCell>Feb 1 - Feb 28, 2023</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">$5,280.00</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            Process
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Select Period
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Platform revenue breakdown and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="h-[300px] w-full bg-muted rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-muted-foreground">Revenue Chart Placeholder</div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Revenue by Account Type</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Master Accounts (245)</span>
                          <span className="font-medium">$88,445</span>
                        </div>
                        <Progress value={70} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Slave Accounts (4,215)</span>
                          <span className="font-medium">$37,905</span>
                        </div>
                        <Progress value={30} className="h-2 bg-muted" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Revenue by Specialty</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Forex</span>
                          <span className="font-medium">$58,320</span>
                        </div>
                        <Progress value={46} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Crypto</span>
                          <span className="font-medium">$42,560</span>
                        </div>
                        <Progress value={34} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Stocks</span>
                          <span className="font-medium">$15,240</span>
                        </div>
                        <Progress value={12} className="h-2 bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Commodities</span>
                          <span className="font-medium">$10,230</span>
                        </div>
                        <Progress value={8} className="h-2 bg-muted" />
                      </div>
                    </div>
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

