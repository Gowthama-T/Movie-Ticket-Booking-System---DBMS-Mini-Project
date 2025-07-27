"use client"

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useState, useCallback } from "react"

type FilterCategory = "genre" | "language" | "rating"

export function MovieFilters() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 500])

  const genres = [
    "Action", "Adventure", "Comedy", "Drama", "Horror", "Sci-Fi",
    "Thriller", "Romance", "Animation", "Crime", "Fantasy", "Mystery",
  ]
  const languages = ["English", "Hindi", "Tamil", "Telugu", "Malayalam", "Kannada", "Bengali"]
  const ratings = ["9+ Excellent", "8+ Very Good", "7+ Good", "6+ Average"]

  const toggle = useCallback((category: FilterCategory, value: string) => {
    const setter = {
      genre: setSelectedGenres,
      language: setSelectedLanguages,
      rating: setSelectedRating,
    }[category]

    const current = {
      genre: selectedGenres,
      language: selectedLanguages,
      rating: selectedRating,
    }[category]

    setter(current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value])
  }, [selectedGenres, selectedLanguages, selectedRating])

  const clearAllFilters = () => {
    setSelectedGenres([])
    setSelectedLanguages([])
    setSelectedRating([])
    setPriceRange([100, 500])
  }

  const hasActiveFilters = selectedGenres.length || selectedLanguages.length || selectedRating.length

  return (
    <div className="space-y-6">
      {hasActiveFilters && (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {selectedGenres.map((genre) => (
              <Badge key={genre} variant="secondary" className="flex items-center gap-1">
                {genre}
                <X className="w-3 h-3 cursor-pointer" onClick={() => toggle("genre", genre)} />
              </Badge>
            ))}
            {selectedLanguages.map((lang) => (
              <Badge key={lang} variant="secondary" className="flex items-center gap-1">
                {lang}
                <X className="w-3 h-3 cursor-pointer" onClick={() => toggle("language", lang)} />
              </Badge>
            ))}
            {selectedRating.map((rate) => (
              <Badge key={rate} variant="secondary" className="flex items-center gap-1">
                {rate}
                <X className="w-3 h-3 cursor-pointer" onClick={() => toggle("rating", rate)} />
              </Badge>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Genre Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Genre</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center space-x-2">
              <Checkbox
                id={`genre-${genre}`}
                checked={selectedGenres.includes(genre)}
                onCheckedChange={() => toggle("genre", genre)}
              />
              <label htmlFor={`genre-${genre}`} className="text-sm cursor-pointer">
                {genre}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Language Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Language</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {languages.map((lang) => (
            <div key={lang} className="flex items-center space-x-2">
              <Checkbox
                id={`lang-${lang}`}
                checked={selectedLanguages.includes(lang)}
                onCheckedChange={() => toggle("language", lang)}
              />
              <label htmlFor={`lang-${lang}`} className="text-sm cursor-pointer">
                {lang}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={(range) => setPriceRange(range as [number, number])}
            min={100}
            max={500}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Rating Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {ratings.map((rate) => (
            <div key={rate} className="flex items-center space-x-2">
              <Checkbox
                id={`rate-${rate}`}
                checked={selectedRating.includes(rate)}
                onCheckedChange={() => toggle("rating", rate)}
              />
              <label htmlFor={`rate-${rate}`} className="text-sm cursor-pointer">
                {rate}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
