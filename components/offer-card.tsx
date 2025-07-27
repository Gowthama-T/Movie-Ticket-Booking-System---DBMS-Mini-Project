"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Copy, Check } from "lucide-react"
import { useState } from "react"

interface Offer {
  id: number
  title: string
  description: string
  discount: string
  validUntil: string
  code: string
  category: string
  icon: React.ReactNode
  color: string
  terms: string[]
}

interface OfferCardProps {
  offer: Offer
}

export function OfferCard({ offer }: OfferCardProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(offer.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`${offer.color} p-4 text-white`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {offer.icon}
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {offer.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{offer.discount}</div>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-1">{offer.title}</h3>
        <p className="text-white/90 text-sm">{offer.description}</p>
      </div>

      <CardContent className="p-4 space-y-4">
        {/* Promo Code */}
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <div>
            <p className="text-sm text-muted-foreground">Promo Code</p>
            <p className="font-mono font-bold">{offer.code}</p>
          </div>
          <Button variant="outline" size="sm" onClick={copyCode} className="flex items-center gap-2 bg-transparent">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>

        {/* Valid Until */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
        </div>

        {/* Terms & Conditions */}
        <div>
          <p className="text-sm font-medium mb-2">Terms & Conditions:</p>
          <ul className="text-xs text-muted-foreground space-y-1">
            {offer.terms.map((term, index) => (
              <li key={index} className="flex items-start gap-1">
                <span className="text-primary">•</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full">Use This Offer</Button>
      </CardContent>
    </Card>
  )
}
