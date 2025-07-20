import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const EagleLogo = () => (
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 bg-law-gold rounded-full flex items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-law-navy-dark"
        fill="currentColor"
      >
        <path d="M12 2L8.5 6.5L12 8L15.5 6.5L12 2Z" />
        <path d="M8.5 6.5L2 11L8.5 12.5L12 8L8.5 6.5Z" />
        <path d="M15.5 6.5L12 8L15.5 12.5L22 11L15.5 6.5Z" />
        <path d="M8.5 12.5L2 18L12 22L22 18L15.5 12.5L12 14L8.5 12.5Z" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-law-navy-dark">
        FID ASIKA ILOBI & CO
      </span>
      <span className="text-sm text-gray-600">LEGAL PRACTITIONERS</span>
    </div>
  </div>
);

const NavLink = ({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "px-4 py-2 rounded-md transition-colors duration-200 font-medium",
        isActive
          ? "bg-law-navy text-white"
          : "text-gray-700 hover:text-law-navy hover:bg-gray-100",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top contact bar */}
      <div className="bg-law-navy text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2" />
            <div className="flex items-center space-x-2" />
          </div>
          <div className="hidden md:flex items-center space-x-2" />
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex-shrink-0">
              <EagleLogo />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/attorneys">Attorneys</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              <NavLink to="/" className="block w-full text-left">
                Home
              </NavLink>
              <NavLink to="/about" className="block w-full text-left">
                About
              </NavLink>
              <NavLink to="/services" className="block w-full text-left">
                Services
              </NavLink>
              <NavLink to="/attorneys" className="block w-full text-left">
                Attorneys
              </NavLink>
              <NavLink to="/contact" className="block w-full text-left">
                Contact
              </NavLink>
              <Button className="w-full bg-law-gold hover:bg-law-gold-light text-law-navy-dark font-semibold mt-4">
                Free Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-law-navy-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-law-gold rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-law-navy-dark"
                    fill="currentColor"
                  >
                    <path d="M12 2L8.5 6.5L12 8L15.5 6.5L12 2Z" />
                    <path d="M8.5 6.5L2 11L8.5 12.5L12 8L8.5 6.5Z" />
                    <path d="M15.5 6.5L12 8L15.5 12.5L22 11L15.5 6.5Z" />
                    <path d="M8.5 12.5L2 18L12 22L22 18L15.5 12.5L12 14L8.5 12.5Z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold">
                    FID ASIKA ILOBI & CO
                  </span>
                  <p className="text-sm text-gray-300">LEGAL PRACTITIONERS</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Leading legal practitioners providing comprehensive legal
                services with integrity, expertise, and dedication to our
                clients across Nigeria.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-law-gold transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-law-gold transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/attorneys"
                    className="text-gray-300 hover:text-law-gold transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-law-gold transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+234 803 123 4567</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@fidasikailobi.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Imo, Nigeria</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 FID ASIKA ILOBI &amp; CO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
