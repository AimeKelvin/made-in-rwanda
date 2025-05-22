
import React, { useState } from "react";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartPanel from "./CartPanel";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const [cartItemCount, setCartItemCount] = useState(0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "#shop" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-b border-white/10 dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-display font-bold text-2xl">
            <a href="/">MIR</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-gray-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 pr-4 py-1 rounded-full w-48"
              />
              <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-gray-400" />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-black text-white rounded-full">
                      {cartItemCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px]">
                <CartPanel />
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative ml-2">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-black text-white rounded-full">
                      {cartItemCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px]">
                <CartPanel />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-black hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="relative px-3 py-2">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 pr-4 py-1 rounded-full w-full"
              />
              <Search className="h-4 w-4 absolute left-5 top-4.5 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
