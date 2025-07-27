import { OfferCard } from "@/components/offer-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, Percent, CreditCard, Users } from "lucide-react"

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Exclusive Offers & Deals</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Save more on your movie tickets with our amazing offers and promotional deals
          </p>
        </div>

        {/* Offer Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All Offers</TabsTrigger>
            <TabsTrigger value="movies">Movies</TabsTrigger>
            <TabsTrigger value="theaters">Theaters</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="combo">Combo</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <OffersGrid />
          </TabsContent>

          <TabsContent value="movies" className="space-y-6">
            <OffersGrid category="movies" />
          </TabsContent>

          <TabsContent value="theaters" className="space-y-6">
            <OffersGrid category="theaters" />
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <OffersGrid category="payment" />
          </TabsContent>

          <TabsContent value="combo" className="space-y-6">
            <OffersGrid category="combo" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface OffersGridProps {
  category?: string
}

function OffersGrid({ category }: OffersGridProps) {
  const offers = [
    {
      id: 1,
      title: "Weekend Special - 50% Off",
      description: "Get 50% off on all movie tickets for weekend shows",
      discount: "50% OFF",
      validUntil: "2024-02-29",
      code: "WEEKEND50",
      category: "movies",
      icon: <Percent className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      terms: ["Valid only on weekends", "Maximum discount ₹200", "Not applicable on premium seats"],
    },
    {
      id: 2,
      title: "HDFC Bank Offer",
      description: "20% cashback on HDFC credit/debit cards",
      discount: "20% Cashback",
      validUntil: "2024-03-15",
      code: "HDFC20",
      category: "payment",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      terms: ["Valid on HDFC cards only", "Maximum cashback ₹150", "Minimum transaction ₹500"],
    },
    {
      id: 3,
      title: "Group Booking Discount",
      description: "Book 4 or more tickets and get 25% off",
      discount: "25% OFF",
      validUntil: "2024-02-20",
      code: "GROUP25",
      category: "movies",
      icon: <Users className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      terms: ["Minimum 4 tickets required", "Valid for all shows", "Cannot combine with other offers"],
    },
    {
      id: 4,
      title: "PVR Cinemas Special",
      description: "Exclusive 30% discount at PVR theaters",
      discount: "30% OFF",
      validUntil: "2024-02-25",
      code: "PVR30",
      category: "theaters",
      icon: <Gift className="w-6 h-6" />,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      terms: ["Valid only at PVR theaters", "Not valid on IMAX shows", "Maximum 2 tickets per booking"],
    },
    {
      id: 5,
      title: "Popcorn Combo Deal",
      description: "Free large popcorn with every 2 tickets",
      discount: "Free Combo",
      validUntil: "2024-03-10",
      code: "COMBO2024",
      category: "combo",
      icon: <Gift className="w-6 h-6" />,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      terms: ["Valid with minimum 2 tickets", "Combo includes popcorn + drink", "Available at select theaters"],
    },
    {
      id: 6,
      title: "First Time User",
      description: "Special 40% off for new users",
      discount: "40% OFF",
      validUntil: "2024-04-01",
      code: "NEWUSER40",
      category: "movies",
      icon: <Percent className="w-6 h-6" />,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
      terms: ["Valid for first booking only", "Maximum discount ₹300", "Valid for 30 days from registration"],
    },
    {
      id: 7,
      title: "UPI Payment Offer",
      description: "Get ₹100 cashback on UPI payments",
      discount: "₹100 Cashback",
      validUntil: "2024-02-28",
      code: "UPI100",
      category: "payment",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-gradient-to-r from-teal-500 to-blue-500",
      terms: ["Valid on UPI payments only", "Minimum transaction ₹400", "Once per user per month"],
    },
    {
      id: 8,
      title: "IMAX Experience Deal",
      description: "Special pricing for IMAX shows",
      discount: "₹150 OFF",
      validUntil: "2024-03-05",
      code: "IMAX150",
      category: "theaters",
      icon: <Gift className="w-6 h-6" />,
      color: "bg-gradient-to-r from-gray-700 to-gray-900",
      terms: ["Valid only for IMAX shows", "Limited time offer", "Subject to availability"],
    },
  ]

  const filteredOffers = category ? offers.filter((offer) => offer.category === category) : offers

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredOffers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  )
}
