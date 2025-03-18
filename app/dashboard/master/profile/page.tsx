import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Upload } from "lucide-react"
import ChartComponent from "@/components/chart"

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Master Profile</h1>
        <p className="text-muted-foreground">Manage your public profile and trading information</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Public Profile</TabsTrigger>
          <TabsTrigger value="trading">Trading Information</TabsTrigger>
          <TabsTrigger value="subscription">Subscription Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Public Profile</CardTitle>
              <CardDescription>This information will be displayed publicly to potential followers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Alex Morgan" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="relative">
                    <Button variant="outline" size="sm" className="relative">
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                      />
                      Change Avatar
                    </Button>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="display-name">Display Name</Label>
                      <Input id="display-name" defaultValue="Alex Morgan" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Trading Specialty</Label>
                      <Select defaultValue="forex">
                        <SelectTrigger id="specialty">
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="forex">Forex</SelectItem>
                          <SelectItem value="crypto">Crypto</SelectItem>
                          <SelectItem value="stocks">Stocks</SelectItem>
                          <SelectItem value="commodities">Commodities</SelectItem>
                          <SelectItem value="indices">Indices</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      defaultValue="Forex Specialist with 10+ years of experience in currency markets"
                    />
                    <p className="text-sm text-muted-foreground">A short description that appears under your name</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biography</Label>
                <Textarea
                  id="bio"
                  className="min-h-[150px]"
                  defaultValue="I've been trading forex markets professionally for over 10 years, specializing in major currency pairs with a focus on EUR/USD and GBP/USD. My trading strategy combines technical analysis with macroeconomic fundamentals to identify high-probability setups with favorable risk-reward ratios. I maintain strict risk management protocols, never risking more than 2% on any single trade. My approach has consistently delivered 90%+ win rates over the past 5 years."
                />
                <p className="text-sm text-muted-foreground">
                  Tell potential followers about your trading experience, strategy, and philosophy
                </p>
              </div>

              <div className="space-y-2">
                <Label>Trading Badges</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Forex Expert</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Technical Analysis</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Swing Trader</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Risk Management</Badge>
                  <Button variant="outline" size="sm" className="h-6">
                    + Add Badge
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="social-media">Social Media Links</Label>
                <div className="space-y-2">
                  <Input id="twitter" placeholder="Twitter URL" defaultValue="https://twitter.com/alexmorgan" />
                  <Input id="linkedin" placeholder="LinkedIn URL" defaultValue="https://linkedin.com/in/alexmorgan" />
                  <Input id="website" placeholder="Personal Website" defaultValue="https://alexmorgan-trading.com" />
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
              <CardTitle>Profile Banner</CardTitle>
              <CardDescription>Add a banner image to your profile page</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full bg-muted rounded-md relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Upload className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="relative">
                  <Button variant="outline" className="relative">
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*"
                    />
                    Upload Banner Image
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">Recommended size: 1200 x 300 pixels</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trading" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trading Information</CardTitle>
              <CardDescription>Details about your trading approach and performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="trading-style">Trading Style</Label>
                    <Select defaultValue="swing">
                      <SelectTrigger id="trading-style">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scalping">Scalping</SelectItem>
                        <SelectItem value="day">Day Trading</SelectItem>
                        <SelectItem value="swing">Swing Trading</SelectItem>
                        <SelectItem value="position">Position Trading</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="risk-level">Risk Level</Label>
                    <Select defaultValue="moderate">
                      <SelectTrigger id="risk-level">
                        <SelectValue placeholder="Select risk level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservative">Conservative (1-2% per trade)</SelectItem>
                        <SelectItem value="moderate">Moderate (2-5% per trade)</SelectItem>
                        <SelectItem value="aggressive">Aggressive (5-10% per trade)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="avg-trade-duration">Average Trade Duration</Label>
                    <Select defaultValue="days">
                      <SelectTrigger id="avg-trade-duration">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minutes">Minutes</SelectItem>
                        <SelectItem value="hours">Hours</SelectItem>
                        <SelectItem value="days">Days</SelectItem>
                        <SelectItem value="weeks">Weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferred-instruments">Preferred Instruments</Label>
                    <Textarea
                      id="preferred-instruments"
                      className="min-h-[100px]"
                      defaultValue="EUR/USD, GBP/USD, USD/JPY, Gold, Oil"
                    />
                    <p className="text-sm text-muted-foreground">List the instruments you trade most frequently</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trading-hours">Trading Hours</Label>
                    <Input id="trading-hours" defaultValue="8:00 AM - 12:00 PM EST, 2:00 PM - 4:00 PM EST" />
                    <p className="text-sm text-muted-foreground">When you're most active in the markets</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="strategy-description">Strategy Description</Label>
                <Textarea
                  id="strategy-description"
                  className="min-h-[150px]"
                  defaultValue="My trading strategy combines technical analysis with macroeconomic fundamentals. I primarily use price action, key support/resistance levels, and momentum indicators to identify entry and exit points. I focus on high-probability setups with at least a 1:3 risk-reward ratio. For risk management, I never risk more than 2% of my account on any single trade and use proper position sizing based on volatility."
                />
                <p className="text-sm text-muted-foreground">Describe your trading strategy in detail</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="win-rate">Win Rate (%)</Label>
                    <Input id="win-rate" type="number" defaultValue="94" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profit-factor">Profit Factor</Label>
                    <Input id="profit-factor" type="number" defaultValue="4.8" step="0.1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-drawdown">Max Drawdown (%)</Label>
                    <Input id="max-drawdown" type="number" defaultValue="4.2" step="0.1" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Performance Chart</Label>
                <ChartComponent
                  type="line"
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                      {
                        label: "Monthly Return %",
                        data: [15.2, 16.8, 14.5, 17.2, 18.5, 16.9, 19.2, 20.1, 18.7, 21.3, 19.8, 22.3],
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
                <div className="mt-2 flex justify-center">
                  <Button variant="outline">Upload Performance Chart</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="subscription" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Settings</CardTitle>
              <CardDescription>Configure your subscription options for followers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Subscription Fee</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subscription-fee">Monthly Fee ($)</Label>
                    <Input id="subscription-fee" type="number" defaultValue="30" min="10" max="50" />
                    <p className="text-sm text-muted-foreground">Set your monthly subscription fee (between $10-$50)</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Platform Fee</Label>
                    <div className="h-10 px-3 py-2 rounded-md border bg-muted/50">30% ($9.00)</div>
                    <p className="text-sm text-muted-foreground">Platform takes 30% of subscription revenue</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Your Earnings</Label>
                  <div className="h-10 px-3 py-2 rounded-md border bg-primary/10 text-primary font-medium">
                    70% ($21.00 per subscriber)
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-medium">Subscription Visibility</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="public-profile">Public Profile</Label>
                    <p className="text-sm text-muted-foreground">Make your profile visible to all users</p>
                  </div>
                  <Switch id="public-profile" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="featured">Featured Trader</Label>
                    <p className="text-sm text-muted-foreground">
                      Apply to be featured on the homepage (requires approval)
                    </p>
                  </div>
                  <Switch id="featured" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="accepting-followers">Accepting New Followers</Label>
                    <p className="text-sm text-muted-foreground">Allow new users to subscribe to your account</p>
                  </div>
                  <Switch id="accepting-followers" defaultChecked />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-medium">Subscription Limits</h3>
                <div className="space-y-2">
                  <Label htmlFor="max-followers">Maximum Followers</Label>
                  <Input id="max-followers" type="number" defaultValue="2000" />
                  <p className="text-sm text-muted-foreground">
                    Set a cap on the number of followers (leave empty for unlimited)
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="waitlist">Enable Waitlist</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow users to join a waitlist when you reach your follower limit
                    </p>
                  </div>
                  <Switch id="waitlist" defaultChecked />
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

