"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function TheaterFilters() {
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([100, 500])
  const [selectedChains, setSelectedChains] = useState<string[]>([])

  const facilities = [
    "IMAX",
    "4DX",
    "Dolby Atmos",
    "Recliner Seats",
    "Food Court",
    "Parking",
    "3D",
    "Premium Seating",
    "Wheelchair Access",
    "Valet Parking",
  ]

  const chains = ["PVR", "INOX", "AGS", "Sathyam", "Escape", "Rohini"]

  const toggleFacility = (facility: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility) ? prev.filter((f) => f !== facility) : [...prev, facility],
    )
  }

  const toggleChain = (chain: string) => {
    setSelectedChains((prev) => (prev.includes(chain) ? prev.filter((c) => c !== chain) : [...prev, chain]))
  }

  const clearAllFilters = () => {
    setSelectedFacilities([])
    setSelectedChains([])
    setPriceRange([100, 500])
  }

  const hasActiveFilters =
    selectedFacilities.length > 0 || selectedChains.length > 0 || priceRange[0] !== 100 || priceRange[1] !== 500

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {hasActiveFilters && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedFacilities.map((facility) => (
                <Badge
                  key={facility}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => toggleFacility(facility)}
                >
                  {facility} <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
              {selectedChains.map((chain) => (
                <Badge key={chain} variant="secondary" className="cursor-pointer" onClick={() => toggleChain(chain)}>
                  {chain} <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Theater Chains */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Theater Chains</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {chains.map((chain) => (
            <div key={chain} className="flex items-center space-x-2">
              <Checkbox
                id={chain}
                checked={selectedChains.includes(chain)}
                onCheckedChange={() => toggleChain(chain)}
              />
              <label htmlFor={chain} className="text-sm cursor-pointer">
                {chain}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Facilities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Facilities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {facilities.map((facility) => (
            <div key={facility} className="flex items-center space-x-2">
              <Checkbox
                id={facility}
                checked={selectedFacilities.includes(facility)}
                onCheckedChange={() => toggleFacility(facility)}
              />
              <label htmlFor={facility} className="text-sm cursor-pointer">
                {facility}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={1000} min={50} step={50} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
