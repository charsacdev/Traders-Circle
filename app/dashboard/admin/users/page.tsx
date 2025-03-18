import { Check, Filter, MoreHorizontal, Search, Shield, User, X } from "lucide-react"
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
import { Switch } from "@/components/ui/switch"

export default function UsersManagementPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
        <p className="text-muted-foreground">Manage and monitor all platform users</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-8" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="master">Master Accounts</SelectItem>
              <SelectItem value="slave">Slave Accounts</SelectItem>
              <SelectItem value="pending">Pending Approval</SelectItem>
              <SelectItem value="blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
        </div>
      </div>

      <ScrollArea className="w-full" orientation="horizontal">
        <Tabs defaultValue="all" className="min-w-max">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="master">Master Accounts</TabsTrigger>
            <TabsTrigger value="slave">Slave Accounts</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="blocked">Blocked</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Manage all registered users on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Account Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead>KYC Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">John Doe</div>
                              <div className="text-xs text-muted-foreground">john.doe@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Slave Account</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                        </TableCell>
                        <TableCell>Mar 15, 2023</TableCell>
                        <TableCell>Today, 10:45 AM</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
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
                              <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Shield className="mr-2 h-4 w-4" />
                                Edit Permissions
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <X className="mr-2 h-4 w-4" />
                                Block Account
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
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
                          <Badge variant="outline">Master Account</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                        </TableCell>
                        <TableCell>Feb 10, 2023</TableCell>
                        <TableCell>Today, 09:30 AM</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
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
                              <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Shield className="mr-2 h-4 w-4" />
                                Edit Permissions
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <X className="mr-2 h-4 w-4" />
                                Block Account
                              </DropdownMenuItem>
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
                          <Badge variant="outline">Master Account</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                        </TableCell>
                        <TableCell>Jan 25, 2023</TableCell>
                        <TableCell>Yesterday, 14:20 PM</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
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
                              <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Shield className="mr-2 h-4 w-4" />
                                Edit Permissions
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <X className="mr-2 h-4 w-4" />
                                Block Account
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Robert Johnson" />
                              <AvatarFallback>RJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Robert Johnson</div>
                              <div className="text-xs text-muted-foreground">robert.johnson@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Slave Account</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                        </TableCell>
                        <TableCell>Mar 18, 2023</TableCell>
                        <TableCell>Today, 08:15 AM</TableCell>
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
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Emma Wilson" />
                              <AvatarFallback>EW</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Emma Wilson</div>
                              <div className="text-xs text-muted-foreground">emma.wilson@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Master Account</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Blocked</Badge>
                        </TableCell>
                        <TableCell>Dec 05, 2022</TableCell>
                        <TableCell>Mar 10, 2023</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            <Check className="mr-2 h-4 w-4" />
                            Unblock
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

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Users waiting for account approval</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Account Type</TableHead>
                        <TableHead>Requested</TableHead>
                        <TableHead>KYC Status</TableHead>
                        <TableHead>Documents</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Robert Johnson" />
                              <AvatarFallback>RJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Robert Johnson</div>
                              <div className="text-xs text-muted-foreground">robert.johnson@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Slave Account</Badge>
                        </TableCell>
                        <TableCell>Mar 18, 2023</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            View Documents
                          </Button>
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
                          <Badge variant="outline">Master Account</Badge>
                        </TableCell>
                        <TableCell>Mar 17, 2023</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            View Documents
                          </Button>
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
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="David Thompson" />
                              <AvatarFallback>DT</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">David Thompson</div>
                              <div className="text-xs text-muted-foreground">david.thompson@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Slave Account</Badge>
                        </TableCell>
                        <TableCell>Mar 16, 2023</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            View Documents
                          </Button>
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ScrollArea>

      <Card>
        <CardHeader>
          <CardTitle>User Management Settings</CardTitle>
          <CardDescription>Configure global user management settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account Approval</h3>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Require Manual Approval</div>
                <div className="text-sm text-muted-foreground">
                  All new accounts require admin approval before activation
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">KYC Verification</div>
                <div className="text-sm text-muted-foreground">Require KYC verification for all users</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Master Account Requirements</div>
                <div className="text-sm text-muted-foreground">
                  Require performance history for master account approval
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t">
            <h3 className="text-lg font-medium">Security Settings</h3>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Force 2FA for Admins</div>
                <div className="text-sm text-muted-foreground">
                  Require two-factor authentication for all admin accounts
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Login Attempt Limits</div>
                <div className="text-sm text-muted-foreground">
                  Automatically lock accounts after 5 failed login attempts
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

