"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Bell,
  CreditCard,
  Home,
  LineChart,
  Menu,
  Package,
  Settings,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Determine if we're in a slave, master, or admin dashboard
  const isDashboardRoot = pathname === "/dashboard"
  const isSlaveAccount = pathname.includes("/dashboard/slave")
  const isMasterAccount = pathname.includes("/dashboard/master")
  const isAdmin = pathname.includes("/dashboard/admin")

  const dashboardType = isSlaveAccount ? "slave" : isMasterAccount ? "master" : isAdmin ? "admin" : ""

  const slaveNavItems = [
    { name: "Overview", href: "/dashboard/slave", icon: Home },
    { name: "Connect Account", href: "/dashboard/slave/connect", icon: CreditCard },
    { name: "Master Accounts", href: "/dashboard/slave/masters", icon: Users },
    { name: "My Trades", href: "/dashboard/slave/trades", icon: LineChart },
    { name: "Subscriptions", href: "/dashboard/slave/subscriptions", icon: Package },
    { name: "Settings", href: "/dashboard/slave/settings", icon: Settings },
  ]

  const masterNavItems = [
    { name: "Overview", href: "/dashboard/master", icon: Home },
    { name: "Performance", href: "/dashboard/master/performance", icon: LineChart },
    { name: "Followers", href: "/dashboard/master/followers", icon: Users },
    { name: "Earnings", href: "/dashboard/master/earnings", icon: TrendingUp },
    { name: "Profile", href: "/dashboard/master/profile", icon: User },
    { name: "Settings", href: "/dashboard/master/settings", icon: Settings },
  ]

  const adminNavItems = [
    { name: "Overview", href: "/dashboard/admin", icon: Home },
    { name: "User Management", href: "/dashboard/admin/users", icon: Users },
    { name: "Master Accounts", href: "/dashboard/admin/masters", icon: LineChart },
    { name: "Billing", href: "/dashboard/admin/billing", icon: CreditCard },
    { name: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/admin/settings", icon: Settings },
  ]

  const navItems = isSlaveAccount ? slaveNavItems : isMasterAccount ? masterNavItems : isAdmin ? adminNavItems : []

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="flex items-center gap-2 pb-4 pt-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span className="font-bold text-xl">Traders Circle</span>
                </div>
                <nav className="grid gap-2 text-lg font-medium">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                          pathname === item.href
                            ? "bg-muted text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="hidden md:inline-block">Traders Circle</span>
            </Link>
            {dashboardType && (
              <div className="hidden md:flex items-center gap-6 text-sm">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-2 ${
                        pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <X className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/30">
        <div className="container py-6 md:py-8">{children}</div>
      </main>
    </div>
  )
}
