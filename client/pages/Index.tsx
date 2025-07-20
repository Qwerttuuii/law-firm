import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Scale,
  Shield,
  Users,
  Award,
  CheckCircle,
  Phone,
  ChevronRight,
  Briefcase,
  Home,
  Building,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-law-navy via-law-navy-dark to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-law-gold text-law-navy-dark hover:bg-law-gold-light">
                Trusted Legal Excellence Since 1995
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Your Trusted Legal
                <span className="block text-law-gold">Partners</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                At FID ASIKA ILOBI & CO, we provide comprehensive legal services
                with unwavering commitment to justice, integrity, and client
                satisfaction across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-law-gold hover:bg-law-gold-light text-law-navy-dark font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    Free Consultation
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-law-navy"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-law-gold/20 to-transparent rounded-2xl flex items-center justify-center">
                <Scale className="w-32 h-32 text-law-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-law-navy mb-2">500+</div>
              <div className="text-gray-600">Successful Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-law-navy mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-law-navy mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-law-navy mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
              Our Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to meet your specific needs
              with expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-law-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-law-gold/20 transition-colors">
                  <Briefcase className="w-8 h-8 text-law-navy" />
                </div>
                <CardTitle className="text-xl text-law-navy">
                  Corporate Law
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Business formation, contracts, mergers & acquisitions, and
                  corporate governance
                </p>
                <Button
                  variant="ghost"
                  className="text-law-navy hover:text-law-gold"
                  asChild
                >
                  <Link to="/services">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-law-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-law-gold/20 transition-colors">
                  <Home className="w-8 h-8 text-law-navy" />
                </div>
                <CardTitle className="text-xl text-law-navy">
                  Real Estate Law
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Property transactions, land disputes, leasing, and real estate
                  development
                </p>
                <Button
                  variant="ghost"
                  className="text-law-navy hover:text-law-gold"
                  asChild
                >
                  <Link to="/services">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-law-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-law-gold/20 transition-colors">
                  <Users className="w-8 h-8 text-law-navy" />
                </div>
                <CardTitle className="text-xl text-law-navy">
                  Family Law
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Divorce, custody, adoption, matrimonial property, and family
                  disputes
                </p>
                <Button
                  variant="ghost"
                  className="text-law-navy hover:text-law-gold"
                  asChild
                >
                  <Link to="/services">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-law-navy hover:bg-law-navy-dark text-white"
              asChild
            >
              <Link to="/services">
                View All Services <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-6">
                Why Choose FID ASIKA ILOBI & CO?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine decades of legal expertise with modern approaches to
                deliver exceptional results for our clients.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-law-navy mb-2">
                      Expert Legal Team
                    </h3>
                    <p className="text-gray-600">
                      Our experienced attorneys bring specialized knowledge
                      across various practice areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-law-navy mb-2">
                      Client-Centered Approach
                    </h3>
                    <p className="text-gray-600">
                      We prioritize understanding your unique needs and
                      delivering personalized solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-law-navy mb-2">
                      Proven Track Record
                    </h3>
                    <p className="text-gray-600">
                      Over 25 years of successful case outcomes and satisfied
                      clients across Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-0 shadow-lg">
                <Shield className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-semibold text-law-navy mb-2">
                  Integrity First
                </h3>
                <p className="text-gray-600 text-sm">
                  Unwavering commitment to ethical practice and client trust
                </p>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <Award className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-semibold text-law-navy mb-2">
                  Award Winning
                </h3>
                <p className="text-gray-600 text-sm">
                  Recognized excellence in legal service delivery
                </p>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <Building className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-semibold text-law-navy mb-2">
                  Established Firm
                </h3>
                <p className="text-gray-600 text-sm">
                  Deep roots in the Nigerian legal community
                </p>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <Users className="w-12 h-12 text-law-navy mx-auto mb-4" />
                <h3 className="font-semibold text-law-navy mb-2">
                  Team Approach
                </h3>
                <p className="text-gray-600 text-sm">
                  Collaborative expertise for comprehensive solutions
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-law-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get expert legal advice tailored to your specific needs. Contact us
            today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-law-gold hover:bg-law-gold-light text-law-navy-dark font-semibold"
              asChild
            >
              <Link to="/contact">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +234 803 123 4567
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-law-navy"
              asChild
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
