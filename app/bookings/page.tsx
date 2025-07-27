"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, Download, Share, Star, Search, Ticket } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "upcoming":
      return "bg-blue-100 text-blue-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Mock booking data
  const bookings = [
    {
      id: "BK1704067200001",
      movieTitle: "Avengers: Endgame",
      posterUrl: "/placeholder.svg?height=120&width=80&text=Avengers",
      theaterName: "PVR Cinemas - Phoenix Mall",
      location: "Velachery, Chennai",
      showDate: "2024-01-15",
      showTime: "08:30 PM",
      seats: ["G5", "G6"],
      totalAmount: 675,
      status: "completed",
      bookingDate: "2024-01-10T14:30:00Z",
      rating: 5,
      screenType: "IMAX",
    },
    {
      id: "BK1704067200002",
      movieTitle: "Spider-Man: No Way Home",
      posterUrl: "/placeholder.svg?height=120&width=80&text=Spider-Man",
      theaterName: "INOX - Express Avenue",
      location: "Royapettah, Chennai",
      showDate: "2024-01-20",
      showTime: "07:00 PM",
      seats: ["D8", "D9", "D10"],
      totalAmount: 840,
      status: "upcoming",
      bookingDate: "2024-01-12T10:15:00Z",
      screenType: "3D",
    },
    {
      id: "BK1704067200003",
      movieTitle: "The Batman",
      posterUrl: "/placeholder.svg?height=120&width=80&text=Batman",
      theaterName: "AGS Cinemas - OMR",
      location: "Navalur, Chennai",
      showDate: "2024-01-08",
      showTime: "09:30 PM",
      seats: ["F5", "F6"],
      totalAmount: 560,
      status: "cancelled",
      bookingDate: "2024-01-05T16:45:00Z",
      refundAmount: 420,
      screenType: "2D",
    },
    {
      id: "BK1704067200004",
      movieTitle: "Top Gun: Maverick",
      posterUrl: "/placeholder.svg?height=120&width=80&text=Top+Gun",
      theaterName: "Sathyam Cinemas",
      location: "Royapettah, Chennai",
      showDate: "2024-01-25",
      showTime: "06:30 PM",
      seats: ["H3", "H4"],
      totalAmount: 760,
      status: "upcoming",
      bookingDate: "2024-01-14T09:20:00Z",
      screenType: "Dolby Atmos",
    },
  ]

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.movieTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.theaterName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || booking.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const upcomingBookings = bookings.filter((b) => b.status === "upcoming")
  const completedBookings = bookings.filter((b) => b.status === "completed")
  const cancelledBookings = bookings.filter((b) => b.status === "cancelled")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Bookings</h1>
            <p className="text-muted-foreground">Manage your movie ticket bookings</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Badge variant="outline" className="flex items-center gap-1">
              <Ticket className="w-3 h-3" />
              {bookings.length} Total Bookings
            </Badge>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterStatus === "all" ? "default" : "outline"}
              onClick={() => setFilterStatus("all")}
              size="sm"
            >
              All
            </Button>
            <Button
              variant={filterStatus === "upcoming" ? "default" : "outline"}
              onClick={() => setFilterStatus("upcoming")}
              size="sm"
            >
              Upcoming
            </Button>
            <Button
              variant={filterStatus === "completed" ? "default" : "outline"}
              onClick={() => setFilterStatus("completed")}
              size="sm"
            >
              Completed
            </Button>
            <Button
              variant={filterStatus === "cancelled" ? "default" : "outline"}
              onClick={() => setFilterStatus("cancelled")}
              size="sm"
            >
              Cancelled
            </Button>
          </div>
        </div>

        {/* Booking Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({bookings.length})</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming ({upcomingBookings.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedBookings.length})</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled ({cancelledBookings.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <BookingsList bookings={filteredBookings} />
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            <BookingsList bookings={upcomingBookings} />
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <BookingsList bookings={completedBookings} />
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-4">
            <BookingsList bookings={cancelledBookings} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function BookingsList({ bookings }: { bookings: any[] }) {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <Ticket className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No bookings found</h3>
        <p className="text-muted-foreground mb-4">You haven't made any bookings yet.</p>
        <Button asChild>
          <Link href="/movies">Book Your First Movie</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <Card key={booking.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Movie Poster */}
              <div className="flex-shrink-0">
                <Image
                  src={booking.posterUrl || "/placeholder.svg"}
                  alt={booking.movieTitle}
                  width={80}
                  height={120}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Booking Details */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{booking.movieTitle}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{booking.theaterName}</span>
                      <span>•</span>
                      <span>{booking.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </Badge>
                    <Badge variant="outline">{booking.screenType}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{new Date(booking.showDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{booking.showTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-muted-foreground" />
                    <span>Seats: {booking.seats.join(", ")}</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-3 border-t">
                  <div className="space-y-1">
                    <p className="font-semibold">₹{booking.totalAmount}</p>
                    <p className="text-xs text-muted-foreground">Booking ID: {booking.id}</p>
                    {booking.status === "cancelled" && booking.refundAmount && (
                      <p className="text-xs text-green-600">Refund: ₹{booking.refundAmount}</p>
                    )}
                  </div>

                  <div className="flex gap-2 mt-3 md:mt-0">
                    {booking.status === "upcoming" && (
                      <>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </>
                    )}

                    {booking.status === "completed" && (
                      <>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        {!booking.rating && (
                          <Button variant="outline" size="sm">
                            <Star className="w-4 h-4 mr-1" />
                            Rate
                          </Button>
                        )}
                      </>
                    )}

                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
