"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Gift, CreditCard, Star } from "lucide-react"
import { useState } from "react"

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [recipientEmail, setRecipientEmail] = useState("")
  const [senderName, setSenderName] = useState("")
  const [message, setMessage] = useState("")
  const [selectedDesign, setSelectedDesign] = useState("birthday")

  const predefinedAmounts = [500, 1000, 1500, 2000, 2500, 5000]

  const giftCardDesigns = [
    {
      id: "birthday",
      name: "Birthday Special",
      image: "/placeholder.svg?height=200&width=300&text=Birthday+Gift",
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
    },
    {
      id: "anniversary",
      name: "Anniversary",
      image: "/placeholder.svg?height=200&width=300&text=Anniversary+Gift",
      color: "bg-gradient-to-r from-red-500 to-pink-500",
    },
    {
      id: "congratulations",
      name: "Congratulations",
      image: "/placeholder.svg?height=200&width=300&text=Congratulations",
      color: "bg-gradient-to-r from-green-500 to-blue-500",
    },
    {
      id: "thank-you",
      name: "Thank You",
      image: "/placeholder.svg?height=200&width=300&text=Thank+You",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      id: "general",
      name: "General",
      image: "/placeholder.svg?height=200&width=300&text=Movie+Gift",
      color: "bg-gradient-to-r from-purple-600 to-blue-600",
    },
  ]

  const handlePurchase = () => {
    const amount = selectedAmount === "custom" ? customAmount : selectedAmount
    console.log("Gift card purchase:", {
      amount,
      recipientEmail,
      senderName,
      message,
      design: selectedDesign,
    })
    // Handle gift card purchase logic
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-12 h-12 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold">Movie Gift Cards</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Give the gift of cinema! Perfect for birthdays, anniversaries, or any special occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gift Card Configuration */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Choose Amount</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {predefinedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount.toString() ? "default" : "outline"}
                      onClick={() => setSelectedAmount(amount.toString())}
                      className="h-12"
                    >
                      ₹{amount}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={selectedAmount === "custom" ? "default" : "outline"}
                    onClick={() => setSelectedAmount("custom")}
                    className="flex-shrink-0"
                  >
                    Custom
                  </Button>
                  {selectedAmount === "custom" && (
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min="100"
                      max="10000"
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {giftCardDesigns.map((design) => (
                    <div
                      key={design.id}
                      className={`relative cursor-pointer rounded-lg border-2 transition-all ${
                        selectedDesign === design.id ? "border-purple-600 ring-2 ring-purple-200" : "border-gray-200"
                      }`}
                      onClick={() => setSelectedDesign(design.id)}
                    >
                      <div className={`${design.color} p-4 rounded-lg text-white text-center`}>
                        <Gift className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold text-sm">{design.name}</p>
                      </div>
                      {selectedDesign === design.id && (
                        <div className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full p-1">
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recipient Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="senderName">Your Name</Label>
                  <Input
                    id="senderName"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="recipientEmail">Recipient's Email</Label>
                  <Input
                    id="recipientEmail"
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="Enter recipient's email"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a personal message..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Purchase */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gift Card Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div
                    className={`${giftCardDesigns.find((d) => d.id === selectedDesign)?.color} p-6 rounded-lg text-white`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">CineSphere</h3>
                        <p className="text-sm opacity-90">Movie Gift Card</p>
                      </div>
                      <Gift className="w-8 h-8" />
                    </div>

                    <div className="text-center my-6">
                      <p className="text-3xl font-bold">
                        ₹{selectedAmount === "custom" ? customAmount || "0" : selectedAmount || "0"}
                      </p>
                      <p className="text-sm opacity-90 mt-2">
                        {giftCardDesigns.find((d) => d.id === selectedDesign)?.name}
                      </p>
                    </div>

                    {message && (
                      <div className="bg-white/20 p-3 rounded text-sm">
                        <p className="italic">"{message}"</p>
                        {senderName && <p className="text-right mt-2">- {senderName}</p>}
                      </div>
                    )}

                    <div className="mt-4 text-xs opacity-75">
                      <p>Valid for 1 year from purchase date</p>
                      <p>Terms & conditions apply</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Gift Card Value</span>
                  <span>₹{selectedAmount === "custom" ? customAmount || "0" : selectedAmount || "0"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Fee</span>
                  <span>₹0</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>₹{selectedAmount === "custom" ? customAmount || "0" : selectedAmount || "0"}</span>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={handlePurchase}
                  disabled={!selectedAmount || !recipientEmail || !senderName}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Purchase Gift Card
                </Button>

                <div className="text-xs text-muted-foreground text-center space-y-1">
                  <p>• Gift cards are delivered instantly via email</p>
                  <p>• Valid for 1 year from purchase date</p>
                  <p>• Can be used for any movie booking</p>
                  <p>• Non-refundable and non-transferable</p>
                </div>
              </CardContent>
            </Card>

            {/* Popular Gift Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Choices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Date Night Special</p>
                      <p className="text-sm text-muted-foreground">Perfect for couples</p>
                    </div>
                    <Badge>₹1000</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Family Pack</p>
                      <p className="text-sm text-muted-foreground">Great for family outings</p>
                    </div>
                    <Badge>₹2500</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Movie Buff</p>
                      <p className="text-sm text-muted-foreground">For the ultimate movie lover</p>
                    </div>
                    <Badge>₹5000</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
