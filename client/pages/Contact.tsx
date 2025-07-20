import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Construction, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-law-navy via-law-navy-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact
            <span className="block text-law-gold">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our legal experts today
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Phone className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-semibold text-law-navy mb-2 text-lg">
                  Phone
                </h3>
                <p className="text-gray-600">+234 803 123 4567</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <Mail className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-semibold text-law-navy mb-2 text-lg">
                  Email
                </h3>
                <p className="text-gray-600">info@fidasikailobi.com</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <MapPin className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-semibold text-law-navy mb-2 text-lg">
                  Location
                </h3>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-xl">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 bg-law-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Construction className="w-10 h-10 text-law-navy" />
              </div>
              <CardTitle className="text-3xl text-law-navy mb-4">
                Full Contact Page Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're building a comprehensive contact page with an interactive
                contact form, detailed office information, location map, and
                office hours. In the meantime, please use the contact
                information above to reach us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-law-gold hover:bg-law-gold-light text-law-navy-dark font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +234 803 123 4567
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-law-navy text-law-navy hover:bg-law-navy hover:text-white"
                  asChild
                >
                  <Link to="/">
                    Return Home <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
