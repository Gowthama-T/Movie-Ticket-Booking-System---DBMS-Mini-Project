"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface ShowtimeSelectorProps {
  movieId: string
}

// Mock data - in real app, this would be fetched from database
const theaters = [
  {
    id: 1,
    name: "PVR Cinemas - Phoenix Mall",
    location: "Velachery, Chennai",
    distance: "2.5 km",
    showtimes: [
      { id: 1, time: "10:00 AM", price: 200, type: "2D", available: 45 },
      { id: 2, time: "01:30 PM", price: 250, type: "2D", available: 32 },
      { id: 3, time: "05:00 PM", price: 300, type: "3D", available: 28 },
      { id: 4, time: "08:30 PM", price: 350, type: "IMAX", available: 15 },
    ],
  },
  {
    id: 2,
    name: "INOX - Express Avenue",
    location: "Royapettah, Chennai",
    distance: "4.2 km",
    showtimes: [
      { id: 5, time: "11:00 AM", price: 220, type: "2D", available: 38 },
      { id: 6, time: "02:30 PM", price: 270, type: "2D", available: 41 },
      { id: 7, time: "06:00 PM", price: 320, type: "3D", available: 22 },
      { id: 8, time: "09:30 PM", price: 380, type: "IMAX", available: 8 },
    ],
  },
  {
    id: 3,
    name: "AGS Cinemas - OMR",
    location: "Navalur, Chennai",
    distance: "8.1 km",
    showtimes: [
      { id: 9, time: "10:30 AM", price: 180, type: "2D", available: 52 },
      { id: 10, time: "02:00 PM", price: 230, type: "2D", available: 35 },
      { id: 11, time: "05:30 PM", price: 280, type: "3D", available: 19 },
      { id: 12, time: "09:00 PM", price: 330, type: "IMAX", available: 12 },
    ],
  },
]

export function ShowtimeSelector({ movieId }: ShowtimeSelectorProps) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  const getAvailabilityColor = (available: number) => {
    if (available > 30) return "text-green-600"
    if (available > 10) return "text-yellow-600"
    return "text-red-600"
  }

  const getAvailabilityText = (available: number) => {
    if (available > 30) return "Available"
    if (available > 10) return "Filling Fast"
    return "Almost Full"
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Select Date & Time</h2>

        {/* Date Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {Array.from({ length: 7 }).map((_, i) => {
            const date = new Date()
            date.setDate(date.getDate() + i)
            const dateStr = date.toISOString().split("T")[0]
            const isSelected = selectedDate === dateStr

            return (
              <Button
                key={i}
                variant={isSelected ? "default" : "outline"}
                className="flex-shrink-0"
                onClick={() => setSelectedDate(dateStr)}
              >
                <div className="text-center">
                  <div className="text-xs">{date.toLocaleDateString("en", { weekday: "short" })}</div>
                  <div className="font-bold">{date.getDate()}</div>
                  <div className="text-xs">{date.toLocaleDateString("en", { month: "short" })}</div>
                </div>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Theaters */}
      <div className="space-y-4">
        {theaters.map((theater) => (
          <Card key={theater.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{theater.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{theater.location}</span>
                    <span>•</span>
                    <span>{theater.distance}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {theater.showtimes.map((showtime) => (
                  <div key={showtime.id} className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{showtime.time}</span>
                      </div>
                      <Badge variant="outline">{showtime.type}</Badge>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold">₹{showtime.price}</span>
                      <span className={`text-sm ${getAvailabilityColor(showtime.available)}`}>
                        {getAvailabilityText(showtime.available)}
                      </span>
                    </div>

                    <Button asChild size="sm" className="w-full" disabled={showtime.available === 0}>
                      <Link href={`/booking/${movieId}/${theater.id}/${showtime.id}`}>Select Seats</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
