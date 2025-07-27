import { BookingConfirmation } from "@/components/booking-confirmation"

interface BookingConfirmationPageProps {
  params: Promise<{ bookingId: string }>
}

export default async function BookingConfirmationPage({ params }: BookingConfirmationPageProps) {
  const { bookingId } = await params

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <BookingConfirmation bookingId={bookingId} />
      </div>
    </div>
  )
}
