import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MasterAccountCard from "@/components/master-account-card"

export default function MastersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Master Accounts</h1>
        <p className="text-muted-foreground">Browse and subscribe to top-performing traders</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search master accounts..." className="pl-8" />
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

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="forex">Forex</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="stocks">Stocks</TabsTrigger>
          <TabsTrigger value="commodities">Commodities</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MasterAccountCard
              name="Alex Morgan"
              specialty="Forex"
              winRate={94}
              followers={1240}
              trades={3450}
              monthlyFee={30}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Sarah Chen"
              specialty="Crypto"
              winRate={91}
              followers={980}
              trades={2780}
              monthlyFee={25}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Michael Rodriguez"
              specialty="Commodities"
              winRate={89}
              followers={1560}
              trades={4120}
              monthlyFee={35}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="David Kim"
              specialty="Forex"
              winRate={88}
              followers={720}
              trades={1890}
              monthlyFee={20}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Emma Wilson"
              specialty="Stocks"
              winRate={87}
              followers={950}
              trades={2340}
              monthlyFee={30}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="James Taylor"
              specialty="Crypto"
              winRate={86}
              followers={830}
              trades={1750}
              monthlyFee={25}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Olivia Martinez"
              specialty="Forex"
              winRate={85}
              followers={680}
              trades={1520}
              monthlyFee={20}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Robert Johnson"
              specialty="Commodities"
              winRate={84}
              followers={590}
              trades={1320}
              monthlyFee={15}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Sophia Lee"
              specialty="Stocks"
              winRate={83}
              followers={520}
              trades={1180}
              monthlyFee={15}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>
        <TabsContent value="forex" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MasterAccountCard
              name="Alex Morgan"
              specialty="Forex"
              winRate={94}
              followers={1240}
              trades={3450}
              monthlyFee={30}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="David Kim"
              specialty="Forex"
              winRate={88}
              followers={720}
              trades={1890}
              monthlyFee={20}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Olivia Martinez"
              specialty="Forex"
              winRate={85}
              followers={680}
              trades={1520}
              monthlyFee={20}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
          </div>
        </TabsContent>
        <TabsContent value="crypto" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MasterAccountCard
              name="Sarah Chen"
              specialty="Crypto"
              winRate={91}
              followers={980}
              trades={2780}
              monthlyFee={25}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="James Taylor"
              specialty="Crypto"
              winRate={86}
              followers={830}
              trades={1750}
              monthlyFee={25}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
          </div>
        </TabsContent>
        <TabsContent value="stocks" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MasterAccountCard
              name="Emma Wilson"
              specialty="Stocks"
              winRate={87}
              followers={950}
              trades={2340}
              monthlyFee={30}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Sophia Lee"
              specialty="Stocks"
              winRate={83}
              followers={520}
              trades={1180}
              monthlyFee={15}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
          </div>
        </TabsContent>
        <TabsContent value="commodities" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MasterAccountCard
              name="Michael Rodriguez"
              specialty="Commodities"
              winRate={89}
              followers={1560}
              trades={4120}
              monthlyFee={35}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
            <MasterAccountCard
              name="Robert Johnson"
              specialty="Commodities"
              winRate={84}
              followers={590}
              trades={1320}
              monthlyFee={15}
              avatarUrl="/placeholder.svg?height=100&width=100"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

