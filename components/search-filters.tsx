"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Filter, X } from "lucide-react"

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Animation",
  "Crime",
  "Fantasy",
  "Mystery",
]

const languages = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Malayalam",
  "Kannada",
  "Bengali",
  "Marathi",
  "Gujarati",
  "Punjabi",
]

export function SearchFilters() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedDate, setSelectedDate] = useState("")

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }

  const clearFilters = () => {
    setSelectedGenres([])
    setSelectedLanguage("")
    setSelectedDate("")
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <h3 className="font-semibold">Filters</h3>
        </div>
        {(selectedGenres.length > 0 || selectedLanguage || selectedDate) && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {/* Date Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Date</label>
          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger>
              <SelectValue placeholder="Select date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="next-week">Next Week</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Language Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Language</label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language} value={language.toLowerCase()}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Genre Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Genres</label>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Badge
                key={genre}
                variant={selectedGenres.includes(genre) ? "default" : "outline"}
                className="cursor-pointer hover:bg-purple-100"
                onClick={() => toggleGenre(genre)}
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {(selectedGenres.length > 0 || selectedLanguage || selectedDate) && (
          <div>
            <label className="text-sm font-medium mb-2 block">Active Filters</label>
            <div className="flex flex-wrap gap-2">
              {selectedDate && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {selectedDate}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedDate("")} />
                </Badge>
              )}
              {selectedLanguage && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {selectedLanguage}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedLanguage("")} />
                </Badge>
              )}
              {selectedGenres.map((genre) => (
                <Badge key={genre} variant="secondary" className="flex items-center gap-1">
                  {genre}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => toggleGenre(genre)} />
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
