import { ArrowUpRight, Calendar, CreditCard, DollarSign, MoreHorizontal, RefreshCw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SubscriptionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
        <p className="text-muted-foreground">Manage your master account subscriptions and payments</p>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Subscriptions</TabsTrigger>
          <TabsTrigger value="payments">Payment History</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle>Alex Morgan</CardTitle>
                    <CardDescription>Forex Specialist</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Pause Subscription</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Cancel Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Alex Morgan" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">94% Win Rate</Badge>
                      <Badge variant="outline">Forex</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">1,240 followers</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Monthly Performance</span>
                      <span className="font-medium">+18.5%</span>
                    </div>
                    <Progress value={85} className="h-2 bg-muted" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Subscription Fee</div>
                      <div className="font-semibold">$30/month</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Next Billing</div>
                      <div className="font-semibold">Apr 15, 2023</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  View Profile
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="destructive" size="sm">
                  <X className="mr-1 h-3 w-3" />
                  Cancel
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle>Sarah Chen</CardTitle>
                    <CardDescription>Crypto Trader</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Pause Subscription</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Cancel Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Sarah Chen" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">91% Win Rate</Badge>
                      <Badge variant="outline">Crypto</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">980 followers</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Monthly Performance</span>
                      <span className="font-medium">+22.3%</span>
                    </div>
                    <Progress value={92} className="h-2 bg-muted" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Subscription Fee</div>
                      <div className="font-semibold">$25/month</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Next Billing</div>
                      <div className="font-semibold">Apr 22, 2023</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  View Profile
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="destructive" size="sm">
                  <X className="mr-1 h-3 w-3" />
                  Cancel
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle>Michael Rodriguez</CardTitle>
                    <CardDescription>Commodities Expert</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Pause Subscription</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Cancel Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Michael Rodriguez" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">89% Win Rate</Badge>
                      <Badge variant="outline">Commodities</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">1,560 followers</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Monthly Performance</span>
                      <span className="font-medium">+15.8%</span>
                    </div>
                    <Progress value={78} className="h-2 bg-muted" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Subscription Fee</div>
                      <div className="font-semibold">$30/month</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Next Billing</div>
                      <div className="font-semibold">Apr 30, 2023</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  View Profile
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="destructive" size="sm">
                  <X className="mr-1 h-3 w-3" />
                  Cancel
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Subscription Summary</CardTitle>
              <CardDescription>Overview of your current subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground">Active Subscriptions</div>
                    <div className="text-2xl font-bold">3</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground">Monthly Cost</div>
                    <div className="text-2xl font-bold">$85</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground">Avg. Win Rate</div>
                    <div className="text-2xl font-bold">91.3%</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground">Monthly Profit</div>
                    <div className="text-2xl font-bold text-green-600">+$1,245</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Pay Now - $85.00</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Record of all your subscription payments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Master Account</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Mar 15, 2023</TableCell>
                    <TableCell>Alex Morgan</TableCell>
                    <TableCell>•••• 4242</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">$30.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mar 15, 2023</TableCell>
                    <TableCell>Sarah Chen</TableCell>
                    <TableCell>•••• 4242</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">$25.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mar 15, 2023</TableCell>
                    <TableCell>Michael Rodriguez</TableCell>
                    <TableCell>•••• 4242</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">$30.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Feb 15, 2023</TableCell>
                    <TableCell>Alex Morgan</TableCell>
                    <TableCell>•••• 4242</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">$30.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Feb 15, 2023</TableCell>
                    <TableCell>Sarah Chen</TableCell>
                    <TableCell>•••• 4242</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">$25.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Feb 15, 2023</TableCell>
                    <TableCell>Michael Rodriguez</TableCell>
                    <TableCell>•••• 4242</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">$30.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Filter by Date
              </Button>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Mastercard ending in 8888</p>
                      <p className="text-sm text-muted-foreground">Expires 09/2024</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Set as Default
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <DollarSign className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

