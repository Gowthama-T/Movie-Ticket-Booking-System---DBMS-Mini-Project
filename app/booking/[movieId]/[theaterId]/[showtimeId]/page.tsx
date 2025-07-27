import { SeatSelection } from "@/components/seat-selection"
import { BookingSummary } from "@/components/booking-summary"

interface BookingPageProps {
  params: Promise<{
    movieId: string
    theaterId: string
    showtimeId: string
  }>
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { movieId, theaterId, showtimeId } = await params

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SeatSelection movieId={movieId} theaterId={theaterId} showtimeId={showtimeId} />
          </div>
          <div>
            <BookingSummary movieId={movieId} theaterId={theaterId} showtimeId={showtimeId} />
          </div>
        </div>
      </div>
    </div>
  )
}
