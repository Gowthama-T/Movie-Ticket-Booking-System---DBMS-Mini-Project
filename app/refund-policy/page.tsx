import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RefreshCw, Clock, CreditCard, AlertCircle } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <RefreshCw className="w-12 h-12 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold">Refund Policy</h1>
          </div>
          <p className="text-muted-foreground">Last updated: January 15, 2024</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Cancellation & Refund Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At CineSphere, we understand that plans can change. Our refund policy is designed to be fair and
                transparent while considering the constraints of the entertainment industry and our theater partners.
              </p>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Cancellation Timeline</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg bg-green-50 border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">More than 4 hours before show</h3>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• Full refund minus convenience fee</li>
                    <li>• Cancellation fee: ₹20 per ticket</li>
                    <li>• Refund processed within 5-7 business days</li>
                    <li>• No questions asked cancellation</li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg bg-yellow-50 border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">2-4 hours before show</h3>
                  <ul className="text-sm text-yellow-700 space-y-2">
                    <li>• 75% refund of ticket price</li>
                    <li>• Cancellation fee: ₹50 per ticket</li>
                    <li>• Convenience fee non-refundable</li>
                    <li>• Refund processed within 7-10 business days</li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg bg-red-50 border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Less than 2 hours before show</h3>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• No cancellation allowed</li>
                    <li>• Tickets are non-refundable</li>
                    <li>• Exception: Medical emergency with proof</li>
                    <li>• Theater technical issues: Full refund</li>
                  </ul>
                </div>

                <div className="p-6 border rounded-lg bg-blue-50 border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">After show starts</h3>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• No refund available</li>
                    <li>• Tickets become invalid</li>
                    <li>• Exception: Technical issues at theater</li>
                    <li>• Force majeure events: Case by case</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Refund Process</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">How to Cancel</h3>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Log in to your CineSphere account</li>
                    <li>Go to "My Bookings" section</li>
                    <li>Find the booking you want to cancel</li>
                    <li>Click "Cancel Booking" button</li>
                    <li>Confirm cancellation and provide reason</li>
                    <li>Receive cancellation confirmation via email/SMS</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Refund Methods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Original Payment Method</h4>
                      <p className="text-sm text-muted-foreground">
                        Refunds are processed back to the original payment method used for booking.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">CineSphere Wallet</h4>
                      <p className="text-sm text-muted-foreground">
                        Instant refund to your CineSphere wallet for future bookings.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Processing Time</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">Credit/Debit Cards</span>
                      <span className="text-muted-foreground">5-7 business days</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">UPI/Digital Wallets</span>
                      <span className="text-muted-foreground">3-5 business days</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">Net Banking</span>
                      <span className="text-muted-foreground">5-7 business days</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">CineSphere Wallet</span>
                      <span className="text-muted-foreground">Instant</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold">Special Circumstances</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Theater Cancellation</h4>
                  <p className="text-sm text-muted-foreground">
                    If a show is cancelled by the theater due to technical issues, maintenance, or other reasons, you
                    will receive a full refund including all fees within 3-5 business days.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Medical Emergency</h4>
                  <p className="text-sm text-muted-foreground">
                    In case of medical emergencies, we may consider refunds on a case-by-case basis with proper medical
                    documentation, even within the no-refund window.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Force Majeure</h4>
                  <p className="text-sm text-muted-foreground">
                    Events beyond our control (natural disasters, government orders, etc.) will be handled on a
                    case-by-case basis with maximum consideration for customer convenience.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Technical Issues</h4>
                  <p className="text-sm text-muted-foreground">
                    If you experience technical issues during booking that result in duplicate charges or booking
                    errors, please contact our support team immediately for resolution.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Non-Refundable Items</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="text-red-700 space-y-2">
                  <li>• Convenience fees and service charges</li>
                  <li>• Processing fees for payment gateways</li>
                  <li>• Gift card purchases (unless defective)</li>
                  <li>• Promotional or discounted tickets (terms apply)</li>
                  <li>• Tickets purchased with gift cards or promotional credits</li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Refund Calculation Example</h2>
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Sample Booking:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Ticket Price (2 tickets × ₹300)</span>
                    <span>₹600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Convenience Fee</span>
                    <span>₹40</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>₹60</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total Paid</span>
                    <span>₹700</span>
                  </div>
                </div>

                <h4 className="font-semibold mt-4 mb-2">Refund Scenarios:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cancelled 4+ hours before: ₹600 - ₹40 (cancellation fee)</span>
                    <span className="text-green-600">₹560</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cancelled 2-4 hours before: 75% of ₹600 - ₹100 (cancellation fee)</span>
                    <span className="text-yellow-600">₹350</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cancelled less than 2 hours before</span>
                    <span className="text-red-600">₹0</span>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact for Refund Issues</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any issues with refunds or need assistance with cancellations:
              </p>
              <div className="p-6 bg-muted rounded-lg">
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Customer Support:</strong> +91 98765 43210
                  </p>
                  <p>
                    <strong>Email:</strong> refunds@cinesphere.com
                  </p>
                  <p>
                    <strong>Live Chat:</strong> Available 24/7 on our website
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 24 hours for refund queries
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
