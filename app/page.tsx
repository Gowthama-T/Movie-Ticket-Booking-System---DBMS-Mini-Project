import { Suspense } from "react"
import { MovieGrid } from "@/components/movie-grid"
import { SearchFilters } from "@/components/search-filters"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Now Showing</h2>
          <SearchFilters />
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  )
}
