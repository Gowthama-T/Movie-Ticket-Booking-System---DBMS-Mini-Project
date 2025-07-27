"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Facebook, Twitter, Instagram, Youtube, Mail, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Handle subscription logic here
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const socialLinks = {
    facebook: "https://www.facebook.com/cinesphere.official",
    twitter: "https://twitter.com/cinesphere_in",
    instagram: "https://www.instagram.com/cinesphere.official",
    youtube: "https://www.youtube.com/@CineSphereOfficial",
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CineSphere
              </span>
            </Link>
            <p className="text-muted-foreground">
              Your ultimate destination for movie ticket booking. Experience cinema like never before with seamless
              booking across India.
            </p>

            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Follow Us</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" asChild className="hover:text-blue-600">
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="hover:text-blue-400">
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="hover:text-pink-600">
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="hover:text-red-600">
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Social Media Stats */}
              <div className="text-xs text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <Facebook className="h-3 w-3" />
                  <span>50K+ followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-3 w-3" />
                  <span>75K+ followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Youtube className="h-3 w-3" />
                  <span>25K+ subscribers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/movies" className="block text-muted-foreground hover:text-foreground transition-colors">
                Movies
              </Link>
              <Link href="/theaters" className="block text-muted-foreground hover:text-foreground transition-colors">
                Theaters
              </Link>
              <Link href="/offers" className="block text-muted-foreground hover:text-foreground transition-colors">
                Offers & Deals
              </Link>
              <Link href="/gift-cards" className="block text-muted-foreground hover:text-foreground transition-colors">
                Gift Cards
              </Link>
              <Link href="/bookings" className="block text-muted-foreground hover:text-foreground transition-colors">
                My Bookings
              </Link>
              <Link href="/watchlist" className="block text-muted-foreground hover:text-foreground transition-colors">
                Watchlist
              </Link>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support & Legal</h3>
            <div className="space-y-2">
              <Link href="/help" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="/refund-policy"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="/accessibility"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>

          {/* Newsletter & App */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get latest movie updates, exclusive offers, and early access to tickets.
            </p>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10"
              />
              <Button type="submit" className="w-full h-10" disabled={subscribed}>
                {subscribed ? "Subscribed! ✓" : "Subscribe"}
              </Button>
            </form>

            {subscribed && (
              <p className="text-sm text-green-600 flex items-center gap-1">
                <Mail className="h-4 w-4" />
                Thank you for subscribing!
              </p>
            )}

            {/* App Download Links */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Download Our App</h4>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="justify-start h-10 bg-transparent">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">Download on</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </Button>
                <Button variant="outline" size="sm" className="justify-start h-10 bg-transparent">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@cinesphere.com" className="hover:text-foreground">
                  support@cinesphere.com
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <a href="tel:+919876543210" className="hover:text-foreground">
                  +91 98765 43210
                </a>
              </div>
              <div className="text-xs">24/7 Customer Support</div>
            </div>

            {/* Copyright & Privacy */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
              <p>© 2024 CineSphere Technologies Pvt Ltd. All rights reserved.</p>
              <div className="flex items-center space-x-2">
                <Link href="/privacy" className="hover:text-foreground underline decoration-dotted underline-offset-4">
                  Privacy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-foreground underline decoration-dotted underline-offset-4">
                  Terms
                </Link>
                <span>•</span>
                <Link href="/cookies" className="hover:text-foreground underline decoration-dotted underline-offset-4">
                  Cookies
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="mt-4 pt-4 border-t text-xs text-muted-foreground text-center">
            <p>
              CineSphere is India's leading movie ticket booking platform. Book tickets for the latest movies across
              Chennai, Bangalore, Mumbai, Delhi, Hyderabad, Pune, Kolkata, Ahmedabad, Kochi, and Coimbatore.
            </p>
            <div className="mt-2 flex justify-center items-center space-x-4">
              <span>🎬 10M+ Happy Customers</span>
              <span>•</span>
              <span>🎭 500+ Theater Partners</span>
              <span>•</span>
              <span>🏆 #1 Movie Booking App</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
