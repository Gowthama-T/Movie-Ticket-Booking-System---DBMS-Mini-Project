import { Suspense } from "react"
import { MovieDetails } from "@/components/movie-details"
import { ShowtimeSelector } from "@/components/showtime-selector"
import { ReviewSection } from "@/components/review-section"

interface MoviePageProps {
  params: Promise<{ id: string }>
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="animate-pulse bg-muted h-96" />}>
        <MovieDetails movieId={id} />
      </Suspense>

      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
          <ShowtimeSelector movieId={id} />
        </Suspense>

        <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg mt-8" />}>
          <ReviewSection movieId={id} />
        </Suspense>
      </div>
    </div>
  )
}
