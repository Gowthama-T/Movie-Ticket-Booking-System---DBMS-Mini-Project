import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Phone, Mail, MessageCircle, Users, CreditCard, Ticket } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to your questions or get in touch with our support team
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for help articles..." className="pl-12 h-14 text-lg" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Phone className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold mb-2">Call Support</h3>
            <p className="text-muted-foreground text-sm mb-4">Speak directly with our support team</p>
            <p className="font-bold text-lg">+91 98765 43210</p>
            <Badge variant="secondary" className="mt-2">
              24/7 Available
            </Badge>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-muted-foreground text-sm mb-4">Get instant help through live chat</p>
            <Button className="w-full">Start Chat</Button>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Mail className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-muted-foreground text-sm mb-4">Send us your questions via email</p>
            <p className="font-bold">support@cinesphere.com</p>
            <Badge variant="outline" className="mt-2">
              Response in 24hrs
            </Badge>
          </Card>
        </div>

        {/* FAQ Sections */}
        <Tabs defaultValue="booking" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="booking">Booking</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="booking">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  Booking Related Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I book movie tickets?</AccordionTrigger>
                    <AccordionContent>
                      To book movie tickets: 1) Select your city and movie, 2) Choose your preferred theater and
                      showtime, 3) Select your seats, 4) Make payment, 5) Receive confirmation via email/SMS.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I book tickets for multiple movies at once?</AccordionTrigger>
                    <AccordionContent>
                      Currently, you need to make separate bookings for each movie. However, you can book multiple
                      tickets for the same show in a single transaction.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How early can I book tickets?</AccordionTrigger>
                    <AccordionContent>
                      You can book tickets up to 7 days in advance. Tickets are usually available for booking as soon as
                      showtimes are announced by theaters.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I select specific seats?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Our interactive seat map allows you to choose your preferred seats. You can see which seats
                      are available, occupied, or blocked in real-time.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment & Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="payment-1">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept Credit/Debit Cards, UPI, Net Banking, Digital Wallets (Paytm, PhonePe, Google Pay), and
                      various EMI options.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="payment-2">
                    <AccordionTrigger>Are there any additional charges?</AccordionTrigger>
                    <AccordionContent>
                      Yes, there's a convenience fee and applicable taxes. The total amount including all charges is
                      displayed before payment confirmation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="payment-3">
                    <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                    <AccordionContent>
                      We use industry-standard encryption and secure payment gateways. We never store your card details
                      on our servers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="payment-4">
                    <AccordionTrigger>What if my payment fails?</AccordionTrigger>
                    <AccordionContent>
                      If payment fails, your seats are held for 15 minutes. You can retry payment or choose a different
                      payment method. If money is deducted, it will be refunded within 5-7 business days.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  Tickets & Cancellation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ticket-1">
                    <AccordionTrigger>How will I receive my tickets?</AccordionTrigger>
                    <AccordionContent>
                      After successful payment, you'll receive an email and SMS with your e-ticket. You can also
                      download tickets from your account or the booking confirmation page.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ticket-2">
                    <AccordionTrigger>Can I cancel my tickets?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can cancel tickets up to 2 hours before the show time. Cancellation charges may apply as
                      per theater policy.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ticket-3">
                    <AccordionTrigger>What do I need to carry to the theater?</AccordionTrigger>
                    <AccordionContent>
                      Carry your e-ticket (printed or on mobile) and a valid photo ID. Some theaters also accept QR code
                      scanning directly from your phone.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ticket-4">
                    <AccordionTrigger>Can I transfer my tickets to someone else?</AccordionTrigger>
                    <AccordionContent>
                      Tickets are non-transferable. However, the person attending the show doesn't need to be the one
                      who booked the tickets, as long as they have the e-ticket and valid ID.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Account & Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="account-1">
                    <AccordionTrigger>How do I create an account?</AccordionTrigger>
                    <AccordionContent>
                      Click on "Sign Up" in the top right corner, fill in your details, verify your email/phone, and
                      your account will be ready to use.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="account-2">
                    <AccordionTrigger>Can I book without creating an account?</AccordionTrigger>
                    <AccordionContent>
                      While you can browse movies and theaters without an account, you need to sign up to complete
                      bookings and access features like booking history and offers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="account-3">
                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                    <AccordionContent>
                      Click on "Forgot Password" on the login page, enter your email address, and follow the
                      instructions sent to your email to reset your password.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="account-4">
                    <AccordionTrigger>How do I update my profile information?</AccordionTrigger>
                    <AccordionContent>
                      Go to your profile section after logging in, click "Edit Profile", update your information, and
                      save changes. Some changes may require verification.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact Form */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Send us a message and we'll get back to you.
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="What's this about?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  className="w-full min-h-32 px-3 py-2 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Describe your issue or question in detail..."
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
