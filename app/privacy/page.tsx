import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Eye, Lock, Users, Database, Bell } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground">Last updated: January 15, 2024</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">1. Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1.1 Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We collect personal information that you provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Create an account or register for our services</li>
                    <li>Make a booking or purchase tickets</li>
                    <li>Contact our customer support</li>
                    <li>Subscribe to our newsletter or promotional communications</li>
                    <li>Participate in surveys, contests, or promotional activities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">1.2 Types of Personal Data</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Name, email address, phone number</li>
                    <li>Date of birth and age verification information</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Booking history and preferences</li>
                    <li>Location data (with your consent)</li>
                    <li>Device information and IP address</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Service Provision</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Process bookings and payments</li>
                      <li>• Send booking confirmations</li>
                      <li>• Provide customer support</li>
                      <li>• Manage your account</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Communication</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Send promotional offers</li>
                      <li>• Notify about new movies</li>
                      <li>• Share important updates</li>
                      <li>• Respond to inquiries</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Improvement</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Analyze usage patterns</li>
                      <li>• Improve our services</li>
                      <li>• Personalize experience</li>
                      <li>• Develop new features</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Legal Compliance</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Comply with regulations</li>
                      <li>• Prevent fraud</li>
                      <li>• Enforce terms of service</li>
                      <li>• Protect user safety</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">3. Information Sharing</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information in the following circumstances:
                </p>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.1 Service Providers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We work with trusted third-party service providers who assist us in operating our platform,
                    including payment processors, email service providers, and analytics services. These providers are
                    bound by confidentiality agreements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.2 Theater Partners</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We share necessary booking information with theater partners to facilitate your movie experience,
                    including your name and booking details.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.3 Legal Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may disclose your information if required by law, court order, or government regulation, or to
                    protect our rights and the safety of our users.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">4. Data Security</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Technical Measures</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• SSL/TLS encryption</li>
                      <li>• Secure data centers</li>
                      <li>• Regular security audits</li>
                      <li>• Access controls</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Organizational Measures</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Employee training</li>
                      <li>• Data access policies</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular policy reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Bell className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">5. Your Rights and Choices</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Access and Portability</h4>
                    <p className="text-sm text-muted-foreground">
                      Request a copy of your personal data and receive it in a structured format.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Correction</h4>
                    <p className="text-sm text-muted-foreground">
                      Update or correct inaccurate personal information in your account.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Deletion</h4>
                    <p className="text-sm text-muted-foreground">
                      Request deletion of your personal data, subject to legal and contractual obligations.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Marketing Communications</h4>
                    <p className="text-sm text-muted-foreground">
                      Opt-out of promotional emails and SMS messages at any time.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for basic website functionality and security.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how users interact with our platform.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver personalized advertisements and content.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with
                legal obligations. Booking information is typically retained for 7 years for accounting and legal
                purposes. Account information is retained until you request deletion or your account becomes inactive
                for an extended period.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence.
                We ensure appropriate safeguards are in place to protect your personal information in accordance with
                applicable data protection laws.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on our website and sending you an email notification. Your continued use of our
                services after such modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="p-6 bg-muted rounded-lg">
                <h4 className="font-semibold mb-3">Data Protection Officer</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email:</strong> privacy@cinesphere.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 98765 43210
                  </p>
                  <p>
                    <strong>Address:</strong> CineSphere Technologies Pvt Ltd
                    <br />
                    123 Tech Park, Anna Salai
                    <br />
                    Chennai, Tamil Nadu 600002, India
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
