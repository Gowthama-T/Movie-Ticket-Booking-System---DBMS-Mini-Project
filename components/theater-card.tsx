import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Monitor, Clock } from "lucide-react"

interface Theater {
  id: number
  name: string
  location: string
  rating: number
  image: string
  facilities: string[]
  distance: string
  screens: number
  pricing: string
}

interface TheaterCardProps {
  theater: Theater
}

export function TheaterCard({ theater }: TheaterCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={theater.image || "/placeholder.svg"} alt={theater.name} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-green-600 text-white">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {theater.rating}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg">{theater.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {theater.location} • {theater.distance}
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Monitor className="w-4 h-4 mr-1" />
              {theater.screens} Screens
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {theater.pricing}
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {theater.facilities.slice(0, 3).map((facility) => (
              <Badge key={facility} variant="secondary" className="text-xs">
                {facility}
              </Badge>
            ))}
            {theater.facilities.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{theater.facilities.length - 3} more
              </Badge>
            )}
          </div>

          <Button className="w-full bg-purple-600 hover:bg-purple-700">View Showtimes</Button>
        </div>
      </CardContent>
    </Card>
  )
}
