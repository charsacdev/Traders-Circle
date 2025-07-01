import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Lock,
  Shield,
  TrendingUp,
  Users,
  Smartphone,
  Zap,
  Eye,
  DollarSign,
  Clock,
  Star,
  AlertTriangle,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Traders Circle</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link href="/features" className="text-sm font-medium text-primary transition-colors hover:text-primary">
                Features
              </Link>
              <Link
                href="/masters"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Top Traders
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                Everything You Need to <span className="text-primary">Copy Trade Like a Pro</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From AI-powered trader vetting to seamless trade copying, we've built every feature with Nigerian
                traders in mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Nigerian Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Works with Any Broker</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Nigerian Traders Choose Us</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We've solved the biggest problems facing Nigerian copy traders
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Trader Vetting</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI analyzes 50+ metrics for 30 days. Only 5% of applicants pass our strict evaluation.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Success Rate</span>
                    <span className="font-semibold">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Your Broker, Your Control</h3>
                <p className="text-muted-foreground mb-4">
                  Your funds stay with YOUR chosen Nigerian broker. We never touch your money.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-green-800">100% Fund Security</div>
                  <div className="text-xs text-green-600">Complete control over withdrawals</div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lightning-Fast Execution</h3>
                <p className="text-muted-foreground mb-4">
                  Trades copied in under 100 milliseconds. Never miss profitable opportunities again.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-800">&lt; 100 milliseconds Latency</div>
                  <div className="text-xs text-blue-600">Faster than manual trading</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="ai-vetting" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-4xl grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="ai-vetting">AI Vetting</TabsTrigger>
                  <TabsTrigger value="copy-trading">Copy Trading</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="ai-vetting" className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">AI-Powered Trader Verification</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Our AI doesn't just check if traders are profitable - it ensures they're consistently profitable
                    with proper risk management
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Eye className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">30-Day Deep Analysis</h3>
                        <p className="text-muted-foreground">Comprehensive performance evaluation</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Win rate consistency tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Maximum drawdown analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Risk-to-reward ratio evaluation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Trading frequency patterns</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Emotional stability indicators</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">AI Scoring System</h3>
                        <p className="text-muted-foreground">Objective performance rating</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Consistency Score</span>
                          <span className="text-primary font-bold">9.2/10</span>
                        </div>
                        <Progress value={92} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Risk Management</span>
                          <span className="text-primary font-bold">8.8/10</span>
                        </div>
                        <Progress value={88} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Profitability</span>
                          <span className="text-primary font-bold">9.5/10</span>
                        </div>
                        <Progress value={95} className="h-3" />
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">Overall AI Score: 9.2/10</div>
                          <div className="text-sm text-muted-foreground">Top 5% of all applicants</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="bg-background rounded-xl p-8 border">
                  <h3 className="text-2xl font-bold mb-6 text-center">What Our AI Checks</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Profit Consistency</h4>
                      <p className="text-sm text-muted-foreground">Monthly profit stability over time</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Risk Control</h4>
                      <p className="text-sm text-muted-foreground">Maximum drawdown limits</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Trade Timing</h4>
                      <p className="text-sm text-muted-foreground">Entry and exit precision</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                        <Star className="h-6 w-6 text-orange-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Win Rate</h4>
                      <p className="text-sm text-muted-foreground">Minimum 80% success rate</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="copy-trading" className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Advanced Copy Trading Technology</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Lightning-fast execution with intelligent position sizing and risk management
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <Card className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Ultra-Fast Execution</h3>
                    <p className="text-muted-foreground mb-4">
                      Trades copied in under 100 milliseconds with 99.9% uptime guarantee.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Execution Speed</span>
                        <span className="font-semibold text-green-600">&lt; 100 milliseconds</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>System Uptime</span>
                        <span className="font-semibold text-green-600">99.9%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Slippage</span>
                        <span className="font-semibold text-green-600">&lt; 0.1 pips</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Smart Position Sizing</h3>
                    <p className="text-muted-foreground mb-4">
                      Automatically adjusts trade sizes based on your account balance and risk tolerance.
                    </p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-xs text-muted-foreground mb-1">Example:</div>
                      <div className="text-sm">Master trades 1 lot</div>
                      <div className="text-sm">Your account: ₦500k</div>
                      <div className="text-sm font-semibold text-primary">You trade: 0.1 lot</div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Multi-Master Copying</h3>
                    <p className="text-muted-foreground mb-4">
                      Follow up to 10 master traders simultaneously with individual risk settings.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm">Forex Master (30%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Crypto Master (25%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Stocks Master (20%)</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="bg-background rounded-xl p-8 border">
                  <h3 className="text-2xl font-bold mb-6 text-center">Copy Trading Process</h3>
                  <div className="grid gap-8 md:grid-cols-4">
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        1
                      </div>
                      <h4 className="font-semibold mb-2">Master Places Trade</h4>
                      <p className="text-sm text-muted-foreground">Expert trader executes a trade on their account</p>
                    </div>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        2
                      </div>
                      <h4 className="font-semibold mb-2">AI Validates Trade</h4>
                      <p className="text-sm text-muted-foreground">
                        Our system checks trade parameters and risk levels
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        3
                      </div>
                      <h4 className="font-semibold mb-2">Position Sizing</h4>
                      <p className="text-sm text-muted-foreground">Trade size adjusted based on your account balance</p>
                    </div>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        4
                      </div>
                      <h4 className="font-semibold mb-2">Instant Execution</h4>
                      <p className="text-sm text-muted-foreground">
                        Trade copied to your account in under 100 milliseconds
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="security" className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Bank-Level Security</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Your funds and data are protected with military-grade security measures
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                        <Shield className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Fund Security</h3>
                        <p className="text-muted-foreground">Your money stays with your broker</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Funds never leave your broker account</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>You control all withdrawals and deposits</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Works with regulated Nigerian brokers</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Disconnect anytime with one click</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-800">100% Fund Security Guarantee</div>
                      <div className="text-sm text-green-600">We never touch your trading capital</div>
                    </div>
                  </Card>

                  <Card className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <Lock className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Data Protection</h3>
                        <p className="text-muted-foreground">Military-grade encryption</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>256-bit SSL encryption</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Two-factor authentication (2FA)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Regular security audits</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>GDPR compliant data handling</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-800">ISO 27001 Certified</div>
                      <div className="text-sm text-blue-600">International security standards</div>
                    </div>
                  </Card>
                </div>

                <div className="bg-background rounded-xl p-8 border">
                  <h3 className="text-2xl font-bold mb-6 text-center">Security Features</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Risk Monitoring</h4>
                      <p className="text-sm text-muted-foreground">24/7 automated risk detection and alerts</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                        <Eye className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Account Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Real-time account activity tracking</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                        <Lock className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Secure API</h4>
                      <p className="text-sm text-muted-foreground">Encrypted broker connections</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="support" className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Nigerian Customer Support</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Get help in your language, on your schedule, from people who understand Nigerian trading
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-6">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Headphones className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">24/7 Nigerian Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Real Nigerian support agents available round the clock via WhatsApp, phone, and email.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">WhatsApp support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Phone support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Email support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Live chat</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Mobile-First Design</h3>
                    <p className="text-muted-foreground mb-4">
                      Optimized for Nigerian mobile users with offline capabilities and low data usage.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Works on 2G/3G networks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Offline mode available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Low data consumption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">PWA app available</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Local Payment Methods</h3>
                    <p className="text-muted-foreground mb-4">
                      Pay with your preferred Nigerian payment method including bank transfer and USSD.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Bank transfer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">USSD payments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Paystack integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Flutterwave support</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="bg-background rounded-xl p-8 border">
                  <h3 className="text-2xl font-bold mb-6 text-center">Support Response Times</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">&lt; 5 minutes</div>
                      <div className="font-semibold">WhatsApp Response</div>
                      <div className="text-sm text-muted-foreground">Average response time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">&lt; 15 minutes</div>
                      <div className="font-semibold">Live Chat</div>
                      <div className="text-sm text-muted-foreground">During business hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">&lt; 2 hours</div>
                      <div className="font-semibold">Email Support</div>
                      <div className="text-sm text-muted-foreground">Detailed responses</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">How We Compare</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See why Nigerian traders choose Traders Circle over other platforms
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold text-primary">Traders Circle</th>
                    <th className="text-center p-4 font-semibold">Other Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 font-medium">AI Trader Vetting</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-red-500 font-bold">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-muted/30">
                    <td className="p-4 font-medium">Your Funds Stay with Your Broker</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-red-500 font-bold">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Pay Only on Profits (HWM)</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-red-500 font-bold">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-muted/30">
                    <td className="p-4 font-medium">Nigerian Customer Support</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-red-500 font-bold">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Local Payment Methods</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-red-500 font-bold">✗</span>
                    </td>
                  </tr>
                  <tr className="border-t bg-muted/30">
                    <td className="p-4 font-medium">Mobile Optimized for Nigeria</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-red-500 font-bold">✗</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-2xl bg-primary p-8 md:p-12 shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl mb-4">
                  Ready to Experience These Features?
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8">
                  Join 5,000+ Nigerian traders who trust our AI-vetted platform. Start with a free account and see the
                  difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Start Free Account
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Book a Demo
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 text-primary-foreground/80">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">No Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Nigerian Support</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Risk-Free Trial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Traders Circle</span>
              </div>
              <p className="text-muted-foreground">
                Nigeria's most advanced copy trading platform with AI-powered trader verification.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/masters" className="text-muted-foreground hover:text-primary">
                    Top Traders
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/risk" className="text-muted-foreground hover:text-primary">
                    Risk Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-muted-foreground hover:text-primary">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">support@traderscircle.ng</li>
                <li className="text-muted-foreground">+234 (0) 123-456-7890</li>
                <li className="text-muted-foreground">Lagos, Nigeria</li>
                <li className="text-muted-foreground">WhatsApp: +234 (0) 123-456-7890</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Traders Circle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
