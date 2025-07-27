import { Suspense } from "react"
import { TheaterGrid } from "@/components/theater-grid"
import { TheaterFilters } from "@/components/theater-filters"
import { TheaterSearch } from "@/components/theater-search"

export default function TheatersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">All Theaters</h1>
          <p className="text-muted-foreground text-lg">Find the best theaters near you with premium facilities</p>
        </div>

        {/* Search Bar - No event handlers passed as props */}
        <div className="relative mb-8">
          <TheaterSearch />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <TheaterFilters />
          </div>

          {/* Theaters Grid */}
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-muted animate-pulse rounded-lg h-64" />
                  ))}
                </div>
              }
            >
              <TheaterGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
