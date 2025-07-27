"use client"

import { Badge } from "@/components/ui/badge"
import { Star, Clock, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Movie {
  id: number
  title: string
  genre: string
  duration: string
  rating: number
  language: string
  poster: string
  price: number
}

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <Image
          src={movie.poster || "/placeholder.svg"}
          alt={movie.title}
          width={300}
          height={400}
          className="w-full h-64 object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">
          <Star className="w-3 h-3 mr-1" />
          {movie.rating}
        </Badge>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
        <p className="text-muted-foreground text-sm mb-2">{movie.genre}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {movie.duration}
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            {movie.language}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">₹{movie.price}</span>
          <Link
            href={`/movie/${movie.id}`}
            className="bg-primary text-white text-sm py-2 px-4 rounded-md hover:bg-primary/90 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
