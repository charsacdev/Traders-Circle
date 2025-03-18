import { ArrowRight, CreditCard, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ConnectAccountPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Connect MT5 Account</h1>
        <p className="text-muted-foreground">Link your MetaTrader 5 account to start copy trading</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Important Information</AlertTitle>
        <AlertDescription>
          To connect your MT5 account, you'll need your account credentials from your broker. Make sure you have
          completed KYC verification before connecting your account.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Connect MT5 Account</CardTitle>
            <CardDescription>Enter your MT5 account details to connect to our platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="broker">Broker Name</Label>
              <Input id="broker" placeholder="e.g. IC Markets, Pepperstone" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="server">MT5 Server</Label>
              <Input id="server" placeholder="e.g. ICMarkets-Live01" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account-number">Account Number</Label>
              <Input id="account-number" placeholder="e.g. 12345678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Your MT5 account password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Connect Account</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>Your currently connected MT5 accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between space-x-4 rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Primary MT5 Account</p>
                      <p className="text-xs text-muted-foreground">IC Markets • ID: 12345678</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Disconnect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>Understanding the connection process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Connect your MT5 account</p>
                  <p className="text-sm text-muted-foreground">
                    Enter your MT5 account details to establish a secure connection.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Subscribe to Master Accounts</p>
                  <p className="text-sm text-muted-foreground">
                    Browse and select Master Accounts that match your trading style.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Automatic Trade Copying</p>
                  <p className="text-sm text-muted-foreground">
                    Trades from Master Accounts will be automatically copied to your account.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

