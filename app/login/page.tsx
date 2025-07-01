"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  TrendingUp,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Shield,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRegisterLoading, setIsRegisterLoading] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: "", password: "", rememberMe: false })
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    accountType: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return /^(\+234|0)[789][01]\d{8}$/.test(phone)
  }

  const getPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/\d/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const getPasswordStrengthText = (strength: number) => {
    switch (strength) {
      case 0:
      case 1:
        return { text: "Very Weak", color: "bg-red-500" }
      case 2:
        return { text: "Weak", color: "bg-orange-500" }
      case 3:
        return { text: "Fair", color: "bg-yellow-500" }
      case 4:
        return { text: "Good", color: "bg-blue-500" }
      case 5:
        return { text: "Strong", color: "bg-green-500" }
      default:
        return { text: "", color: "" }
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    // Validation
    const newErrors: Record<string, string> = {}
    if (!loginForm.email) newErrors.email = "Email is required"
    else if (!validateEmail(loginForm.email)) newErrors.email = "Please enter a valid email"
    if (!loginForm.password) newErrors.password = "Password is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle successful login
    }, 2000)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsRegisterLoading(true)
    setErrors({})

    // Validation
    const newErrors: Record<string, string> = {}
    if (!registerForm.firstName) newErrors.firstName = "First name is required"
    if (!registerForm.lastName) newErrors.lastName = "Last name is required"
    if (!registerForm.email) newErrors.email = "Email is required"
    else if (!validateEmail(registerForm.email)) newErrors.email = "Please enter a valid email"
    if (!registerForm.phone) newErrors.phone = "Phone number is required"
    else if (!validatePhone(registerForm.phone)) newErrors.phone = "Please enter a valid Nigerian phone number"
    if (!registerForm.password) newErrors.password = "Password is required"
    else if (getPasswordStrength(registerForm.password) < 3) newErrors.password = "Password is too weak"
    if (!registerForm.accountType) newErrors.accountType = "Please select an account type"
    if (!registerForm.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsRegisterLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsRegisterLoading(false)
      // Handle successful registration
    }, 2000)
  }

  const passwordStrength = getPasswordStrength(registerForm.password)
  const passwordStrengthInfo = getPasswordStrengthText(passwordStrength)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex flex-col items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Header */}
      <div className="relative z-10 mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="p-2 bg-primary rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-2xl text-foreground">Traders Circle</h1>
            <p className="text-sm text-muted-foreground">Nigeria's #1 Copy Trading Platform</p>
          </div>
        </Link>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Create Account
            </TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
                <CardDescription className="text-base">Sign in to continue your trading journey</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className={`pl-10 h-12 ${errors.email ? "border-red-500" : ""}`}
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password
                      </Label>
                      <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`pl-10 pr-10 h-12 ${errors.password ? "border-red-500" : ""}`}
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                      {errors.password && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={loginForm.rememberMe}
                      onCheckedChange={(checked) => setLoginForm({ ...loginForm, rememberMe: checked as boolean })}
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me for 30 days
                    </Label>
                  </div>

                  {/* Login Button */}
                  <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      "Sign In to Dashboard"
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-11">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="h-11">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      const registerTab = document.querySelector('[data-value="register"]') as HTMLElement
                      registerTab?.click()
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    Create one now
                  </button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Join Traders Circle</CardTitle>
                <CardDescription className="text-base">Start your copy trading journey today</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className={`pl-10 h-12 ${errors.firstName ? "border-red-500" : ""}`}
                          value={registerForm.firstName}
                          onChange={(e) => setRegisterForm({ ...registerForm, firstName: e.target.value })}
                        />
                        {errors.firstName && (
                          <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                            <AlertCircle className="h-3 w-3" />
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className={`h-12 ${errors.lastName ? "border-red-500" : ""}`}
                        value={registerForm.lastName}
                        onChange={(e) => setRegisterForm({ ...registerForm, lastName: e.target.value })}
                      />
                      {errors.lastName && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="registerEmail" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="registerEmail"
                        type="email"
                        placeholder="john@example.com"
                        className={`pl-10 h-12 ${errors.email ? "border-red-500" : ""}`}
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        placeholder="+234 801 234 5678"
                        className={`pl-10 h-12 ${errors.phone ? "border-red-500" : ""}`}
                        value={registerForm.phone}
                        onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                      />
                      {errors.phone && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="h-3 w-3" />
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="registerPassword" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="registerPassword"
                        type={showRegisterPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className={`pl-10 pr-10 h-12 ${errors.password ? "border-red-500" : ""}`}
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showRegisterPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>

                    {/* Password Strength Indicator */}
                    {registerForm.password && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${passwordStrengthInfo.color}`}
                              style={{ width: `${(passwordStrength / 5) * 100}%` }}
                            />
                          </div>
                          <Badge variant={passwordStrength >= 3 ? "default" : "destructive"} className="text-xs">
                            {passwordStrengthInfo.text}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div
                            className={`flex items-center gap-1 ${registerForm.password.length >= 8 ? "text-green-600" : ""}`}
                          >
                            {registerForm.password.length >= 8 ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <div className="h-3 w-3 rounded-full border border-gray-300" />
                            )}
                            At least 8 characters
                          </div>
                          <div
                            className={`flex items-center gap-1 ${/[A-Z]/.test(registerForm.password) ? "text-green-600" : ""}`}
                          >
                            {/[A-Z]/.test(registerForm.password) ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <div className="h-3 w-3 rounded-full border border-gray-300" />
                            )}
                            One uppercase letter
                          </div>
                          <div
                            className={`flex items-center gap-1 ${/\d/.test(registerForm.password) ? "text-green-600" : ""}`}
                          >
                            {/\d/.test(registerForm.password) ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <div className="h-3 w-3 rounded-full border border-gray-300" />
                            )}
                            One number
                          </div>
                        </div>
                      </div>
                    )}

                    {errors.password && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                        <AlertCircle className="h-3 w-3" />
                        {errors.password}
                      </div>
                    )}
                  </div>

                  {/* Account Type */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Account Type</Label>
                    <Select
                      value={registerForm.accountType}
                      onValueChange={(value) => setRegisterForm({ ...registerForm, accountType: value })}
                    >
                      <SelectTrigger className={`h-12 ${errors.accountType ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Choose your account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="slave">
                          <div className="flex flex-col items-start">
                            <span className="font-medium">Slave Account</span>
                            <span className="text-xs text-muted-foreground">Copy trades from master traders</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="master">
                          <div className="flex flex-col items-start">
                            <span className="font-medium">Master Account</span>
                            <span className="text-xs text-muted-foreground">
                              Share your trades and earn commissions
                            </span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.accountType && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                        <AlertCircle className="h-3 w-3" />
                        {errors.accountType}
                      </div>
                    )}
                  </div>

                  {/* Terms Agreement */}
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={registerForm.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setRegisterForm({ ...registerForm, agreeToTerms: checked as boolean })
                        }
                        className="mt-1"
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline font-medium">
                          Terms of Service
                        </Link>
                        ,{" "}
                        <Link href="/privacy" className="text-primary hover:underline font-medium">
                          Privacy Policy
                        </Link>
                        , and{" "}
                        <Link href="/risk" className="text-primary hover:underline font-medium">
                          Risk Disclosure
                        </Link>
                      </Label>
                    </div>
                    {errors.agreeToTerms && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                        <AlertCircle className="h-3 w-3" />
                        {errors.agreeToTerms}
                      </div>
                    )}
                  </div>

                  {/* Register Button */}
                  <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isRegisterLoading}>
                    {isRegisterLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <Shield className="mr-2 h-4 w-4" />
                        Create Secure Account
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      const loginTab = document.querySelector('[data-value="login"]') as HTMLElement
                      loginTab?.click()
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in here
                  </button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Security Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-xs text-muted-foreground">Secured with 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </div>
  )
}
