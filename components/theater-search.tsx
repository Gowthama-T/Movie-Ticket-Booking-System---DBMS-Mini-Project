"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LocationSelector } from "@/components/location-selector"
import { Search, Filter, MapPin, Navigation } from "lucide-react"

export function TheaterSearch() {
  const [query, setQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("mumbai")
  const [userLocation, setUserLocation] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = () => {
    console.log("Searching theaters:", { query, selectedCity, userLocation })
    // Handle search logic here
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation("Current Location")
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Theater Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search theaters by name or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Location Input */}
        <div className="md:w-64 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
            placeholder="Enter your location"
            className="pl-10 pr-10 h-12"
          />
          <button
            type="button"
            onClick={getCurrentLocation}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            title="Use current location"
          >
            <Navigation className="h-4 w-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
          </Button>

          <Button size="lg" onClick={handleSearch} className="bg-purple-600 hover:bg-purple-700">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* City Selector */}
      <div className="mt-4">
        <LocationSelector selectedCity={selectedCity} onCityChange={setSelectedCity} />
      </div>

      {/* Popular Areas */}
      {!userLocation && (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Popular areas in {selectedCity}:</h4>
          <div className="flex flex-wrap gap-2">
            {["Andheri", "Bandra", "Juhu", "Powai", "Lower Parel"].map((area) => (
              <Button
                key={area}
                variant="outline"
                size="sm"
                onClick={() => setUserLocation(area)}
                className="h-8 text-xs"
              >
                {area}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
