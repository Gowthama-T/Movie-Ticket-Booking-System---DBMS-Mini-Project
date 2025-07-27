"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LocationSelector } from "@/components/location-selector"
import { Search, Filter } from "lucide-react"

export function MovieSearch() {
  const [query, setQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("mumbai")
  const [selectedDate, setSelectedDate] = useState("today")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = () => {
    console.log("Searching movies:", { query, selectedCity, selectedDate })
    // Handle search logic here
  }

  const dateOptions = [
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "this-week", label: "This Week" },
    { id: "next-week", label: "Next Week" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Movie Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search movies by title, genre, or cast..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 h-12"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Date Selector */}
        <div className="md:w-40">
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full h-12 px-3 border border-input bg-background rounded-md text-sm"
          >
            {dateOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
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

      {/* Popular Searches */}
      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">Popular searches:</h4>
        <div className="flex flex-wrap gap-2">
          {["Action Movies", "Comedy", "Marvel", "Bollywood", "Hollywood"].map((search) => (
            <Button key={search} variant="outline" size="sm" onClick={() => setQuery(search)} className="h-8 text-xs">
              {search}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
