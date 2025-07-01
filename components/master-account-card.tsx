"use client"

import { Users } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface MasterAccountCardProps {
  name: string
  specialty: string
  winRate: number
  followers: number
  trades: number
  avatarUrl: string
  onViewProfile: () => void
}

export default function MasterAccountCard({
  name,
  specialty,
  winRate,
  followers,
  trades,
  avatarUrl,
  onViewProfile,
}: MasterAccountCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-105 duration-300">
      <CardHeader className="p-0">
        <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10 relative">
          <div className="absolute -bottom-10 left-6">
            <Avatar className="h-20 w-20 border-4 border-background">
              <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-12 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-xl">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                {specialty}
              </Badge>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Users className="h-3 w-3" />
                {followers} followers
              </div>
            </div>
          </div>
          <div className="bg-primary/10 text-primary font-medium rounded-full px-3 py-1 text-sm">{winRate}% Win</div>
        </div>

        <div className="mt-6">
          <div className="bg-muted rounded-lg p-3">
            <div className="text-xs text-muted-foreground">Total Trades</div>
            <div className="font-semibold">{trades.toLocaleString()}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onViewProfile}>
          View Profile
        </Button>
      </CardFooter>
    </Card>
  )
}
