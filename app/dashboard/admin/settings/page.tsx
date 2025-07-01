"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import {
  User,
  Settings,
  Shield,
  DollarSign,
  Bell,
  Upload,
  Save,
  Eye,
  EyeOff,
  Lock,
  Smartphone,
  Globe,
  AlertTriangle,
} from "lucide-react"

export default function AdminSettingsPage() {
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Profile state
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Admin",
    email: "admin@traderscircle.com",
    phone: "+234 801 234 5678",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  // Platform fees state
  const [feeSettings, setFeeSettings] = useState({
    masterCommission: 20,
    transactionFee: 2.5,
    withdrawalFee: 100,
    minWithdrawal: 5000,
    referralPercentage: 5,
    referralTier2: 2,
  })

  // System settings state
  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    userRegistration: true,
    masterAutoApproval: false,
    emailNotifications: true,
    smsNotifications: true,
    twoFactorRequired: false,
  })

  // Security settings state
  const [securitySettings, setSecuritySettings] = useState({
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    ipWhitelist: "",
    twoFactorAuth: true,
  })

  const handleSaveProfile = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveFees = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Fees Updated",
        description: "Platform fees have been successfully updated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update fees. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSystem = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "System Settings Updated",
        description: "System configuration has been successfully updated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update system settings. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSecurity = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Security Settings Updated",
        description: "Security configuration has been successfully updated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update security settings. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Settings className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Settings</h1>
              <p className="text-gray-600">Manage your profile and platform configuration</p>
            </div>
          </div>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="fees" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Fees</span>
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">System</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Management
                </CardTitle>
                <CardDescription>Update your personal information and account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Photo */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      JA
                    </div>
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2 h-8 w-8">
                      <Upload className="h-3 w-3" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold">Profile Photo</h3>
                    <p className="text-sm text-gray-600">Upload a new profile picture</p>
                  </div>
                </div>

                <Separator />

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <Separator />

                {/* Password Change */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Change Password
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={showPassword ? "text" : "password"}
                          value={profileData.currentPassword}
                          onChange={(e) => setProfileData({ ...profileData, currentPassword: e.target.value })}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={profileData.newPassword}
                          onChange={(e) => setProfileData({ ...profileData, newPassword: e.target.value })}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={profileData.confirmPassword}
                        onChange={(e) => setProfileData({ ...profileData, confirmPassword: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveProfile} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "Saving..." : "Save Profile"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Platform Fees Tab */}
          <TabsContent value="fees">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Platform Fees Configuration
                </CardTitle>
                <CardDescription>Manage commission rates and subscription fees</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Commission Settings */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Commission Rates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="masterCommission">Master Commission (%)</Label>
                      <Input
                        id="masterCommission"
                        type="number"
                        value={feeSettings.masterCommission}
                        onChange={(e) => setFeeSettings({ ...feeSettings, masterCommission: Number(e.target.value) })}
                      />
                      <p className="text-sm text-gray-600">
                        Platform takes {feeSettings.masterCommission}% from master earnings
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="transactionFee">Transaction Fee (%)</Label>
                      <Input
                        id="transactionFee"
                        type="number"
                        step="0.1"
                        value={feeSettings.transactionFee}
                        onChange={(e) => setFeeSettings({ ...feeSettings, transactionFee: Number(e.target.value) })}
                      />
                      <p className="text-sm text-gray-600">Fee charged on each transaction</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Referral Settings */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Referral Settings (%)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="referralPercentage">Referral Commission (%)</Label>
                      <Input
                        id="referralPercentage"
                        type="number"
                        step="0.1"
                        value={feeSettings.referralPercentage}
                        onChange={(e) => setFeeSettings({ ...feeSettings, referralPercentage: Number(e.target.value) })}
                      />
                      <p className="text-sm text-gray-600">Percentage earned from referred user activities</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="referralTier2">Tier 2 Referral (%)</Label>
                      <Input
                        id="referralTier2"
                        type="number"
                        step="0.1"
                        value={feeSettings.referralTier2}
                        onChange={(e) => setFeeSettings({ ...feeSettings, referralTier2: Number(e.target.value) })}
                      />
                      <p className="text-sm text-gray-600">Second-level referral commission rate</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Withdrawal Settings */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Withdrawal Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="withdrawalFee">Withdrawal Fee (₦)</Label>
                      <Input
                        id="withdrawalFee"
                        type="number"
                        value={feeSettings.withdrawalFee}
                        onChange={(e) => setFeeSettings({ ...feeSettings, withdrawalFee: Number(e.target.value) })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="minWithdrawal">Minimum Withdrawal (₦)</Label>
                      <Input
                        id="minWithdrawal"
                        type="number"
                        value={feeSettings.minWithdrawal}
                        onChange={(e) => setFeeSettings({ ...feeSettings, minWithdrawal: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveFees} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "Saving..." : "Save Fee Settings"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Configuration Tab */}
          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  System Configuration
                </CardTitle>
                <CardDescription>Manage platform-wide settings and controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Platform Controls */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Platform Controls</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="font-medium">Maintenance Mode</span>
                        </div>
                        <p className="text-sm text-gray-600">Temporarily disable platform access for maintenance</p>
                      </div>
                      <Switch
                        checked={systemSettings.maintenanceMode}
                        onCheckedChange={(checked) =>
                          setSystemSettings({ ...systemSettings, maintenanceMode: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <span className="font-medium">User Registration</span>
                        <p className="text-sm text-gray-600">Allow new users to register on the platform</p>
                      </div>
                      <Switch
                        checked={systemSettings.userRegistration}
                        onCheckedChange={(checked) =>
                          setSystemSettings({ ...systemSettings, userRegistration: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <span className="font-medium">Master Auto-Approval</span>
                        <p className="text-sm text-gray-600">Automatically approve master trader applications</p>
                      </div>
                      <Switch
                        checked={systemSettings.masterAutoApproval}
                        onCheckedChange={(checked) =>
                          setSystemSettings({ ...systemSettings, masterAutoApproval: checked })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Notification Settings */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Notification Settings
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <span className="font-medium">Email Notifications</span>
                        <p className="text-sm text-gray-600">Send email notifications to users</p>
                      </div>
                      <Switch
                        checked={systemSettings.emailNotifications}
                        onCheckedChange={(checked) =>
                          setSystemSettings({ ...systemSettings, emailNotifications: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4" />
                          <span className="font-medium">SMS Notifications</span>
                        </div>
                        <p className="text-sm text-gray-600">Send SMS notifications to users</p>
                      </div>
                      <Switch
                        checked={systemSettings.smsNotifications}
                        onCheckedChange={(checked) =>
                          setSystemSettings({ ...systemSettings, smsNotifications: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <span className="font-medium">Require 2FA for Masters</span>
                        <p className="text-sm text-gray-600">Force two-factor authentication for master accounts</p>
                      </div>
                      <Switch
                        checked={systemSettings.twoFactorRequired}
                        onCheckedChange={(checked) =>
                          setSystemSettings({ ...systemSettings, twoFactorRequired: checked })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveSystem} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "Saving..." : "Save System Settings"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>Configure security and access controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Session Management */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Session Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                      <Select
                        value={securitySettings.sessionTimeout.toString()}
                        onValueChange={(value) =>
                          setSecuritySettings({ ...securitySettings, sessionTimeout: Number(value) })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="120">2 hours</SelectItem>
                          <SelectItem value="480">8 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                      <Input
                        id="maxLoginAttempts"
                        type="number"
                        value={securitySettings.maxLoginAttempts}
                        onChange={(e) =>
                          setSecuritySettings({ ...securitySettings, maxLoginAttempts: Number(e.target.value) })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Access Control */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Access Control</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ipWhitelist">IP Whitelist</Label>
                      <Textarea
                        id="ipWhitelist"
                        placeholder="Enter IP addresses (one per line)"
                        value={securitySettings.ipWhitelist}
                        onChange={(e) => setSecuritySettings({ ...securitySettings, ipWhitelist: e.target.value })}
                        rows={4}
                      />
                      <p className="text-sm text-gray-600">Restrict admin access to specific IP addresses</p>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <span className="font-medium">Two-Factor Authentication</span>
                        <p className="text-sm text-gray-600">Enable 2FA for your admin account</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={securitySettings.twoFactorAuth ? "default" : "secondary"}>
                          {securitySettings.twoFactorAuth ? "Enabled" : "Disabled"}
                        </Badge>
                        <Switch
                          checked={securitySettings.twoFactorAuth}
                          onCheckedChange={(checked) =>
                            setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Active Sessions */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="font-medium">Current Session</span>
                        </div>
                        <p className="text-sm text-gray-600">Chrome on Windows • Lagos, Nigeria</p>
                        <p className="text-xs text-gray-500">Last active: Just now</p>
                      </div>
                      <Badge variant="outline">Current</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <span className="font-medium">Mobile Session</span>
                        <p className="text-sm text-gray-600">Safari on iPhone • Lagos, Nigeria</p>
                        <p className="text-xs text-gray-500">Last active: 2 hours ago</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveSecurity} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "Saving..." : "Save Security Settings"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
