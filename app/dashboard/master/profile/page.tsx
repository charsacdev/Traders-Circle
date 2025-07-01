"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Camera,
  Save,
  User,
  Mail,
  Phone,
  FileText,
  TrendingUp,
  Shield,
  CheckCircle,
  Upload,
  RotateCcw,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MasterProfilePage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Morgan",
    email: "alex.morgan@email.com",
    phone: "+234 801 234 5678",
    bio: "Professional forex trader with 8+ years of experience. Specializing in EUR/USD and GBP/USD pairs with a focus on risk management and consistent returns.",
    yearsExperience: "5-10",
    tradingStyle: "swing",
    riskTolerance: "moderate",
    specialties: ["forex", "crypto"],
    profileImage: "/placeholder.svg?height=120&width=120",
  })

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSpecialtyChange = (specialty: string, checked: boolean) => {
    setProfileData((prev) => ({
      ...prev,
      specialties: checked ? [...prev.specialties, specialty] : prev.specialties.filter((s) => s !== specialty),
    }))
  }

  const handleSave = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    })

    setIsLoading(false)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileData((prev) => ({
          ...prev,
          profileImage: e.target?.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const specialtyOptions = [
    { id: "forex", label: "Forex" },
    { id: "crypto", label: "Cryptocurrency" },
    { id: "stocks", label: "Stocks" },
    { id: "commodities", label: "Commodities" },
    { id: "indices", label: "Indices" },
    { id: "options", label: "Options" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your professional trading profile and public information</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            <CheckCircle className="h-3 w-3" />
            Verified Master
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Shield className="h-3 w-3" />
            KYC Approved
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Photo Section */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Profile Photo
            </CardTitle>
            <CardDescription>Upload a professional photo that represents you to potential followers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={profileData.profileImage || "/placeholder.svg"} alt="Profile" />
                <AvatarFallback className="text-2xl">
                  {profileData.firstName[0]}
                  {profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="photo-upload" className="cursor-pointer">
                  <div className="flex items-center justify-center gap-2 rounded-md border border-dashed border-muted-foreground/25 p-4 hover:bg-muted/50 transition-colors">
                    <Upload className="h-4 w-4" />
                    <span className="text-sm">Upload New Photo</span>
                  </div>
                  <Input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </Label>
                <p className="text-xs text-muted-foreground text-center">JPG, PNG or GIF. Max size 5MB.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Profile Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Basic Information
            </CardTitle>
            <CardDescription>Update your personal and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name Fields */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profileData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profileData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+234 801 234 5678"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label htmlFor="bio" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Professional Bio
              </Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                placeholder="Tell potential followers about your trading experience, strategy, and expertise..."
                className="min-h-[120px]"
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground text-right">{profileData.bio.length}/500 characters</p>
            </div>
          </CardContent>
        </Card>

        {/* Trading Information */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Trading Profile
            </CardTitle>
            <CardDescription>Configure your trading preferences and specialties</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Trading Experience & Style */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Select
                  value={profileData.yearsExperience}
                  onValueChange={(value) => handleInputChange("yearsExperience", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tradingStyle">Trading Style</Label>
                <Select
                  value={profileData.tradingStyle}
                  onValueChange={(value) => handleInputChange("tradingStyle", value)}
                >
                  <SelectTrigger>
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
                <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                <Select
                  value={profileData.riskTolerance}
                  onValueChange={(value) => handleInputChange("riskTolerance", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="aggressive">Aggressive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Trading Specialties */}
            <div className="space-y-3">
              <Label>Trading Specialties</Label>
              <p className="text-sm text-muted-foreground">Select the markets and instruments you specialize in</p>
              <div className="grid gap-3 md:grid-cols-3">
                {specialtyOptions.map((specialty) => (
                  <div key={specialty.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={specialty.id}
                      checked={profileData.specialties.includes(specialty.id)}
                      onCheckedChange={(checked) => handleSpecialtyChange(specialty.id, checked as boolean)}
                    />
                    <Label htmlFor={specialty.id} className="text-sm font-normal">
                      {specialty.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Card className="md:col-span-3">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => window.location.reload()} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Reset Changes
                </Button>
                <Button onClick={handleSave} disabled={isLoading} className="gap-2">
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
