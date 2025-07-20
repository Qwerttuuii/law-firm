import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Scale,
  Award,
  Users,
  Building,
  CheckCircle,
  BookOpen,
  Globe,
  Heart,
  ChevronRight,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-law-navy via-law-navy-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-law-gold text-law-navy-dark hover:bg-law-gold-light">
              Established 1995
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
              <span className="block text-law-gold">FID ASIKA ILOBI & CO</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we have been at the forefront of legal
              excellence in Nigeria, providing comprehensive legal services with
              unwavering commitment to justice and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1995 by Fid Asika Ilobi, our firm began with a simple
                mission: to provide accessible, high-quality legal services to
                individuals and businesses across Nigeria. What started as a
                small practice has grown into one of the most respected law
                firms in the country.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our growth has been built on a foundation of trust, expertise,
                and an unwavering commitment to our clients' success. We have
                successfully handled landmark cases and continue to set
                precedents in various areas of Nigerian law.
              </p>
              <Button
                size="lg"
                className="bg-law-navy hover:bg-law-navy-dark text-white"
                asChild
              >
                <Link to="/contact">
                  Work With Us <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-law-gold/10 to-law-navy/10 rounded-2xl flex items-center justify-center">
                <Building className="w-32 h-32 text-law-navy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-law-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-law-navy" />
                </div>
                <CardTitle className="text-2xl text-law-navy">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional legal services that protect our
                  clients' interests while advancing justice and the rule of law
                  in Nigeria.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-law-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-law-navy" />
                </div>
                <CardTitle className="text-2xl text-law-navy">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading law firm in Nigeria, recognized for our
                  legal excellence, innovation, and commitment to client
                  success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-law-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-law-navy" />
                </div>
                <CardTitle className="text-2xl text-law-navy">
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Integrity, excellence, client focus, innovation, and social
                  responsibility guide every aspect of our practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-law-navy mb-2">
                    Landmark Supreme Court Victory
                  </h3>
                  <p className="text-gray-600">
                    Successfully argued a precedent-setting case that changed
                    the interpretation of property rights in Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-law-navy mb-2">
                    Corporate Law Excellence Award
                  </h3>
                  <p className="text-gray-600">
                    Recognized by the Nigerian Bar Association for outstanding
                    contribution to corporate law practice.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-law-navy mb-2">
                    Pro Bono Leadership
                  </h3>
                  <p className="text-gray-600">
                    Provided over 1,000 hours of free legal services to
                    underserved communities annually.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-law-navy mb-2">
                    International Recognition
                  </h3>
                  <p className="text-gray-600">
                    Featured in leading international legal directories for
                    excellence in Nigerian law.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-law-navy mb-2">
                    Technology Innovation
                  </h3>
                  <p className="text-gray-600">
                    Pioneered the use of advanced legal technology to improve
                    client service delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-law-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-law-navy mb-2">
                    Client Satisfaction
                  </h3>
                  <p className="text-gray-600">
                    Maintained a 98% client satisfaction rate and numerous
                    client referrals over the past decade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-law-navy mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <Award className="w-12 h-12 text-law-gold mx-auto mb-4" />
              <h3 className="font-semibold text-law-navy mb-2">
                Law Firm of the Year
              </h3>
              <p className="text-gray-600 text-sm">
                Nigerian Legal Awards 2023
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <Scale className="w-12 h-12 text-law-gold mx-auto mb-4" />
              <h3 className="font-semibold text-law-navy mb-2">
                Excellence in Litigation
              </h3>
              <p className="text-gray-600 text-sm">Bar Association 2022</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <Users className="w-12 h-12 text-law-gold mx-auto mb-4" />
              <h3 className="font-semibold text-law-navy mb-2">
                Client Service Award
              </h3>
              <p className="text-gray-600 text-sm">Legal Week 2023</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <Building className="w-12 h-12 text-law-gold mx-auto mb-4" />
              <h3 className="font-semibold text-law-navy mb-2">
                Corporate Law Leader
              </h3>
              <p className="text-gray-600 text-sm">
                International Legal Guide 2023
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-law-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have trusted us with
            their legal needs. Let us put our experience to work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-law-gold hover:bg-law-gold-light text-law-navy-dark font-semibold"
              asChild
            >
              <Link to="/contact">
                Get Started Today
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-law-navy"
              asChild
            >
              <Link to="/attorneys">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
