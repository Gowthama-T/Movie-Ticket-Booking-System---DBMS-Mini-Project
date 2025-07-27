"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface SeatSelectionProps {
  movieId: string
  theaterId: string
  showtimeId: string
}

// Mock seat data - in real app, this would be fetched from database
const seatLayout = {
  rows: [
    { name: "A", seats: 12, price: 200, type: "Regular" },
    { name: "B", seats: 12, price: 200, type: "Regular" },
    { name: "C", seats: 12, price: 200, type: "Regular" },
    { name: "D", seats: 14, price: 250, type: "Premium" },
    { name: "E", seats: 14, price: 250, type: "Premium" },
    { name: "F", seats: 14, price: 250, type: "Premium" },
    { name: "G", seats: 16, price: 300, type: "Recliner" },
    { name: "H", seats: 16, price: 300, type: "Recliner" },
  ],
}

// Mock occupied seats
const occupiedSeats = new Set(["A3", "A4", "B7", "B8", "D5", "D6", "F10", "F11", "G2", "G3"])

export function SeatSelection({ movieId, theaterId, showtimeId }: SeatSelectionProps) {
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set())

  const toggleSeat = (seatId: string) => {
    const newSelected = new Set(selectedSeats)
    if (newSelected.has(seatId)) {
      newSelected.delete(seatId)
    } else {
      newSelected.add(seatId)
    }
    setSelectedSeats(newSelected)
  }

  const getSeatStatus = (seatId: string) => {
    if (occupiedSeats.has(seatId)) return "occupied"
    if (selectedSeats.has(seatId)) return "selected"
    return "available"
  }

  const getSeatColor = (status: string) => {
    switch (status) {
      case "occupied":
        return "bg-red-500 cursor-not-allowed"
      case "selected":
        return "bg-green-500 cursor-pointer"
      case "available":
        return "bg-gray-300 hover:bg-gray-400 cursor-pointer"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Your Seats</CardTitle>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Occupied</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Screen */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-gray-300 to-gray-400 h-2 rounded-full mb-2"></div>
          <p className="text-center text-sm text-muted-foreground">SCREEN</p>
        </div>

        {/* Seat Layout */}
        <div className="space-y-4">
          {seatLayout.rows.map((row) => (
            <div key={row.name} className="flex items-center gap-2">
              <div className="w-8 text-center font-bold">{row.name}</div>
              <div className="flex gap-1">
                {Array.from({ length: row.seats }).map((_, seatIndex) => {
                  const seatNumber = seatIndex + 1
                  const seatId = `${row.name}${seatNumber}`
                  const status = getSeatStatus(seatId)

                  return (
                    <button
                      key={seatId}
                      className={`w-8 h-8 rounded text-xs font-bold text-white transition-colors ${getSeatColor(status)}`}
                      onClick={() => status === "available" && toggleSeat(seatId)}
                      disabled={status === "occupied"}
                      title={`${seatId} - ₹${row.price}`}
                    >
                      {seatNumber}
                    </button>
                  )
                })}
              </div>
              <Badge variant="outline" className="ml-2">
                {row.type} - ₹{row.price}
              </Badge>
            </div>
          ))}
        </div>

        {selectedSeats.size > 0 && (
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Selected Seats:</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(selectedSeats).map((seatId) => (
                <Badge key={seatId} variant="secondary">
                  {seatId}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
