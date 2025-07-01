"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { TrendingUp, Mail, ArrowLeft, CheckCircle, Loader2, Phone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [resetMethod, setResetMethod] = useState("email")

  const handleSendReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 2000)
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(3)
    }, 1500)
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(4)
    }, 2000)
  }

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
            <p className="text-sm text-muted-foreground">Password Recovery</p>
          </div>
        </Link>
      </div>

      {/* Progress Indicator */}
      <div className="relative z-10 w-full max-w-md mb-6">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > stepNumber ? <CheckCircle className="h-4 w-4" /> : stepNumber}
              </div>
              {stepNumber < 4 && (
                <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-primary" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>Request</span>
          <span>Verify</span>
          <span>Reset</span>
          <span>Complete</span>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          {/* Step 1: Request Reset */}
          {step === 1 && (
            <>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
                <CardDescription className="text-base">Choose how you'd like to reset your password</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={resetMethod} onValueChange={setResetMethod} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="phone">Phone</TabsTrigger>
                  </TabsList>

                  <form onSubmit={handleSendReset}>
                    <TabsContent value="email" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your registered email"
                            className="pl-10 h-12"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          We'll send a verification code to this email address
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="phone" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+234 801 234 5678"
                            className="pl-10 h-12"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">We'll send a verification code via SMS</p>
                      </div>
                    </TabsContent>

                    <Button type="submit" className="w-full h-12 text-base font-semibold mt-6" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Code...
                        </>
                      ) : (
                        `Send Verification Code`
                      )}
                    </Button>
                  </form>
                </Tabs>
              </CardContent>
            </>
          )}

          {/* Step 2: Verify Code */}
          {step === 2 && (
            <>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Verify Code</CardTitle>
                <CardDescription className="text-base">
                  Enter the 6-digit code sent to {resetMethod === "email" ? email : phone}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="code" className="text-sm font-medium">
                      Verification Code
                    </Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="Enter 6-digit code"
                      className="h-12 text-center text-2xl tracking-widest"
                      maxLength={6}
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Didn't receive the code?</p>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Resend Code (30s)
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold"
                    disabled={isLoading || verificationCode.length !== 6}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Verify Code"
                    )}
                  </Button>
                </form>
              </CardContent>
            </>
          )}

          {/* Step 3: Reset Password */}
          {step === 3 && (
            <>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Create New Password</CardTitle>
                <CardDescription className="text-base">Choose a strong password for your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-sm font-medium">
                      New Password
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      className="h-12"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                      className="h-12"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>Password must contain:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>At least 8 characters</li>
                      <li>One uppercase letter</li>
                      <li>One lowercase letter</li>
                      <li>One number</li>
                      <li>One special character</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold"
                    disabled={isLoading || newPassword !== confirmPassword || newPassword.length < 8}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating Password...
                      </>
                    ) : (
                      <>
                        <Shield className="mr-2 h-4 w-4" />
                        Update Password
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">Password Reset Successful!</CardTitle>
                <CardDescription className="text-base">Your password has been updated successfully</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800">
                      Your account is now secure with your new password. You can now sign in with your updated
                      credentials.
                    </p>
                  </div>

                  <Link href="/login">
                    <Button className="w-full h-12 text-base font-semibold">Continue to Sign In</Button>
                  </Link>
                </div>
              </CardContent>
            </>
          )}

          {/* Back to Login */}
          {step < 4 && (
            <div className="p-6 pt-0">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Sign In
              </Link>
            </div>
          )}
        </Card>

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
