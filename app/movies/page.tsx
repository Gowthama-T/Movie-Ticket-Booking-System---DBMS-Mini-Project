import { Suspense } from "react"
import { MovieGrid } from "@/components/movie-grid"
import { MovieFilters } from "@/components/movie-filters"
import { MovieSearch } from "@/components/movie-search"

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">All Movies</h1>
          <p className="text-muted-foreground text-lg">Discover the latest movies playing in theaters near you</p>
        </div>

        {/* Search Bar - No event handlers passed as props */}
        <div className="relative mb-8">
          <MovieSearch />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <MovieFilters />
          </div>

          {/* Movies Grid */}
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-muted animate-pulse rounded-lg h-96" />
                  ))}
                </div>
              }
            >
              <MovieGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
