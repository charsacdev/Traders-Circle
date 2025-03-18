import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BellRing, CreditCard, Lock, Mail, Shield, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and settings</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Alex Morgan" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Morgan" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.morgan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  className="min-h-[120px]"
                  defaultValue="Professional forex trader with over 10 years of experience. Specializing in major currency pairs with a focus on technical analysis and risk management."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
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
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Preferences</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="alexmorgan" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-type">Account Type</Label>
                <Select defaultValue="master">
                  <SelectTrigger id="account-type">
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slave">Slave Account</SelectItem>
                    <SelectItem value="master">Master Account</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground mt-1">
                  Changing account type requires approval from our team
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="deactivate">Deactivate Account</Label>
                  <p className="text-sm text-muted-foreground">Temporarily disable your account</p>
                </div>
                <Button variant="destructive" size="sm">
                  Deactivate
                </Button>
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
              <CardDescription>Manage your security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Password
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button className="mt-2">Update Password</Button>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Two-Factor Authentication
                </h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="2fa">Enable 2FA</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="2fa" defaultChecked />
                </div>
                <Button variant="outline" className="mt-2">
                  Setup 2FA
                </Button>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Login Sessions
                </h3>
                <div className="rounded-md border p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">New York, USA • Chrome on Windows</p>
                      <p className="text-xs text-muted-foreground mt-1">Started 2 hours ago</p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Sign Out All Other Sessions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <BellRing className="h-5 w-5 text-primary" />
                  Trading Notifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="trade-executed">Trade Executed</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications when a trade is executed</p>
                    </div>
                    <Switch id="trade-executed" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="trade-closed">Trade Closed</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications when a trade is closed</p>
                    </div>
                    <Switch id="trade-closed" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="profit-loss">Profit/Loss Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about significant P/L changes
                      </p>
                    </div>
                    <Switch id="profit-loss" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Notifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="follower-updates">Follower Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive emails about new followers</p>
                    </div>
                    <Switch id="follower-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="billing-updates">Billing Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive emails about earnings and payouts</p>
                    </div>
                    <Switch id="billing-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="newsletter">Newsletter</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive our weekly newsletter with trading insights
                      </p>
                    </div>
                    <Switch id="newsletter" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payout Information</CardTitle>
              <CardDescription>Manage your payout details and payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payout Method
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Bank Account</p>
                        <p className="text-sm text-muted-foreground">Chase Bank •••• 4567</p>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                  <Button variant="outline" className="mt-2">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payout Method
                  </Button>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-lg font-medium">Tax Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="tax-id">Tax ID / SSN</Label>
                  <Input id="tax-id" defaultValue="•••••6789" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-form">Tax Form</Label>
                  <Select defaultValue="w9">
                    <SelectTrigger id="tax-form">
                      <SelectValue placeholder="Select tax form" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="w9">W-9 (US Citizen)</SelectItem>
                      <SelectItem value="w8ben">W-8BEN (Non-US Individual)</SelectItem>
                      <SelectItem value="w8bene">W-8BEN-E (Non-US Entity)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" className="mt-2">
                  Update Tax Information
                </Button>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-lg font-medium">Payout Schedule</h3>
                <div className="space-y-2">
                  <Label htmlFor="payout-frequency">Payout Frequency</Label>
                  <Select defaultValue="monthly">
                    <SelectTrigger id="payout-frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minimum-payout">Minimum Payout Amount</Label>
                  <Input id="minimum-payout" type="number" defaultValue="100" />
                  <p className="text-sm text-muted-foreground">Minimum amount required for payout (USD)</p>
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
    </div>
  )
}

