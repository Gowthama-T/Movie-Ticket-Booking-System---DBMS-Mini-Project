'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Globe, Calendar, Heart, Share } from "lucide-react"
import Image from "next/image"

interface MovieDetailsProps {
  movieId: string
}

// Temporary Mock Data (Replace with real fetch later)
const movieData = {
  id: 1,
  title: "Avengers: Endgame",
  genre: ["Action", "Adventure", "Drama"],
  duration: "181 min",
  rating: 8.4,
  language: "English",
  releaseDate: "2019-04-26",
  director: "Anthony Russo, Joe Russo",
  cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
  poster: "/placeholder.svg?height=600&width=400",
  backdrop: "/placeholder.svg?height=400&width=1200",
  synopsis:
    "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
  price: 250,
}

export function MovieDetails({ movieId }: MovieDetailsProps) {
  return (
    <div className="relative">
      {/* Backdrop */}
      <div className="relative h-96 bg-gradient-to-r from-black via-black/70 to-transparent">
        <Image
          src={movieData.backdrop}
          alt={movieData.title}
          fill
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 container mx-auto px-4 flex items-center">
          <div className="flex gap-8 text-white">
            {/* Poster */}
            <div className="flex-shrink-0">
              <Image
                src={movieData.poster}
                alt={movieData.title}
                width={300}
                height={450}
                className="rounded-lg shadow-2xl"
              />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold">{movieData.title}</h1>

              <div className="flex items-center gap-4 text-lg">
                <span className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400" />
                  {movieData.rating}/10
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  {movieData.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-5 h-5" />
                  {movieData.language}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-5 h-5" />
                  {new Date(movieData.releaseDate).getFullYear()}
                </span>
              </div>

              <div className="flex gap-2 flex-wrap">
                {movieData.genre.map((g) => (
                  <Badge key={g} variant="secondary">
                    {g}
                  </Badge>
                ))}
              </div>

              <p className="text-lg max-w-2xl">{movieData.synopsis}</p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Director:</strong> {movieData.director}
                </p>
                <p>
                  <strong>Cast:</strong> {movieData.cast.join(", ")}
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Book Tickets – ₹{movieData.price}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-4 h-4 mr-2" />
                  Watchlist
                </Button>
                <Button variant="outline" size="lg">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
