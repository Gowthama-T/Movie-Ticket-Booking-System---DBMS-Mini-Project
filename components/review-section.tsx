"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import { useState } from "react"

interface ReviewSectionProps {
  movieId: string
}

// Mock reviews data
const reviews = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    rating: 5,
    date: "2024-01-10",
    review:
      "Absolutely incredible movie! The visual effects were stunning and the storyline was perfectly executed. A must-watch for all Marvel fans.",
    helpful: 24,
    notHelpful: 2,
  },
  {
    id: 2,
    user: {
      name: "Sarah Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: false,
    },
    rating: 4,
    date: "2024-01-08",
    review:
      "Great movie with amazing action sequences. The emotional moments really hit hard. Could have been a bit shorter though.",
    helpful: 18,
    notHelpful: 5,
  },
  {
    id: 3,
    user: {
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    rating: 5,
    date: "2024-01-05",
    review:
      "Perfect conclusion to the saga. Every character got their moment to shine. The theater experience was unforgettable!",
    helpful: 31,
    notHelpful: 1,
  },
]

export function ReviewSection({ movieId }: ReviewSectionProps) {
  const [userRating, setUserRating] = useState(0)
  const [userReview, setUserReview] = useState("")

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reviews & Ratings</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
          </div>
          <span className="text-muted-foreground">({reviews.length} reviews)</span>
        </div>
      </div>

      {/* Write Review */}
      <Card>
        <CardHeader>
          <CardTitle>Write a Review</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Your Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} onClick={() => setUserRating(star)} className="focus:outline-none">
                  <Star
                    className={`w-6 h-6 ${star <= userRating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Your Review</label>
            <Textarea
              placeholder="Share your thoughts about this movie..."
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
              rows={4}
            />
          </div>
          <Button disabled={!userRating || !userReview.trim()}>Submit Review</Button>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{review.user.name}</span>
                    {review.user.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                    <span className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.review}</p>
                  <div className="flex items-center space-x-4 pt-2">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {review.helpful}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ThumbsDown className="w-4 h-4 mr-1" />
                      {review.notHelpful}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
