import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Construction, ChevronRight, Phone } from "lucide-react";

const AttorneysPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-law-navy via-law-navy-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Legal
            <span className="block text-law-gold">Team</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Meet the experienced attorneys dedicated to your success
          </p>
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
                Team Page Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're preparing detailed profiles of our accomplished legal
                team. This page will showcase our attorneys' expertise,
                experience, and achievements, helping you understand how our
                team can best serve your legal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-law-gold hover:bg-law-gold-light text-law-navy-dark font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Contact Our Team
                  </Link>
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

export default AttorneysPage;
