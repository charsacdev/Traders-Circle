import Link from "next/link"
import { ArrowRight, Search, SlidersHorizontal, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MasterAccountCard from "@/components/master-account-card"

export default function TopTradersPage() {
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
              <Link
                href="/features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link href="/masters" className="text-sm font-medium text-primary transition-colors hover:text-primary">
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
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Top Performing Traders</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover and follow expert traders with proven track records
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search traders by name or specialty..." className="pl-8" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Select defaultValue="winRate">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="winRate">Win Rate</SelectItem>
                    <SelectItem value="followers">Followers</SelectItem>
                    <SelectItem value="trades">Number of Trades</SelectItem>
                    <SelectItem value="fee">Monthly Fee</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Traders List */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="forex">Forex</TabsTrigger>
                <TabsTrigger value="crypto">Crypto</TabsTrigger>
                <TabsTrigger value="stocks">Stocks</TabsTrigger>
                <TabsTrigger value="commodities">Commodities</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Link href="/masters/alex-morgan">
                    <MasterAccountCard
                      name="Alex Morgan"
                      specialty="Forex"
                      winRate={94}
                      followers={1240}
                      trades={3450}
                      monthlyFee={30}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/sarah-chen">
                    <MasterAccountCard
                      name="Sarah Chen"
                      specialty="Crypto"
                      winRate={91}
                      followers={980}
                      trades={2780}
                      monthlyFee={25}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/michael-rodriguez">
                    <MasterAccountCard
                      name="Michael Rodriguez"
                      specialty="Commodities"
                      winRate={89}
                      followers={1560}
                      trades={4120}
                      monthlyFee={35}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/david-kim">
                    <MasterAccountCard
                      name="David Kim"
                      specialty="Forex"
                      winRate={88}
                      followers={720}
                      trades={1890}
                      monthlyFee={20}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/emma-wilson">
                    <MasterAccountCard
                      name="Emma Wilson"
                      specialty="Stocks"
                      winRate={87}
                      followers={950}
                      trades={2340}
                      monthlyFee={30}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/james-taylor">
                    <MasterAccountCard
                      name="James Taylor"
                      specialty="Crypto"
                      winRate={86}
                      followers={830}
                      trades={1750}
                      monthlyFee={25}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/olivia-martinez">
                    <MasterAccountCard
                      name="Olivia Martinez"
                      specialty="Forex"
                      winRate={85}
                      followers={680}
                      trades={1520}
                      monthlyFee={20}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/robert-johnson">
                    <MasterAccountCard
                      name="Robert Johnson"
                      specialty="Commodities"
                      winRate={84}
                      followers={590}
                      trades={1320}
                      monthlyFee={15}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/sophia-lee">
                    <MasterAccountCard
                      name="Sophia Lee"
                      specialty="Stocks"
                      winRate={83}
                      followers={520}
                      trades={1180}
                      monthlyFee={15}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline">Load More</Button>
                </div>
              </TabsContent>

              {/* Other tabs would have similar content but filtered */}
              <TabsContent value="forex" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Link href="/masters/alex-morgan">
                    <MasterAccountCard
                      name="Alex Morgan"
                      specialty="Forex"
                      winRate={94}
                      followers={1240}
                      trades={3450}
                      monthlyFee={30}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/david-kim">
                    <MasterAccountCard
                      name="David Kim"
                      specialty="Forex"
                      winRate={88}
                      followers={720}
                      trades={1890}
                      monthlyFee={20}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/olivia-martinez">
                    <MasterAccountCard
                      name="Olivia Martinez"
                      specialty="Forex"
                      winRate={85}
                      followers={680}
                      trades={1520}
                      monthlyFee={20}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="crypto" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Link href="/masters/sarah-chen">
                    <MasterAccountCard
                      name="Sarah Chen"
                      specialty="Crypto"
                      winRate={91}
                      followers={980}
                      trades={2780}
                      monthlyFee={25}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/james-taylor">
                    <MasterAccountCard
                      name="James Taylor"
                      specialty="Crypto"
                      winRate={86}
                      followers={830}
                      trades={1750}
                      monthlyFee={25}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="stocks" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Link href="/masters/emma-wilson">
                    <MasterAccountCard
                      name="Emma Wilson"
                      specialty="Stocks"
                      winRate={87}
                      followers={950}
                      trades={2340}
                      monthlyFee={30}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/sophia-lee">
                    <MasterAccountCard
                      name="Sophia Lee"
                      specialty="Stocks"
                      winRate={83}
                      followers={520}
                      trades={1180}
                      monthlyFee={15}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="commodities" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Link href="/masters/michael-rodriguez">
                    <MasterAccountCard
                      name="Michael Rodriguez"
                      specialty="Commodities"
                      winRate={89}
                      followers={1560}
                      trades={4120}
                      monthlyFee={35}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                  <Link href="/masters/robert-johnson">
                    <MasterAccountCard
                      name="Robert Johnson"
                      specialty="Commodities"
                      winRate={84}
                      followers={590}
                      trades={1320}
                      monthlyFee={15}
                      avatarUrl="/placeholder.svg?height=100&width=100"
                    />
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-2xl bg-primary p-8 md:p-12 shadow-lg">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                    Ready to Start Copy Trading?
                  </h2>
                  <p className="mt-4 text-lg text-primary-foreground/90">
                    Create an account today to follow these expert traders and start improving your trading results.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Create Account
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Learn More
                  </Button>
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
                The premier platform for copy trading with verified expert traders.
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
                <li className="text-muted-foreground">support@traderscircle.com</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
                <li className="text-muted-foreground">123 Trading St, Financial District</li>
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

