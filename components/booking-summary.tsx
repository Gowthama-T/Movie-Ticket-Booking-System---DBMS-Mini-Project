"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import { useState } from "react"
import { PaymentModal } from "./payment-modal"

interface BookingSummaryProps {
  movieId: string
  theaterId: string
  showtimeId: string
}

// Mock data - in real app, this would be fetched from database
const bookingData = {
  movie: {
    title: "Avengers: Endgame",
    poster: "/placeholder.svg?height=200&width=150",
  },
  theater: {
    name: "PVR Cinemas - Phoenix Mall",
    location: "Velachery, Chennai",
  },
  showtime: {
    date: "2024-01-15",
    time: "08:30 PM",
    type: "IMAX",
  },
  selectedSeats: ["G5", "G6"],
  seatPrice: 300,
  convenienceFee: 30,
  taxes: 45,
}

export function BookingSummary({ movieId, theaterId, showtimeId }: BookingSummaryProps) {
  const [showPayment, setShowPayment] = useState(false)

  const subtotal = bookingData.selectedSeats.length * bookingData.seatPrice
  const total = subtotal + bookingData.convenienceFee + bookingData.taxes

  return (
    <>
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle>Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Movie Info */}
          <div className="flex gap-3">
            <img
              src={bookingData.movie.poster || "/placeholder.svg"}
              alt={bookingData.movie.title}
              className="w-16 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{bookingData.movie.title}</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{bookingData.theater.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(bookingData.showtime.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{bookingData.showtime.time}</span>
                </div>
              </div>
              <Badge variant="outline" className="mt-1">
                {bookingData.showtime.type}
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Selected Seats */}
          <div>
            <h4 className="font-semibold mb-2">Selected Seats</h4>
            <div className="flex flex-wrap gap-2">
              {bookingData.selectedSeats.map((seat) => (
                <Badge key={seat} variant="secondary">
                  {seat}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Price Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>
                Tickets ({bookingData.selectedSeats.length}x ₹{bookingData.seatPrice})
              </span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Convenience Fee</span>
              <span>₹{bookingData.convenienceFee}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Taxes</span>
              <span>₹{bookingData.taxes}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={() => setShowPayment(true)}
            disabled={bookingData.selectedSeats.length === 0}
          >
            Proceed to Payment
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By proceeding, you agree to our Terms & Conditions
          </p>
        </CardContent>
      </Card>

      <PaymentModal open={showPayment} onClose={() => setShowPayment(false)} bookingData={{ ...bookingData, total }} />
    </>
  )
}
