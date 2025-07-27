import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: January 15, 2024</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using CineSphere's website and mobile application, you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of CineSphere's materials for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Booking and Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.1 Booking Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All bookings are subject to availability and confirmation. Prices displayed are inclusive of
                    applicable taxes unless otherwise stated. We reserve the right to refuse or cancel any booking at
                    our discretion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.2 Payment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment must be made in full at the time of booking. We accept various payment methods including
                    credit/debit cards, UPI, net banking, and digital wallets. All transactions are processed through
                    secure payment gateways.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.3 Convenience Fees</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A convenience fee may be charged for online bookings. This fee covers the cost of providing online
                    booking services and is non-refundable.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Cancellation and Refund Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.1 Cancellation by User</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tickets can be cancelled up to 2 hours before the show time. Cancellation charges as per theater
                    policy will be deducted from the refund amount. No cancellation is allowed within 2 hours of show
                    time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.2 Cancellation by Theater/CineSphere</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In case of show cancellation by the theater or technical issues, full refund will be processed
                    within 5-7 business days. We are not liable for any additional costs incurred by the user.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.3 Refund Processing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Refunds will be processed to the original payment method. Processing time may vary depending on the
                    payment method and bank policies.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">5. User Account and Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.1 Account Creation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Users must provide accurate and complete information when creating an account. You are responsible
                    for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.2 Prohibited Activities</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Using the service for any unlawful purpose</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Interfering with the proper working of the service</li>
                    <li>Using automated systems to access the service</li>
                    <li>Reselling tickets at inflated prices</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Theater Policies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users must comply with individual theater policies including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Age restrictions for certain movies</li>
                <li>Prohibition of outside food and beverages</li>
                <li>Security checks and bag inspections</li>
                <li>Mobile phone usage restrictions during shows</li>
                <li>Dress code requirements where applicable</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                CineSphere shall not be liable for any direct, indirect, incidental, special, or consequential damages
                resulting from the use or inability to use our service. Our total liability shall not exceed the amount
                paid by the user for the specific transaction in question.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                service, to understand our practices regarding the collection and use of your personal information.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                CineSphere reserves the right to modify these terms at any time. Users will be notified of significant
                changes via email or through the platform. Continued use of the service after modifications constitutes
                acceptance of the updated terms.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India. Any
                disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in
                Chennai, Tamil Nadu.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-semibold">CineSphere Technologies Pvt Ltd</p>
                <p className="text-muted-foreground">Email: legal@cinesphere.com</p>
                <p className="text-muted-foreground">Phone: +91 98765 43210</p>
                <p className="text-muted-foreground">Address: 123 Tech Park, Anna Salai, Chennai, Tamil Nadu 600002</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
