import { TheaterCard } from "./theater-card"

const theaters = [
  {
    id: 1,
    name: "PVR Cinemas",
    location: "Phoenix MarketCity, Mumbai",
    rating: 4.5,
    image: "/images/theaters/pvr-cinema.png",
    facilities: ["IMAX", "Dolby Atmos", "Recliner Seats", "Food Court"],
    distance: "2.5 km",
    screens: 8,
    pricing: "₹150 - ₹400",
  },
  {
    id: 2,
    name: "INOX Multiplex",
    location: "Forum Mall, Bangalore",
    rating: 4.3,
    image: "/images/theaters/inox-multiplex.png",
    facilities: ["4DX", "Premium Seating", "Parking", "Cafe"],
    distance: "3.2 km",
    screens: 6,
    pricing: "₹180 - ₹450",
  },
  {
    id: 3,
    name: "AGS Cinemas",
    location: "T. Nagar, Chennai",
    rating: 4.2,
    image: "/images/theaters/ags-cinemas.png",
    facilities: ["Luxury Recliners", "Dolby Vision", "Valet Parking", "Restaurant"],
    distance: "1.8 km",
    screens: 5,
    pricing: "₹200 - ₹500",
  },
  {
    id: 4,
    name: "Sathyam Cinemas",
    location: "Express Avenue, Chennai",
    rating: 4.4,
    image: "/images/theaters/sathyam-cinemas.png",
    facilities: ["Digital Projection", "Surround Sound", "AC", "Snack Bar"],
    distance: "4.1 km",
    screens: 7,
    pricing: "₹120 - ₹350",
  },
  {
    id: 5,
    name: "Escape Cinemas",
    location: "Express Avenue, Chennai",
    rating: 4.1,
    image: "/images/theaters/escape-cinemas.png",
    facilities: ["Premium Experience", "Comfortable Seating", "Digital Sound", "Concessions"],
    distance: "3.7 km",
    screens: 4,
    pricing: "₹160 - ₹380",
  },
  {
    id: 6,
    name: "Rohini Silver Screens",
    location: "Koyambedu, Chennai",
    rating: 4.0,
    image: "/images/theaters/rohini-silver-screens.png",
    facilities: ["Air Conditioning", "Digital Screens", "Parking", "Refreshments"],
    distance: "5.2 km",
    screens: 3,
    pricing: "₹100 - ₹300",
  },
]

export function TheaterGrid() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">{theaters.length} theaters found</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {theaters.map((theater) => (
          <TheaterCard key={theater.id} theater={theater} />
        ))}
      </div>
    </div>
  )
}
