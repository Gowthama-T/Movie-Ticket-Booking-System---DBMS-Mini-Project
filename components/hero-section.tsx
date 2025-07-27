"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LocationSelector } from "@/components/location-selector"
import { Search, Calendar, Users, MapPin } from "lucide-react"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("mumbai")

  const handleSearch = () => {
    console.log("Searching:", { searchQuery, selectedCity })
    // Handle search logic here
  }

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Experience{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cinema Magic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Book your favorite movies instantly. Find theaters near you. Enjoy the ultimate movie experience.
            </p>
          </div>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-semibold">10M+ Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold">500+ Theaters</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-pink-400" />
              <span className="text-lg font-semibold">50+ Cities</span>
            </div>
          </div>

          {/* Search interface */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for movies, theaters, or events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                />
              </div>

              <div className="md:w-48">
                <LocationSelector selectedCity={selectedCity} onCityChange={setSelectedCity} />
              </div>

              <Button
                onClick={handleSearch}
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Quick action buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Now Showing
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Coming Soon
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Special Offers
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
