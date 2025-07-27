import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accessibility, Eye, Ear, Hand, Brain, Heart } from "lucide-react"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Accessibility className="w-12 h-12 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold">Accessibility Statement</h1>
          </div>
          <p className="text-muted-foreground">Making cinema accessible for everyone</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                CineSphere is committed to ensuring that our movie booking platform and cinema experiences are
                accessible to all users, including those with disabilities. We believe that everyone deserves equal
                access to entertainment and strive to provide an inclusive experience for all our customers.
              </p>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Visual Accessibility</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Website Features</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• High contrast color schemes</li>
                      <li>• Scalable text up to 200% without loss of functionality</li>
                      <li>• Alternative text for all images</li>
                      <li>• Keyboard navigation support</li>
                      <li>• Screen reader compatibility</li>
                      <li>• Focus indicators for interactive elements</li>
                    </ul>
                  </div>

                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Theater Accommodations</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Audio description services available</li>
                      <li>• Large print programs and menus</li>
                      <li>• Braille signage in select theaters</li>
                      <li>• Guide dog friendly policies</li>
                      <li>• Accessible seating with companion seats</li>
                      <li>• Staff assistance for navigation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Ear className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Hearing Accessibility</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Digital Platform</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Closed captions for all video content</li>
                      <li>• Visual alerts and notifications</li>
                      <li>• Text-based customer support options</li>
                      <li>• Sign language interpretation videos</li>
                      <li>• Audio content transcriptions</li>
                    </ul>
                  </div>

                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Cinema Experience</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Closed captioning devices available</li>
                      <li>• Hearing loop systems in select theaters</li>
                      <li>• Open caption screenings scheduled regularly</li>
                      <li>• Visual fire alarms and emergency notifications</li>
                      <li>• Staff trained in basic sign language</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Hand className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Motor Accessibility</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Website Navigation</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Full keyboard navigation support</li>
                      <li>• Voice control compatibility</li>
                      <li>• Adjustable click targets and buttons</li>
                      <li>• Timeout extensions for forms</li>
                      <li>• Alternative input method support</li>
                    </ul>
                  </div>

                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Physical Accommodations</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Wheelchair accessible entrances and seating</li>
                      <li>• Accessible parking spaces</li>
                      <li>• Elevator access to all floors</li>
                      <li>• Accessible restrooms</li>
                      <li>• Lowered concession counters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Cognitive Accessibility</h2>
              </div>

              <div className="space-y-4">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">User Experience Design</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Clear and simple navigation structure</li>
                    <li>• Consistent layout and design patterns</li>
                    <li>• Plain language content</li>
                    <li>• Error prevention and clear error messages</li>
                    <li>• Multiple ways to complete tasks</li>
                    <li>• Progress indicators for multi-step processes</li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Special Screenings</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Sensory-friendly screenings with reduced sound and lighting</li>
                    <li>• Relaxed atmosphere screenings</li>
                    <li>• Quiet spaces available in theaters</li>
                    <li>• Advance screening information and preparation materials</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Accessibility Standards Compliance</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our website and mobile applications are designed to meet or exceed the following accessibility
                  standards:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">WCAG 2.1 Level AA</h4>
                    <p className="text-sm text-muted-foreground">
                      Web Content Accessibility Guidelines compliance for digital accessibility.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Section 508</h4>
                    <p className="text-sm text-muted-foreground">
                      Federal accessibility standards for electronic and information technology.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">ADA Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Americans with Disabilities Act compliance for physical and digital spaces.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">EN 301 549</h4>
                    <p className="text-sm text-muted-foreground">
                      European standard for accessibility requirements for ICT procurement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Accessibility Features by Theater</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Accessibility features may vary by theater location. When booking, look for these symbols:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Accessibility className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-xs font-semibold">Wheelchair Accessible</p>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Ear className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-xs font-semibold">Hearing Assistance</p>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Eye className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-xs font-semibold">Audio Description</p>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Brain className="w-4 h-4 text-orange-600" />
                    </div>
                    <p className="text-xs font-semibold">Sensory Friendly</p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Request Accommodations</h2>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help make your movie experience enjoyable. If you need specific accommodations or have
                  accessibility requirements, please contact us in advance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Advance Booking</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Call our accessibility hotline: +91 98765 43211</li>
                      <li>• Email: accessibility@cinesphere.com</li>
                      <li>• Request accommodations 24 hours in advance</li>
                      <li>• Specify your needs during booking</li>
                    </ul>
                  </div>

                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Day of Visit</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Arrive 30 minutes early for assistance</li>
                      <li>• Speak with theater manager on duty</li>
                      <li>• Present accessibility needs at box office</li>
                      <li>• Emergency accessibility support available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Feedback and Continuous Improvement</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We are continuously working to improve our accessibility features and welcome your feedback. Your
                  input helps us identify areas for improvement and implement new accessibility solutions.
                </p>

                <div className="p-6 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-3">Share Your Experience</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Accessibility Feedback:</strong> accessibility@cinesphere.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91 98765 43211 (Accessibility Hotline)
                    </p>
                    <p>
                      <strong>Online Form:</strong> Available on our website under "Accessibility Feedback"
                    </p>
                    <p>
                      <strong>Response Time:</strong> We respond to all accessibility inquiries within 48 hours
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Accessibility Tools</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our website is compatible with various accessibility tools and assistive technologies:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Screen Readers</h4>
                    <p className="text-sm text-muted-foreground">JAWS, NVDA, VoiceOver, TalkBack</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Voice Control</h4>
                    <p className="text-sm text-muted-foreground">Dragon NaturallySpeaking, Voice Control</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Magnification</h4>
                    <p className="text-sm text-muted-foreground">ZoomText, MAGic, built-in browser zoom</p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Legal Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                CineSphere is committed to compliance with all applicable accessibility laws and regulations, including
                but not limited to the Americans with Disabilities Act (ADA), Section 508 of the Rehabilitation Act, and
                the Web Content Accessibility Guidelines (WCAG) 2.1. We regularly audit our services and facilities to
                ensure ongoing compliance and accessibility improvements.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Last Updated</h2>
              <p className="text-muted-foreground">
                This accessibility statement was last updated on January 15, 2024. We review and update this statement
                regularly to reflect our ongoing accessibility improvements and compliance efforts.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
