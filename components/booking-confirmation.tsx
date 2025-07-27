import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Download, Share, Calendar, Clock, MapPin, QrCode } from "lucide-react"
import Link from "next/link"

interface BookingConfirmationProps {
  bookingId: string
}

// Mock booking data - in real app, this would be fetched from database
const bookingDetails = {
  id: "BK1704067200000",
  status: "confirmed",
  movie: {
    title: "Avengers: Endgame",
    poster: "/placeholder.svg?height=200&width=150",
  },
  theater: {
    name: "PVR Cinemas - Phoenix Mall",
    location: "Velachery, Chennai",
    screen: "Screen 3",
  },
  showtime: {
    date: "2024-01-15",
    time: "08:30 PM",
    type: "IMAX",
  },
  seats: ["G5", "G6"],
  totalAmount: 675,
  paymentMethod: "Credit Card",
  bookingDate: "2024-01-10T14:30:00Z",
}

export function BookingConfirmation({ bookingId }: BookingConfirmationProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Success Message */}
      <Card className="text-center">
        <CardContent className="pt-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-green-600 mb-2">Booking Confirmed!</h1>
          <p className="text-muted-foreground">
            Your tickets have been booked successfully. Show this confirmation at the theater.
          </p>
        </CardContent>
      </Card>

      {/* Booking Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Booking Details</span>
            <Badge variant="secondary">#{bookingDetails.id}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Movie Info */}
          <div className="flex gap-4">
            <img
              src={bookingDetails.movie.poster || "/placeholder.svg"}
              alt={bookingDetails.movie.title}
              className="w-20 h-28 object-cover rounded"
            />
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold">{bookingDetails.movie.title}</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{bookingDetails.theater.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{bookingDetails.theater.location}</span>
                  <span>•</span>
                  <span>{bookingDetails.theater.screen}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(bookingDetails.showtime.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{bookingDetails.showtime.time}</span>
                  <Badge variant="outline" className="ml-2">
                    {bookingDetails.showtime.type}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Seat Details */}
          <div>
            <h4 className="font-semibold mb-2">Seats</h4>
            <div className="flex gap-2">
              {bookingDetails.seats.map((seat) => (
                <Badge key={seat} variant="secondary" className="text-base px-3 py-1">
                  {seat}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Payment Info */}
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold">Total Paid</span>
              <p className="text-sm text-muted-foreground">via {bookingDetails.paymentMethod}</p>
            </div>
            <span className="text-2xl font-bold">₹{bookingDetails.totalAmount}</span>
          </div>

          <Separator />

          {/* QR Code */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-muted rounded-lg mb-2">
              <QrCode className="w-16 h-16" />
            </div>
            <p className="text-sm text-muted-foreground">Show this QR code at the theater entrance</p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button className="flex-1 bg-transparent" variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download Ticket
        </Button>
        <Button className="flex-1 bg-transparent" variant="outline">
          <Share className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>

      {/* Additional Actions */}
      <div className="text-center space-y-2">
        <Button asChild variant="default" className="w-full">
          <Link href="/bookings">View All Bookings</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/">Book More Tickets</Link>
        </Button>
      </div>

      {/* Important Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Important Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Please arrive at the theater at least 30 minutes before showtime</p>
          <p>• Carry a valid ID proof along with this booking confirmation</p>
          <p>• Outside food and beverages are not allowed</p>
          <p>• Cancellation allowed up to 2 hours before showtime</p>
        </CardContent>
      </Card>
    </div>
  )
}
