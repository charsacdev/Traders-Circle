import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
        <p className="text-muted-foreground">Configure platform settings and preferences</p>
      </div>

      <ScrollArea className="w-full" orientation="horizontal">
        <Tabs defaultValue="general" className="min-w-max">
          <TabsList className="w-full flex flex-wrap justify-start">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="api">API & Integrations</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure general platform settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" defaultValue="Traders Circle" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input id="support-email" type="email" defaultValue="support@traderscircle.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input id="contact-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="america-new_york">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-new_york">America/New York (UTC-04:00)</SelectItem>
                      <SelectItem value="america-los_angeles">America/Los Angeles (UTC-07:00)</SelectItem>
                      <SelectItem value="europe-london">Europe/London (UTC+01:00)</SelectItem>
                      <SelectItem value="asia-tokyo">Asia/Tokyo (UTC+09:00)</SelectItem>
                      <SelectItem value="australia-sydney">Australia/Sydney (UTC+10:00)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Enable Maintenance Mode</div>
                      <div className="text-xs text-muted-foreground">
                        When enabled, the platform will be inaccessible to regular users
                      </div>
                    </div>
                    <Switch id="maintenance-mode" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Admin Account</CardTitle>
                <CardDescription>Manage your admin account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="avatar-upload" className="cursor-pointer">
                        <div className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm">
                          Change Avatar
                        </div>
                        <input id="avatar-upload" type="file" className="hidden" accept="image/*" />
                      </label>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue="Admin" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue="User" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="admin@traderscircle.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input id="role" defaultValue="Super Admin" disabled />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Configure platform security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Require 2FA for All Admins</div>
                      <div className="text-xs text-muted-foreground">
                        Force two-factor authentication for all admin accounts
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Require Strong Passwords</div>
                      <div className="text-xs text-muted-foreground">
                        Enforce minimum password complexity requirements
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Password Expiry</div>
                      <div className="text-xs text-muted-foreground">Force password changes every 90 days</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Session Management</h3>
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input id="session-timeout" type="number" defaultValue="30" min="5" max="120" />
                    <p className="text-xs text-muted-foreground">
                      Time of inactivity before a user is automatically logged out
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Single Session</div>
                      <div className="text-xs text-muted-foreground">Limit users to one active session at a time</div>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">IP Restrictions</h3>
                  <div className="space-y-2">
                    <Label htmlFor="allowed-ips">Allowed Admin IP Addresses</Label>
                    <Textarea
                      id="allowed-ips"
                      placeholder="Enter IP addresses, one per line"
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave blank to allow admin access from any IP address
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>API & Integrations</CardTitle>
                <CardDescription>Manage API keys and third-party integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">API Settings</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Enable API Access</div>
                      <div className="text-xs text-muted-foreground">
                        Allow external applications to access the platform API
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="api-key"
                        defaultValue="sk_live_51KjHdIGjh23Fkjh23F1kjh23F1kjh23F1kjh"
                        type="password"
                        readOnly
                      />
                      <Button variant="outline">Show</Button>
                      <Button variant="outline">Regenerate</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This key provides full access to your API. Keep it secure.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Payment Integrations</h3>
                  <div className="space-y-2">
                    <Label htmlFor="stripe-key">Stripe API Key</Label>
                    <Input
                      id="stripe-key"
                      defaultValue="sk_live_51KjHdIGjh23Fkjh23F1kjh23F1kjh23F1kjh"
                      type="password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stripe-webhook">Stripe Webhook Secret</Label>
                    <Input
                      id="stripe-webhook"
                      defaultValue="whsec_1KjHdIGjh23Fkjh23F1kjh23F1kjh23F1kjh"
                      type="password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Test Mode</div>
                      <div className="text-xs text-muted-foreground">
                        Use Stripe test environment instead of production
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Trading Platform Integrations</h3>
                  <div className="space-y-2">
                    <Label htmlFor="mt5-api-endpoint">MT5 API Endpoint</Label>
                    <Input id="mt5-api-endpoint" defaultValue="https://api.mt5provider.com/v1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mt5-api-key">MT5 API Key</Label>
                    <Input
                      id="mt5-api-key"
                      defaultValue="mt5_api_1KjHdIGjh23Fkjh23F1kjh23F1kjh23F1kjh"
                      type="password"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure system and admin notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Admin Notifications</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">New User Registrations</div>
                      <div className="text-xs text-muted-foreground">Receive notifications when new users register</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Master Account Applications</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications for new master account applications
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">KYC Verification Requests</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications for new KYC verification requests
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Payment Failures</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications for failed payment transactions
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">System Alerts</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">API Error Alerts</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications for API errors and failures
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Security Alerts</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications for suspicious login attempts
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">System Performance</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications for system performance issues
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Notification Delivery</h3>
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" type="email" defaultValue="admin@traderscircle.com" />
                    <p className="text-xs text-muted-foreground">
                      Primary email address for receiving admin notifications
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Email Notifications</div>
                      <div className="text-xs text-muted-foreground">Send notifications via email</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">SMS Notifications</div>
                      <div className="text-xs text-muted-foreground">Send critical notifications via SMS</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize the platform's appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Branding</h3>
                  <div className="space-y-2">
                    <Label htmlFor="logo-upload">Platform Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                        <TrendingUp className="h-8 w-8 text-primary" />
                      </div>
                      <label htmlFor="logo-upload" className="cursor-pointer">
                        <div className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm">
                          Upload Logo
                        </div>
                        <input id="logo-upload" type="file" className="hidden" accept="image/*" />
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="favicon-upload">Favicon</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-8 bg-muted rounded-md flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <label htmlFor="favicon-upload" className="cursor-pointer">
                        <div className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm">
                          Upload Favicon
                        </div>
                        <input id="favicon-upload" type="file" className="hidden" accept="image/*" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Theme</h3>
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex gap-2">
                      <Input id="primary-color" type="color" defaultValue="#1544b9" className="w-16 h-10" />
                      <Input defaultValue="#1544b9" className="flex-1" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Dark Mode</div>
                      <div className="text-xs text-muted-foreground">Enable dark mode option for users</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Custom CSS</div>
                      <div className="text-xs text-muted-foreground">Allow custom CSS for platform styling</div>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Layout</h3>
                  <div className="space-y-2">
                    <Label htmlFor="layout-type">Default Layout</Label>
                    <Select defaultValue="sidebar">
                      <SelectTrigger id="layout-type">
                        <SelectValue placeholder="Select layout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sidebar">Sidebar Navigation</SelectItem>
                        <SelectItem value="topnav">Top Navigation</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm">Responsive Design</div>
                      <div className="text-xs text-muted-foreground">Optimize layout for mobile devices</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
}

function TrendingUp(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
      <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
  )
}

