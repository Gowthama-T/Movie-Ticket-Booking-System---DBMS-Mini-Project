"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MapPin, ChevronDown } from "lucide-react"

interface LocationSelectorProps {
  selectedCity?: string
  onCityChange?: (city: string) => void
}

const cities = [
  { id: "mumbai", name: "Mumbai", state: "Maharashtra" },
  { id: "delhi", name: "Delhi", state: "Delhi" },
  { id: "bangalore", name: "Bangalore", state: "Karnataka" },
  { id: "chennai", name: "Chennai", state: "Tamil Nadu" },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana" },
  { id: "pune", name: "Pune", state: "Maharashtra" },
  { id: "kolkata", name: "Kolkata", state: "West Bengal" },
  { id: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
  { id: "kochi", name: "Kochi", state: "Kerala" },
  { id: "coimbatore", name: "Coimbatore", state: "Tamil Nadu" },
]

export function LocationSelector({ selectedCity = "mumbai", onCityChange }: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const currentCity = cities.find((city) => city.id === selectedCity) || cities[0]

  const handleCitySelect = (cityId: string) => {
    onCityChange?.(cityId)
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 min-w-[160px] bg-transparent">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{currentCity.name}</span>
          <ChevronDown className="w-4 h-4 ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {cities.map((city) => (
          <DropdownMenuItem
            key={city.id}
            onClick={() => handleCitySelect(city.id)}
            className="flex flex-col items-start"
          >
            <span className="font-medium">{city.name}</span>
            <span className="text-xs text-muted-foreground">{city.state}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
