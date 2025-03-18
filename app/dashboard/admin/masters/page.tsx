import { Check, Download, Filter, MoreHorizontal, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export default function MasterAccountsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Master Accounts</h1>
        <p className="text-muted-foreground">Manage and monitor all master accounts on the platform</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search master accounts..." className="pl-8" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Masters</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending Approval</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
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
          <TabsList>
            <TabsTrigger value="all">All Masters</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="performance">Performance Review</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Master Accounts</CardTitle>
                <CardDescription>All master accounts on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Trader</TableHead>
                        <TableHead>Specialty</TableHead>
                        <TableHead>Win Rate</TableHead>
                        <TableHead>Followers</TableHead>
                        <TableHead>Monthly Fee</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex Morgan" />
                              <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Alex Morgan</div>
                              <div className="text-xs text-muted-foreground">alex.morgan@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Forex</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">94%</span>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">High</Badge>
                          </div>
                        </TableCell>
                        <TableCell>1,240</TableCell>
                        <TableCell>$30/month</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                        </TableCell>
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
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>View Performance</DropdownMenuItem>
                              <DropdownMenuItem>Edit Fee</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Suspend Account</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Chen" />
                              <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Sarah Chen</div>
                              <div className="text-xs text-muted-foreground">sarah.chen@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Crypto</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">91%</span>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">High</Badge>
                          </div>
                        </TableCell>
                        <TableCell>980</TableCell>
                        <TableCell>$25/month</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                        </TableCell>
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
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>View Performance</DropdownMenuItem>
                              <DropdownMenuItem>Edit Fee</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Suspend Account</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Michael Rodriguez" />
                              <AvatarFallback>MR</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Michael Rodriguez</div>
                              <div className="text-xs text-muted-foreground">michael.rodriguez@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Commodities</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">89%</span>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">High</Badge>
                          </div>
                        </TableCell>
                        <TableCell>1,560</TableCell>
                        <TableCell>$35/month</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                        </TableCell>
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
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>View Performance</DropdownMenuItem>
                              <DropdownMenuItem>Edit Fee</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Suspend Account</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Lisa Wong" />
                              <AvatarFallback>LW</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Lisa Wong</div>
                              <div className="text-xs text-muted-foreground">lisa.wong@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Forex</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">85%</span>
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                          </div>
                        </TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>$20/month</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <Check className="h-4 w-4 text-green-500" />
                            </Button>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <X className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
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

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Master Accounts</CardTitle>
                <CardDescription>Master accounts waiting for approval</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Trader</TableHead>
                        <TableHead>Specialty</TableHead>
                        <TableHead>Win Rate</TableHead>
                        <TableHead>Total Trades</TableHead>
                        <TableHead>Requested Fee</TableHead>
                        <TableHead>Applied</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Lisa Wong" />
                              <AvatarFallback>LW</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Lisa Wong</div>
                              <div className="text-xs text-muted-foreground">lisa.wong@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Forex</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">85%</span>
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                          </div>
                        </TableCell>
                        <TableCell>156</TableCell>
                        <TableCell>$20/month</TableCell>
                        <TableCell>Mar 17, 2023</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              View History
                            </Button>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <Check className="h-4 w-4 text-green-500" />
                            </Button>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <X className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="James Taylor" />
                              <AvatarFallback>JT</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">James Taylor</div>
                              <div className="text-xs text-muted-foreground">james.taylor@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Crypto</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">82%</span>
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
                          </div>
                        </TableCell>
                        <TableCell>98</TableCell>
                        <TableCell>$25/month</TableCell>
                        <TableCell>Mar 16, 2023</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              View History
                            </Button>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <Check className="h-4 w-4 text-green-500" />
                            </Button>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <X className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Ryan Patel" />
                              <AvatarFallback>RP</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Ryan Patel</div>
                              <div className="text-xs text-muted-foreground">ryan.patel@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Stocks</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">78%</span>
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Low</Badge>
                          </div>
                        </TableCell>
                        <TableCell>124</TableCell>
                        <TableCell>$15/month</TableCell>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              View History
                            </Button>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <Check className="h-4 w-4 text-green-500" />
                            </Button>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <X className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Review</CardTitle>
                <CardDescription>Monitor master account performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Trader</TableHead>
                        <TableHead>Win Rate</TableHead>
                        <TableHead>Profit Factor</TableHead>
                        <TableHead>Drawdown</TableHead>
                        <TableHead>Monthly Return</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex Morgan" />
                              <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Alex Morgan</div>
                              <div className="text-xs text-muted-foreground">Forex</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>94%</span>
                              <span className="text-green-600">+1.2%</span>
                            </div>
                            <Progress value={94} className="h-2 bg-muted" />
                          </div>
                        </TableCell>
                        <TableCell>4.8</TableCell>
                        <TableCell>4.2%</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+18.5%</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Chen" />
                              <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Sarah Chen</div>
                              <div className="text-xs text-muted-foreground">Crypto</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>91%</span>
                              <span className="text-green-600">+0.8%</span>
                            </div>
                            <Progress value={91} className="h-2 bg-muted" />
                          </div>
                        </TableCell>
                        <TableCell>3.9</TableCell>
                        <TableCell>5.1%</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+22.3%</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Michael Rodriguez" />
                              <AvatarFallback>MR</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Michael Rodriguez</div>
                              <div className="text-xs text-muted-foreground">Commodities</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>89%</span>
                              <span className="text-red-600">-0.5%</span>
                            </div>
                            <Progress value={89} className="h-2 bg-muted" />
                          </div>
                        </TableCell>
                        <TableCell>3.5</TableCell>
                        <TableCell>6.2%</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+15.8%</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
}

