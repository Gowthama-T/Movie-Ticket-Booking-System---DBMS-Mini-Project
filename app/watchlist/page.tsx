"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Search, Calendar, Clock, Star, Play, Trash2, Share } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WatchlistPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock watchlist data
  const [watchlist, setWatchlist] = useState([
    {
      id: 1,
      title: "Dune: Part Two",
      genre: "Sci-Fi, Adventure",
      duration: "166 min",
      rating: 8.5,
      language: "English",
      poster: "/placeholder.svg?height=400&width=300&text=Dune+2",
      releaseDate: "2024-03-01",
      addedDate: "2024-01-10",
      status: "coming-soon",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    },
    {
      id: 2,
      title: "Oppenheimer",
      genre: "Biography, Drama, History",
      duration: "180 min",
      rating: 8.3,
      language: "English",
      poster: "/placeholder.svg?height=400&width=300&text=Oppenheimer",
      releaseDate: "2023-07-21",
      addedDate: "2024-01-08",
      status: "now-showing",
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    },
    {
      id: 3,
      title: "Jawan",
      genre: "Action, Thriller",
      duration: "169 min",
      rating: 7.1,
      language: "Hindi",
      poster: "/placeholder.svg?height=400&width=300&text=Jawan",
      releaseDate: "2023-09-07",
      addedDate: "2024-01-05",
      status: "now-showing",
      description:
        "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.",
    },
    {
      id: 4,
      title: "Leo",
      genre: "Action, Crime, Thriller",
      duration: "164 min",
      rating: 7.3,
      language: "Tamil",
      poster: "/placeholder.svg?height=400&width=300&text=Leo",
      releaseDate: "2023-10-19",
      addedDate: "2024-01-03",
      status: "now-showing",
      description:
        "Parthiban has a loving family and leads a simple life, but trouble finds him when he crosses paths with Antony.",
    },
    {
      id: 5,
      title: "Killers of the Flower Moon",
      genre: "Crime, Drama, History",
      duration: "206 min",
      rating: 7.6,
      language: "English",
      poster: "/placeholder.svg?height=400&width=300&text=Killers",
      releaseDate: "2023-10-20",
      addedDate: "2023-12-28",
      status: "now-showing",
      description:
        "Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s.",
    },
  ])

  const removeFromWatchlist = (movieId: number) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId))
  }

  const filteredWatchlist = watchlist.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "now-showing":
        return "bg-green-100 text-green-800"
      case "coming-soon":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "now-showing":
        return "Now Showing"
      case "coming-soon":
        return "Coming Soon"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Heart className="w-10 h-10 text-red-500 fill-current" />
              My Watchlist
            </h1>
            <p className="text-muted-foreground">Keep track of movies you want to watch</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Badge variant="outline" className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {watchlist.length} Movies
            </Badge>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search your watchlist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        {/* Watchlist Grid */}
        {filteredWatchlist.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {searchQuery ? "No movies found" : "Your watchlist is empty"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery
                ? "Try searching with different keywords"
                : "Add movies to your watchlist to keep track of what you want to watch"}
            </p>
            {!searchQuery && (
              <Button asChild>
                <Link href="/movies">Browse Movies</Link>
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWatchlist.map((movie) => (
              <Card key={movie.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className={getStatusColor(movie.status)}>{getStatusText(movie.status)}</Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-yellow-500 text-black flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {movie.rating}
                    </Badge>
                  </div>
                  <button
                    onClick={() => removeFromWatchlist(movie.id)}
                    className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                    title="Remove from watchlist"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{movie.genre}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {movie.duration}
                    </div>
                    <span>{movie.language}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{movie.description}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Release: {new Date(movie.releaseDate).toLocaleDateString()}</span>
                    </div>
                    <span>Added: {new Date(movie.addedDate).toLocaleDateString()}</span>
                  </div>

                  <div className="flex gap-2">
                    {movie.status === "now-showing" ? (
                      <Button asChild size="sm" className="flex-1">
                        <Link href={`/movie/${movie.id}`}>
                          <Play className="w-4 h-4 mr-1" />
                          Book Now
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent" disabled>
                        <Calendar className="w-4 h-4 mr-1" />
                        Coming Soon
                      </Button>
                    )}

                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromWatchlist(movie.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Quick Stats */}
        {watchlist.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {watchlist.filter((m) => m.status === "now-showing").length}
                </div>
                <p className="text-muted-foreground">Now Showing</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {watchlist.filter((m) => m.status === "coming-soon").length}
                </div>
                <p className="text-muted-foreground">Coming Soon</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {(watchlist.reduce((sum, m) => sum + m.rating, 0) / watchlist.length).toFixed(1)}
                </div>
                <p className="text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
