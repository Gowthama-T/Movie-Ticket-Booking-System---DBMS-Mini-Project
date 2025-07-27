"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Wallet, Building, Smartphone } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface PaymentModalProps {
  open: boolean
  onClose: () => void
  bookingData: any
}

export function PaymentModal({ open, onClose, bookingData }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [processing, setProcessing] = useState(false)
  const router = useRouter()

  const handlePayment = async () => {
    setProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In real app, this would integrate with actual payment gateway
    const bookingId = "BK" + Date.now()

    setProcessing(false)
    onClose()
    router.push(`/booking-confirmation/${bookingId}`)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Payment Summary */}
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Amount</span>
              <span className="text-2xl font-bold">₹{bookingData.total}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <Label className="text-base font-semibold">Select Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-3">
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="card" id="card" />
                <CreditCard className="w-5 h-5" />
                <Label htmlFor="card" className="flex-1 cursor-pointer">
                  Credit/Debit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="upi" id="upi" />
                <Smartphone className="w-5 h-5" />
                <Label htmlFor="upi" className="flex-1 cursor-pointer">
                  UPI
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="wallet" id="wallet" />
                <Wallet className="w-5 h-5" />
                <Label htmlFor="wallet" className="flex-1 cursor-pointer">
                  Digital Wallet
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="netbanking" id="netbanking" />
                <Building className="w-5 h-5" />
                <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                  Net Banking
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Form */}
          {paymentMethod === "card" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div>
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input id="cardName" placeholder="John Doe" />
              </div>
            </div>
          )}

          {paymentMethod === "upi" && (
            <div>
              <Label htmlFor="upiId">UPI ID</Label>
              <Input id="upiId" placeholder="yourname@upi" />
            </div>
          )}

          <Separator />

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button onClick={handlePayment} disabled={processing} className="flex-1">
              {processing ? "Processing..." : `Pay ₹${bookingData.total}`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
