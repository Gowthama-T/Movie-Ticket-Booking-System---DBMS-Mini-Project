import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Cookie, Settings, Shield, BarChart3 } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Cookie className="w-12 h-12 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold">Cookie Policy</h1>
          </div>
          <p className="text-muted-foreground">Last updated: January 15, 2024</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences, keeping you logged in, and
                understanding how you use our service.
              </p>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Types of Cookies We Use</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold">Essential Cookies</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    These cookies are necessary for the website to function properly.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Authentication and security</li>
                    <li>• Shopping cart functionality</li>
                    <li>• Form submission</li>
                    <li>• Load balancing</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <strong>Duration:</strong> Session or up to 1 year
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Help us understand how visitors interact with our website.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Page views and traffic sources</li>
                    <li>• User behavior patterns</li>
                    <li>• Performance metrics</li>
                    <li>• Error tracking</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <strong>Duration:</strong> Up to 2 years
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <div className="flex items-center mb-3">
                    <Settings className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="text-lg font-semibold">Functional Cookies</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Remember your preferences and provide enhanced features.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Language preferences</li>
                    <li>• Location settings</li>
                    <li>• Theme preferences</li>
                    <li>• Recently viewed items</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <strong>Duration:</strong> Up to 1 year
                  </div>
                </div>

                <div className="p-6 border rounded-lg">
                  <div className="flex items-center mb-3">
                    <Cookie className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="text-lg font-semibold">Marketing Cookies</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Personalized ads</li>
                    <li>• Social media integration</li>
                    <li>• Campaign tracking</li>
                    <li>• Retargeting</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <strong>Duration:</strong> Up to 1 year
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You have control over which cookies you accept. Here's how you can manage them:
                </p>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Browser Settings</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Most browsers allow you to control cookies through their settings:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Delete cookies when you close your browser</li>
                    <li>• Allow cookies from specific sites</li>
                  </ul>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Our Cookie Consent Tool</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    When you first visit our website, you'll see a cookie banner where you can:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Accept all cookies</li>
                    <li>• Reject non-essential cookies</li>
                    <li>• Customize your preferences</li>
                    <li>• Change your settings anytime</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We work with trusted third-party services that may set their own cookies:
              </p>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Google Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Helps us understand website usage and improve user experience.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Payment Processors</h4>
                  <p className="text-sm text-muted-foreground">Secure payment processing and fraud prevention.</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Social Media Platforms</h4>
                  <p className="text-sm text-muted-foreground">Social sharing buttons and embedded content.</p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While you can disable cookies, doing so may affect your experience:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Without Essential Cookies</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Cannot stay logged in</li>
                    <li>• Shopping cart won't work</li>
                    <li>• Forms may not submit</li>
                    <li>• Security features disabled</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Without Other Cookies</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Need to reset preferences</li>
                    <li>• Less personalized experience</li>
                    <li>• May see irrelevant ads</li>
                    <li>• Some features may not work</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal
                reasons. We'll notify you of any significant changes by posting the updated policy on our website and
                updating the "Last updated" date.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="p-6 bg-muted rounded-lg">
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email:</strong> privacy@cinesphere.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 98765 43210
                  </p>
                  <p>
                    <strong>Address:</strong> CineSphere Technologies Pvt Ltd, 123 Tech Park, Anna Salai, Chennai, Tamil
                    Nadu 600002
                  </p>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
