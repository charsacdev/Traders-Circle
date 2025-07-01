"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CreditCard, Info, CheckCircle, XCircle, AlertTriangle, Loader2, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface FormData {
  broker: string
  server: string
  accountNumber: string
  password: string
}

interface FormErrors {
  broker?: string
  server?: string
  accountNumber?: string
  password?: string
}

export default function ConnectAccountPage() {
  const [formData, setFormData] = useState<FormData>({
    broker: "",
    server: "",
    accountNumber: "",
    password: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Modal states
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [showDisconnectModal, setShowDisconnectModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Connected accounts state
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Primary MT5 Account",
      broker: "IC Markets",
      accountId: "12345678",
      status: "connected",
    },
  ])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.broker.trim()) {
      newErrors.broker = "Broker name is required"
    }

    if (!formData.server.trim()) {
      newErrors.server = "MT5 server is required"
    }

    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = "Account number is required"
    } else if (!/^\d+$/.test(formData.accountNumber)) {
      newErrors.accountNumber = "Account number must contain only numbers"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.3

      if (isSuccess) {
        // Add new account to connected accounts
        const newAccount = {
          id: Date.now(),
          name: `${formData.broker} Account`,
          broker: formData.broker,
          accountId: formData.accountNumber,
          status: "connected",
        }
        setConnectedAccounts((prev) => [...prev, newAccount])

        // Reset form
        setFormData({ broker: "", server: "", accountNumber: "", password: "" })
        setShowSuccessModal(true)
      } else {
        setErrorMessage("Failed to connect to MT5 account. Please check your credentials and try again.")
        setShowErrorModal(true)
      }
    } catch (error) {
      setErrorMessage("Network error occurred. Please check your internet connection and try again.")
      setShowErrorModal(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnect = (accountId: number) => {
    setShowDisconnectModal(true)
  }

  const confirmDisconnect = () => {
    setConnectedAccounts((prev) => prev.filter((account) => account.id !== 1))
    setShowDisconnectModal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Connect MT5 Account
          </h1>
          <p className="text-muted-foreground mt-2">Link your MetaTrader 5 account to start copy trading</p>
        </div>

        {/* Important Information Alert */}
        <Alert className="border-blue-200 bg-blue-50/50 backdrop-blur-sm">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">Important Information</AlertTitle>
          <AlertDescription className="text-blue-700">
            To connect your MT5 account, you'll need your account credentials from your broker. Make sure you have
            completed KYC verification before connecting your account.
          </AlertDescription>
        </Alert>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Connection Form */}
          <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Connect MT5 Account
              </CardTitle>
              <CardDescription className="text-blue-100">
                Enter your MT5 account details to connect to our platform
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleConnect}>
              <CardContent className="space-y-6 p-6">
                {/* Broker Name */}
                <div className="space-y-2">
                  <Label htmlFor="broker" className="text-sm font-medium">
                    Broker Name *
                  </Label>
                  <Input
                    id="broker"
                    value={formData.broker}
                    onChange={(e) => handleInputChange("broker", e.target.value)}
                    placeholder="e.g. IC Markets, Pepperstone"
                    className={`transition-all duration-200 ${
                      errors.broker
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : formData.broker
                          ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                          : ""
                    }`}
                  />
                  {errors.broker && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <XCircle className="h-4 w-4" />
                      {errors.broker}
                    </p>
                  )}
                  {formData.broker && !errors.broker && (
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Broker name looks good
                    </p>
                  )}
                </div>

                {/* MT5 Server */}
                <div className="space-y-2">
                  <Label htmlFor="server" className="text-sm font-medium">
                    MT5 Server *
                  </Label>
                  <Input
                    id="server"
                    value={formData.server}
                    onChange={(e) => handleInputChange("server", e.target.value)}
                    placeholder="e.g. ICMarkets-Live01"
                    className={`transition-all duration-200 ${
                      errors.server
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : formData.server
                          ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                          : ""
                    }`}
                  />
                  {errors.server && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <XCircle className="h-4 w-4" />
                      {errors.server}
                    </p>
                  )}
                  {formData.server && !errors.server && (
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Server name looks good
                    </p>
                  )}
                </div>

                {/* Account Number */}
                <div className="space-y-2">
                  <Label htmlFor="account-number" className="text-sm font-medium">
                    Account Number *
                  </Label>
                  <Input
                    id="account-number"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                    placeholder="e.g. 12345678"
                    className={`transition-all duration-200 ${
                      errors.accountNumber
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : formData.accountNumber && !errors.accountNumber
                          ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                          : ""
                    }`}
                  />
                  {errors.accountNumber && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <XCircle className="h-4 w-4" />
                      {errors.accountNumber}
                    </p>
                  )}
                  {formData.accountNumber && !errors.accountNumber && (
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Account number is valid
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password *
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Your MT5 account password"
                      className={`pr-10 transition-all duration-200 ${
                        errors.password
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : formData.password && !errors.password
                            ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                            : ""
                      }`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <XCircle className="h-4 w-4" />
                      {errors.password}
                    </p>
                  )}
                  {formData.password && !errors.password && (
                    <p className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Password meets requirements
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Connect Account
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Connected Accounts */}
            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Connected Accounts
                </CardTitle>
                <CardDescription>Your currently connected MT5 accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {connectedAccounts.length > 0 ? (
                    connectedAccounts.map((account) => (
                      <div
                        key={account.id}
                        className="flex items-center justify-between space-x-4 rounded-lg border border-green-200 bg-green-50/50 p-4 transition-all duration-200 hover:shadow-md"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-green-100 rounded-full">
                            <CreditCard className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{account.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {account.broker} • ID: {account.accountId}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDisconnect(account.id)}
                          className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                        >
                          Disconnect
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No accounts connected yet</p>
                      <p className="text-sm">Connect your first MT5 account to get started</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  How It Works
                </CardTitle>
                <CardDescription>Understanding the connection process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
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
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl font-semibold text-green-800">Account Connected Successfully!</DialogTitle>
            <DialogDescription className="text-center">
              Your MT5 account has been successfully connected to Traders Circle. You can now start copy trading with
              our verified master traders.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button onClick={() => setShowSuccessModal(false)} className="bg-green-600 hover:bg-green-700">
              Continue Trading
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Error Modal */}
      <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <DialogTitle className="text-xl font-semibold text-red-800">Connection Failed</DialogTitle>
            <DialogDescription className="text-center">{errorMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center gap-2">
            <Button variant="outline" onClick={() => setShowErrorModal(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setShowErrorModal(false)
                handleConnect(new Event("submit") as any)
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Try Again
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Disconnect Confirmation Modal */}
      <Dialog open={showDisconnectModal} onOpenChange={setShowDisconnectModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <DialogTitle className="text-xl font-semibold">Disconnect Account?</DialogTitle>
            <DialogDescription className="text-center">
              Are you sure you want to disconnect this MT5 account? This will stop all copy trading activities for this
              account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center gap-2">
            <Button variant="outline" onClick={() => setShowDisconnectModal(false)}>
              Cancel
            </Button>
            <Button onClick={confirmDisconnect} variant="destructive">
              Yes, Disconnect
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
